import React from 'react';

import './UserPanel.css';

function UserPanel() {
    return (
        <div className={'user-panel'}>
            <div className={'user-panel__item'}><button>Admin Panel</button></div>
            <div className={'user-panel__item'}><button>Login</button></div>
            <div className={'user-panel__item'}><button>Sign-up</button></div>
        </div>
    );
}

export default UserPanel;