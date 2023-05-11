import React from 'react';
import {Outlet} from 'react-router-dom';

import Header from '../../components/Layout/Header/Header';
import LeftPanel from '../../components/Layout/LeftPanel/LeftPanel';
import Footer from '../../components/Layout/Footer/Footer';
import styles from './BaseLayout.module.css';

function BaseLayout() {
    return (
        <>
            <Header/>
            <div className={'app__main'}>
                <LeftPanel/>
                <main className={styles.content}>
                    <Outlet/>
                </main>
            </div>
            <Footer/>
        </>
    );
}

export default BaseLayout;