import React from 'react';

import SiteLogo from '../../UI/SiteLogo';
import UserPanel from '../../User/UserPanel';

import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles['header-panel']}>
            <SiteLogo />
            <UserPanel />
        </div>
    );
}

export default Header;