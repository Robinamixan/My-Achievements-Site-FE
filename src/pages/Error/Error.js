import React from 'react';
import Header from '../../components/Layout/Header/Header';
import LeftPanel from '../../components/Layout/LeftPanel/LeftPanel';
import styles from '../BaseLayout/BaseLayout.module.css';
import Footer from '../../components/Layout/Footer/Footer';

function Error() {
    return (
        <>
            <Header/>
            <div className={'app__main'}>
                <LeftPanel/>
                <main className={styles.content}>
                    <h2>Some error occurred</h2>
                    <p>Page not found error</p>
                </main>
            </div>
            <Footer/>
        </>
    );
}

export default Error;