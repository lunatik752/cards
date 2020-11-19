import {authApi, ResponseDataType} from "../m3-dal/auth-api"
import {Dispatch} from "redux"
import {UserDataType} from "../m3-dal/profile-api";
import {setAppStatus, SetAppStatusActionType} from "./profileReducer";

const SET_IS_LOGGED_IN = 'cards/signIn/SET-IS-LOGGED-IN'
const SET_ERROR = 'cards/signIn/SET-ERROR'
const SET_USER_DATA = 'cards/signIn/SET-USER-DATA'

export type RequestErrorType = null | string


type InitialStateType = {
    isLoggedIn: boolean,
    error: RequestErrorType,
    userData: UserDataType
}

const initialState: InitialStateType = {
    isLoggedIn: false,
    error: null,
    userData: {
        _id: '',
        email: '',
        name: '',
        publicCardPacksCount: 1,
        created: 'null',
        updated: '',
        isAdmin: true,
        verified: true,
        rememberMe: true,
    }
}

export const signInReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.value};
        case SET_ERROR:
            return {...state, error: action.error};
        case SET_USER_DATA:
            return {...state, userData: action.userData}
        default :
            return state;
    }
}

// action types
type ActionsType = ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setError>
    | ReturnType<typeof setUserData>
    | SetAppStatusActionType

// action creators
export const setIsLoggedIn = (value: boolean) => ({type: SET_IS_LOGGED_IN, value} as const);
export const setError = (error: RequestErrorType) => ({type: SET_ERROR, error} as const);
export const setUserData = (userData: UserDataType) => ({type: SET_USER_DATA, userData} as const);


// Thunk
export const logIn = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<ActionsType>) => {
    authApi.login(email, password, rememberMe)
        .then(res => {
            dispatch(setAppStatus('loading'))
            if (res.data) {
                dispatch(setIsLoggedIn(true));
                dispatch(setUserData(res.data));
                dispatch(setAppStatus('succeeded'))
            } else {
                dispatch(setError('error'))
                dispatch(setAppStatus('succeeded'));
            }
        })
        .catch((error) => {
            dispatch(setError(error.response ? error.response.data.error : 'Some error occurred'));
        })
}

export const logout = () => (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'));
    authApi.logout()
        .then(res => {
            if (res.data) {
                dispatch(setIsLoggedIn(false));
                dispatch(setAppStatus('succeeded'));
            } else {
                dispatch(setError('error'));
                dispatch(setAppStatus('succeeded'));
            }
        })
};
