import React from 'react';

import * as authenticationClient from '../../../clients/user-client/authentication';

import './UserPanel.css';

function UserPanel() {
    const signupHandler = async () => {
        await authenticationClient.signUp({
            email: 'test_569@test.com',
            password: 'password',
            name: 'test'
        });
    };

    return (
        <div className={'user-panel'}>
            <div className={'user-panel__item'}><button>Admin Panel</button></div>
            <div className={'user-panel__item'}><button>Login</button></div>
            <div className={'user-panel__item'} onClick={signupHandler}><button>Sign-up</button></div>
        </div>
    );
}

export default UserPanel;