import React from 'react';
import PropTypes from 'prop-types';

import * as authenticationClient from '../../../clients/user-client/authentication';

import Popup from '../../UI/Popup/Popup';
import Button from '../../UI/Button/Button';
import styleClasses from './LoginForm.module.css';
import AuthContext from '../../../store/auth-context';
import Input from '../../UI/Input/Input';

LoginForm.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func
};

function LoginForm(props) {
    const context = React.useContext(AuthContext);

    const initialState = {
        email: '',
        password: '',
        isValidEmail: true,
        isValidPassword: true,
    };
    const [formValues, setFormValues] = React.useState(initialState);
    const [validationMessage, setValidationMessage] = React.useState('');

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

        if (formValues.email.length === 0 || formValues.password.length === 0) {
            setValidationMessage('Please enter valid email and password.');
            setFormValues({
                ...formValues,
                isValidPassword: formValues.password.length !== 0,
                isValidEmail: formValues.email.length !== 0,
            });
            return;
        }

        if (formValues.password.length < 5) {
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

        setFormValues(initialState);
        props.onClose();
    };

    if (!props.isVisible) {
        return;
    }

    return (
        <Popup className={styleClasses['login-form']} onBackdropClick={props.onClose}>
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
                {(!formValues.isValidEmail || !formValues.isValidPassword) && <div className={styleClasses['validation-message']}>
                    {validationMessage}
                </div>}
                <Input
                    id={'login-email'}
                    type={'email'}
                    label={'Email'}
                    value={formValues.email}
                    onChange={inputChangeHandler}
                    isValid={formValues.isValidEmail}
                />
                <Input
                    id={'login-password'}
                    type={'password'}
                    label={'Password'}
                    value={formValues.password}
                    onChange={inputChangeHandler}
                    isValid={formValues.isValidPassword}
                />
                <Button type={'submit'}>Login</Button>
            </form>
        </Popup>
    );
}

export default LoginForm;