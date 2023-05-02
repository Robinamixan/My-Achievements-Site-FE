import React from 'react';

import SiteLogo from '../SiteLogo/SiteLogo';
import UserPanel from '../UserPanel/UserPanel';

import './HeaderPanel.css';

function HeaderPanel() {
    return (
        <div className={'header-panel'}>
            <SiteLogo/>
            <UserPanel/>
        </div>
    );
}

export default HeaderPanel;