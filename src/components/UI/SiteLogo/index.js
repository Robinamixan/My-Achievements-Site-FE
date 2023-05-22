import React from 'react';

import logo from '../../../logo.svg';
import styles from './SiteLogo.module.css';

function SiteLogo() {
    return (
        <div className={styles['site-logo']}>
            <div className={styles.wrapper}><img src={logo} alt="logo" /></div>
            <div className={styles.title}>My Achievements</div>
        </div>
    );
}

export default SiteLogo;