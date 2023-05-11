import React from 'react';

import styles from './UserPanel.module.css';
import SignupForm from '../SignupForm/SignupForm';
import LoginForm from '../LoginForm/LoginForm';
import Button from '../../UI/Button/Button';
import AuthContext from '../../../store/auth-context';

function UserPanel() {
    const context = React.useContext(AuthContext);

    const [isSignupFormVisible, setSignupFormVisibility] = React.useState(false);
    const [isLoginFormVisible, setLoginFormVisibility] = React.useState(false);

    const userLogoutHandler = () => {
        context.onLogout();
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
            <SignupForm isVisible={isSignupFormVisible} onClose={hideSignupFormHandler}/>
            <LoginForm isVisible={isLoginFormVisible} onClose={hideLoginFormHandler}/>
        </div>
    );
}

export default UserPanel;