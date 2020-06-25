import React from 'react';
import styles from './App.module.css';
import {HashRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './m2-redux/store';
import Header from "./m1-components/Header/Header";
import HomePage from "./m1-components/HomePage/HomePage";
import AnotherPage from "./m1-components/anotherPage/AnotherPage";


const App = () => {

    return (
        <HashRouter>
            <Provider store={store}>
                <div className={styles.app}>
                    <Header/>
                    <Route path={'/homePage'} render={() => <HomePage/>}/>
                    <Route path='/anotherPage' render={() => <AnotherPage/>}/>
                </div>
            </Provider>
        </HashRouter>
    );
}

export default App;
