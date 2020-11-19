import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {registerReducer} from "./registerReducer";
import {signInReducer} from "./signInReducer";
import {recoverPassReducer} from "./recoverPassReducer";
import {changePassReducer} from "./changePassReducer";
import {profileReducer} from "./profileReducer";

const rootReducers = combineReducers({
    signUp: registerReducer,
    signIn: signInReducer,
    recoverPass: recoverPassReducer,
    changePass: changePassReducer,
    profile: profileReducer
});


export type AppRootStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));


// @ts-ignore
window.store = store;


