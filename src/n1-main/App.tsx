import React from 'react';
import styles from './App.module.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './m2-redux/store';
import Header from "./m1-components/Header/Header";
import Routes  from "./m1-components/Routes/Routes";


const App = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <div className={styles.app}>
                    <Header/>
                    <Routes/>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
