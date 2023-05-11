import React from 'react';
import PropTypes from 'prop-types';

import * as authenticationClient from '../../../clients/user-client/authentication';

import Popup from '../../UI/Popup/Popup';
import Button from '../../UI/Button/Button';
import styleClasses from './LoginForm.module.css';
import AuthContext from '../../../store/auth-context';

LoginForm.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func
};

function LoginForm(props) {
    const context = React.useContext(AuthContext);

    const initialState = {
        email: '',
        password: '',
    };
    const [formValues, setFormValues] = React.useState(initialState);

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
        });
    };

    const loginHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await authenticationClient.login({
                email: formValues.email,
                password: formValues.password
            });

            context.onLogin(response.userId, response.token);
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
        <Popup className={styleClasses['login-form']} onBackdropClick={props.onClose}>
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
                <div className={styleClasses['form-input']}>
                    <label>Email</label>
                    <input
                        id={'login-email'}
                        type={'email'}
                        value={formValues.email}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className={styleClasses['form-input']}>
                    <label>Password</label>
                    <input
                        id={'login-password'}
                        type={'password'}
                        value={formValues.password}
                        onChange={inputChangeHandler}
                    />
                </div>
                <Button type={'submit'}>Login</Button>
            </form>
        </Popup>
    );
}

export default LoginForm;