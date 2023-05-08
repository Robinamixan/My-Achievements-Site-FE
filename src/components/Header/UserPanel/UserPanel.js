import React from 'react';

import './UserPanel.css';
import SignupForm from '../SignupForm/SignupForm';

function UserPanel() {
    const [isSignupFormVisible, setSignupFormVisibility] = React.useState(false);

    const showSignupFormHandler = () => {
        setSignupFormVisibility(true);
    };

    const hideSignupFormHandler = () => {
        setSignupFormVisibility(false);
    };

    return (
        <div className={'user-panel'}>
            <div className={'user-panel__item'}>
                <button>Login</button>
            </div>
            <div className={'user-panel__item'} onClick={showSignupFormHandler}>
                <button>Sign-up</button>
            </div>
            <SignupForm isVisible={isSignupFormVisible} onClose={hideSignupFormHandler}/>
        </div>
    );
}

export default UserPanel;