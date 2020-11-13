import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Profile from "../Profile/Profile";
import RecoverPass from '../RecoverPass/RecoverPass';


// all project paths
export const SIGN_IN_PATH = '/login';
export const SIGN_UP_PATH = '/signUp';
export const RECOVER_PATH = '/recoverPass';
export const PROFILE_PATH = '/profile';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <Redirect to={SIGN_IN_PATH}/>}/>

            <Route path={SIGN_IN_PATH} render={() => <Login/>}/>
            <Route path={SIGN_UP_PATH} render={() => <SignUp/>}/>
            <Route path={RECOVER_PATH} render={() => <RecoverPass/>}/>
            <Route path={PROFILE_PATH} render={() => <Profile/>}/>
        </Switch>
    );
};

export default Routes;
