import { ResponseDataType } from "../m3-dal/auth-api"

const SET_IS_LOGGED_IN = 'cards/signIn/SET-IS-LOGGED-IN'
const SET_ERROR = 'cards/signIn/SET-ERROR'
const SET_USER_DATA = 'cards/signIn/SET-USER-DATA'

export type RequestErrorType = null | string


type InitialStateType = {
    isLoggedIn: boolean,
    error: RequestErrorType,
    userData: ResponseDataType | {}
}

const initialState: InitialStateType = {
    isLoggedIn: false,
    error: null,
    userData: {}
}

export const signInReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.value};
        case SET_ERROR:
            return {...state, error: action.error};
        case SET_USER_DATA:
            return  {...state, userData: action.userData}
        default :
            return state;
    }
}

// action types
type ActionsType = ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setError>
    | ReturnType<typeof setUserData>

// action creators
export const setIsLoggedIn = (value: boolean) => ({type: SET_IS_LOGGED_IN, value} as const);
export const setError = (error: RequestErrorType) => ({type: SET_ERROR, error} as const);
export const setUserData = (userData: ResponseDataType) => ({type: SET_USER_DATA, userData} as const);


// Thunk

