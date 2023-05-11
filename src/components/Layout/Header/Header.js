import React from 'react';

import SiteLogo from '../../UI/SiteLogo/SiteLogo';
import UserPanel from '../../User/UserPanel/UserPanel';

import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles['header-panel']}>
            <SiteLogo/>
            <UserPanel/>
        </div>
    );
}

export default Header;