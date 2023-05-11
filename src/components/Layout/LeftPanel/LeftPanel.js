import React from 'react';

import styles from './LeftPanel.module.css';
import NavigationList from '../../Navigation/NavigationList/NavigationList';

function LeftPanel() {
    return (
        <div className={styles['left-panel']}>
            <NavigationList/>
        </div>
    );
}

export default LeftPanel;