import React from 'react';

import logo from '../../../logo.svg';
import './SiteLogo.css';

function SiteLogo() {
    return (
        <div className={'site-logo'}>
            <div className={'site-logo__image'}><img src={logo} className="app-logo" alt="logo" /></div>
            <div className={'site-logo__text'}>My Achievements</div>
        </div>
    );
}

export default SiteLogo;