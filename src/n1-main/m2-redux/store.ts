import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {loginReducer} from "./loginReducer";
import {registerReducer} from "./siginUpReducer";

let rootReducers = combineReducers({
    login: loginReducer,
    signUp: registerReducer
});


type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
export default store