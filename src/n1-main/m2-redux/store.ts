import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {registerReducer} from "./registerReducer";

let rootReducers = combineReducers({
    signUp: registerReducer
});


type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
export default store