import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "../auth/Login/Login";
import SignUp from "../auth/SignUp/SignUp";
import Profile from "../Profile/Profile";
import RecoverPass from '../auth/RecoverPass/RecoverPass';
import ChangePass from "../auth/ChangePass/ChangePass";
import {Page404} from "../Page404/Page404";
import { Packs } from '../cards/Packs';
import { Cards } from '../cards/Cards';


// all project paths
export const SIGN_IN_PATH = '/login';
export const SIGN_UP_PATH = '/signUp';
export const RECOVER_PASS_PATH = '/recoverPassword';
export const PROFILE_PATH = '/profile';
export const CHANGE_PASS_PATH = '/changePassword';
export const PACKS_PATH = '/packs';
export const CARDS_PATH = '/cards/:id'


const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <Redirect to={PROFILE_PATH}/>}/>

            <Route path={SIGN_IN_PATH} render={() => <Login/>}/>
            <Route path={SIGN_UP_PATH} render={() => <SignUp/>}/>
            <Route path={RECOVER_PASS_PATH} render={() => <RecoverPass/>}/>
            <Route path={PROFILE_PATH} render={() => <Profile/>}/>
            <Route path={CHANGE_PASS_PATH} render={() => <ChangePass/>}/>
            <Route path={PACKS_PATH} render={() => <Packs/>}/>
            <Route path={CARDS_PATH} render={() => <Cards/>}/>

            <Route path={'*'} render={() => <Page404/>}/>
        </Switch>
    );
};

export default Routes;
