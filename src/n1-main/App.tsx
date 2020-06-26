import React from 'react';
import styles from './App.module.css';
import {HashRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './m2-redux/store';
import Header from "./m1-components/Header/Header";
import Profile from "./m1-components/Profile/Profile";
import AnotherPage from "./m1-components/anotherPage/AnotherPage";
import Login from "./m1-components/Login/Login";


const App = () => {

    return (
        <HashRouter>
            <Provider store={store}>
                <div className={styles.app}>
                    <Header/>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path='/anotherPage' render={() => <AnotherPage/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </Provider>
        </HashRouter>
    );
}

export default App;
