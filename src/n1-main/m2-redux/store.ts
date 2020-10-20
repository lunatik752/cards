import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {loginReducer} from "./loginReducer";
import {registerReducer} from "./registerReducer";

let rootReducers = combineReducers({
    login: loginReducer,
    signUp: registerReducer
});

export type AppRootStateType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));


// @ts-ignore
window.store = store;
