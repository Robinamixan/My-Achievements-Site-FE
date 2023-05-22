import React from 'react';
import PropTypes from 'prop-types';

import * as authenticationClient from '../../../clients/user-client/authentication';

import Popup from '../../UI/Popup';
import Button from '../../UI/Button';
import styleClasses from './LoginForm.module.css';
import AuthContext from '../../../store/auth-context';
import Input from '../../UI/Input';
import ValidationMessage from '../../UI/ValidationMessage';

const REQUIRED_PASSWORD_LENGTH = 5;
const INITIAL_STATE = {
    email: '',
    password: '',
    isValidEmail: true,
    isValidPassword: true,
};

LoginForm.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func
};

function LoginForm({ isVisible, onClose }) {
    const context = React.useContext(AuthContext);
    const [formValues, setFormValues] = React.useState(INITIAL_STATE);
    const [validationMessage, setValidationMessage] = React.useState('');

    if (!isVisible) {
        return;
    }

    const inputChangeHandler = (event) => {
        let fieldName;
        switch (event.target.id) {
            case 'login-email':
                fieldName = 'email';
                break;
            case 'login-password':
                fieldName = 'password';
                break;
            default:
                fieldName = 'undefined';
        }

        setFormValues({
            ...formValues,
            [fieldName]: event.target.value,
            isValidPassword: true,
            isValidEmail: true,
        });
    };

    const loginHandler = async (event) => {
        event.preventDefault();

        if (!formValues.email || !formValues.password) {
            setValidationMessage('Please enter valid email and password.');
            setFormValues({
                ...formValues,
                isValidPassword: !!formValues.password,
                isValidEmail: !!formValues.email,
            });
            return;
        }

        if (formValues.password.length < REQUIRED_PASSWORD_LENGTH) {
            setValidationMessage('Please enter valid password. It should be at least 5 characters long');
            setFormValues({
                ...formValues,
                isValidPassword: false,
            });
            return;
        }

        try {
            const response = await authenticationClient.login({
                email: formValues.email,
                password: formValues.password
            });

            context.onLogin(response.userId, response.token);
        } catch (error) {
            setFormValues({
                ...formValues,
                isValidPassword: false,
                isValidEmail: false,
            });
            setValidationMessage('Sorry, we can not find account with these email and password.');
            return;
        }

        setFormValues(INITIAL_STATE);
        onClose();
    };

    return (
        <Popup className={styleClasses['login-form']} onBackdropClick={onClose}>
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
                <ValidationMessage
                    isVisible={!formValues.isValidEmail || !formValues.isValidPassword}
                    message={validationMessage}
                />
                <Input
                    id="login-email"
                    type="email"
                    label="Email"
                    value={formValues.email}
                    onChange={inputChangeHandler}
                    isValid={formValues.isValidEmail}
                />
                <Input
                    id="login-password"
                    type="password"
                    label="Password"
                    value={formValues.password}
                    onChange={inputChangeHandler}
                    isValid={formValues.isValidPassword}
                />
                <Button type="submit">Login</Button>
            </form>
        </Popup>
    );
}

export default LoginForm;