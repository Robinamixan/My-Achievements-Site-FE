import React from 'react';

import './App.css';

import HeaderPanel from './components/Header/HeaderPanel/HeaderPanel';
import NavigationPanel from './components/LeftPanel/NavigationPanel';
import PageContent from './components/PageContent/PageContent';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className={'app'}>
            <HeaderPanel/>
            <div className={'app__main'}>
                <NavigationPanel/>
                <PageContent/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
