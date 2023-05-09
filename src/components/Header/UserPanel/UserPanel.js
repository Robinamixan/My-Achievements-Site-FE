import React from 'react';

import * as userManager from '../../../services/user-manager';

import './UserPanel.css';
import SignupForm from '../SignupForm/SignupForm';
import LoginForm from '../LoginForm/LoginForm';
import Button from '../../UI/Button/Button';

function UserPanel() {
    const [isSignupFormVisible, setSignupFormVisibility] = React.useState(false);
    const [isLoginFormVisible, setLoginFormVisibility] = React.useState(false);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    React.useEffect(() => {
        const userToken = userManager.getUserToken();
        if (userToken) {
            setIsAuthenticated(true);
        }
    }, [isLoginFormVisible, isSignupFormVisible]);

    const userLogoutHandler = () => {
        userManager.removeUserToken();
        setIsAuthenticated(false);
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

    if (isAuthenticated) {
        return (
            <div className={'user-panel'}>
                <div className={'user-panel__item'}>
                    <Button className={'panel-button'} onClick={userLogoutHandler}>Logout</Button>
                </div>
            </div>
        );
    }

    return (
        <div className={'user-panel'}>
            <div className={'user-panel__item'}>
                <Button className={'panel-button'} onClick={showLoginFormHandler}>Login</Button>
            </div>
            <div className={'user-panel__item'}>
                <Button className={'panel-button'} onClick={showSignupFormHandler}>Sign-up</Button>
            </div>
            <SignupForm isVisible={isSignupFormVisible} onClose={hideSignupFormHandler}/>
            <LoginForm isVisible={isLoginFormVisible} onClose={hideLoginFormHandler}/>
        </div>
    );
}

export default UserPanel;