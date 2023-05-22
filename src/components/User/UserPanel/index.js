import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './UserPanel.module.css';
import SignupForm from '../SignupForm';
import LoginForm from '../LoginForm';
import Button from '../../UI/Button';
import AuthContext from '../../../store/auth-context';

function UserPanel() {
    const navigate = useNavigate();
    const context = React.useContext(AuthContext);

    const [isSignupFormVisible, setSignupFormVisibility] = React.useState(false);
    const [isLoginFormVisible, setLoginFormVisibility] = React.useState(false);

    const userLogoutHandler = () => {
        context.onLogout();
        navigate('/');
    };

    const showSignupFormHandler = () => {
        setSignupFormVisibility(true);
    };

    const showLoginFormHandler = () => {
        setLoginFormVisibility(true);
    };

    const hideSignupFormHandler = () => {
        setSignupFormVisibility(false);
    };

    const hideLoginFormHandler = () => {
        setLoginFormVisibility(false);
        navigate('/profile');
    };

    if (context.isAuthorized) {
        return (
            <div className={styles['user-panel']}>
                <div className={styles.item}>
                    <Button className={styles.button} onClick={userLogoutHandler}>Logout</Button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles['user-panel']}>
            <div className={styles.item}>
                <Button className={styles.button} onClick={showLoginFormHandler}>Login</Button>
            </div>
            <div className={styles.item}>
                <Button className={styles.button} onClick={showSignupFormHandler}>Sign-up</Button>
            </div>
            <SignupForm isVisible={isSignupFormVisible} onClose={hideSignupFormHandler} />
            <LoginForm isVisible={isLoginFormVisible} onClose={hideLoginFormHandler} />
        </div>
    );
}

export default UserPanel;