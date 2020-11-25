import {authApi} from "../m3-dal/auth-api"
import {Dispatch} from "redux"
import {UserDataType} from "../m3-dal/profile-api";

const SET_IS_LOGGED_IN = 'cards/signIn/SET-IS-LOGGED-IN'
const SET_ERROR = 'cards/signIn/SET-ERROR'

export type RequestErrorType = null | string


type InitialStateType = {
    isLoggedIn: boolean,
    error: RequestErrorType,

}

const initialState: InitialStateType = {
    isLoggedIn: false,
    error: null,
}

export const signInReducer = (state: InitialStateType = initialState, action: SignInActionsType): InitialStateType => {
    switch (action.type) {
        case SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.value};
        case SET_ERROR:
            return {...state, error: action.error};

        default :
            return state;
    }
}

// action types
export type SignInActionsType = ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setError>

// action creators
export const setIsLoggedIn = (value: boolean) => ({type: SET_IS_LOGGED_IN, value} as const);
export const setError = (error: RequestErrorType) => ({type: SET_ERROR, error} as const);


// Thunk
export const logIn = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<SignInActionsType>) => {
    authApi.login(email, password, rememberMe)
        .then(res => {
            if (res.data) {
                dispatch(setIsLoggedIn(true));
            } else {
                dispatch(setError('error'))
            }
        })
        .catch((error) => {
            dispatch(setError(error.response ? error.response.data.error : 'Some error occurred'));
        })
}

export const logout = () => (dispatch: Dispatch) => {
    authApi.logout()
        .then(res => {
            if (res.data) {
                dispatch(setIsLoggedIn(false));
            } else {
                dispatch(setError('error'));
            }
        })
};
