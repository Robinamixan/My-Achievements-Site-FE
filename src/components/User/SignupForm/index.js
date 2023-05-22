import React from 'react';
import PropTypes from 'prop-types';

import * as authenticationClient from '../../../clients/user-client/authentication';

import Popup from '../../UI/Popup';
import Button from '../../UI/Button';
import styleClasses from './SignupForm.module.css';
import Input from '../../UI/Input';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
};

SignupForm.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func
};

function SignupForm({ isVisible, onClose }) {
    const [formValues, setFormValues] = React.useState(INITIAL_STATE);

    if (!isVisible) {
        return;
    }

    const inputChangeHandler = (event) => {
        let fieldName;
        switch (event.target.id) {
            case 'signup-username':
                fieldName = 'username';
                break;
            case 'signup-email':
                fieldName = 'email';
                break;
            case 'signup-password':
                fieldName = 'password';
                break;
            case 'signup-confirm-password':
                fieldName = 'confirmPassword';
                break;
            default:
                fieldName = 'undefined';
        }

        setFormValues({
            ...formValues,
            [fieldName]: event.target.value,
        });
    };

    const signupHandler = async (event) => {
        event.preventDefault();

        try {
            await authenticationClient.signUp({
                email: formValues.email,
                password: formValues.password,
                name: formValues.username
            });
        } catch (error) {
            return;
        }

        setFormValues(INITIAL_STATE);
        onClose();
    };

    return (
        <Popup className={styleClasses['signup-form']} onBackdropClick={onClose}>
            <h2>Signup</h2>
            <form onSubmit={signupHandler}>
                <Input
                    id="signup-username"
                    label="Username"
                    type="text"
                    value={formValues.username}
                    onChange={inputChangeHandler}
                />
                <Input
                    id="signup-email"
                    label="Email"
                    type="email"
                    value={formValues.email}
                    onChange={inputChangeHandler}
                />
                <Input
                    id="signup-password"
                    label="Password"
                    type="password"
                    value={formValues.password}
                    onChange={inputChangeHandler}
                />
                <Input
                    id="signup-confirm-password"
                    label="Confirm Password"
                    type="password"
                    value={formValues.confirmPassword}
                    onChange={inputChangeHandler}
                />
                <Button type="submit">Signup</Button>
            </form>
        </Popup>
    );
}

export default SignupForm;