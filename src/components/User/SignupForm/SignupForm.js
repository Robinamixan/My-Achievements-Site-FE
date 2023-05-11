import React from 'react';
import PropTypes from 'prop-types';

import * as authenticationClient from '../../../clients/user-client/authentication';

import Popup from '../../UI/Popup/Popup';
import Button from '../../UI/Button/Button';
import styleClasses from './SignupForm.module.css';

SignupForm.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func
};

function SignupForm(props) {
    const initialState = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    const [formValues, setFormValues] = React.useState(initialState);

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

        setFormValues(initialState);
        props.onClose();
    };

    if (!props.isVisible) {
        return;
    }

    return (
        <Popup className={styleClasses['signup-form']} onBackdropClick={props.onClose}>
            <h2>Signup</h2>
            <form onSubmit={signupHandler}>
                <div className={styleClasses['form-input']}>
                    <label form={'signup-username'}>Username</label>
                    <input
                        id={'signup-username'}
                        value={formValues.username}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className={styleClasses['form-input']}>
                    <label>Email</label>
                    <input
                        id={'signup-email'}
                        type={'email'}
                        value={formValues.email}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className={styleClasses['form-input']}>
                    <label>Password</label>
                    <input
                        id={'signup-password'}
                        type={'password'}
                        value={formValues.password}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className={styleClasses['form-input']}>
                    <label>Confirm Password</label>
                    <input
                        id={'signup-confirm-password'}
                        type={'password'}
                        value={formValues.confirmPassword}
                        onChange={inputChangeHandler}
                    />
                </div>
                <Button type={'submit'}>Signup</Button>
            </form>
        </Popup>
    );
}

export default SignupForm;