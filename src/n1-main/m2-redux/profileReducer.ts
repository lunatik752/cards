import {Dispatch} from "redux";
import {setIsLoggedIn, setUserData} from "./signInReducer";
import {profileApi} from "../m3-dal/profile-api";

const SET_STATUS = 'cards/profile/SET-STATUS'
const SET_ERROR = 'cards/signIn/SET-ERROR'
const SET_IS_INITIALIZED = 'cards/signIn/SET-USER-DATA'

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type RequestErrorType = null | string

export type InitialAppReducerStateType = {
    status: RequestStatusType
    error: RequestErrorType
    isInitialized: boolean
}

const initialState: InitialAppReducerStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}
export const profileReducer = (state: InitialAppReducerStateType = initialState, action: ActionsType): InitialAppReducerStateType => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_ERROR: {
            return {...state, error: action.error}
        }
        case SET_IS_INITIALIZED:
            return {...state, isInitialized: action.isInitialized}
        default:
            return state

    }
}

// action types
export type SetAppErrorActionType = ReturnType<typeof setAppError>
export type SetAppStatusActionType = ReturnType<typeof setAppStatus>
export type InitializedAppActionType = ReturnType<typeof setInitializeApp>


type ActionsType = SetAppStatusActionType | SetAppErrorActionType | InitializedAppActionType


// action creators
export const setAppStatus = (status: RequestStatusType) => {
    return {type: SET_STATUS, status} as const
}

export const setAppError = (error: RequestErrorType) => {
    return {type: SET_ERROR, error} as const
}

export const setInitializeApp = (isInitialized: boolean) => {
    return {type: SET_IS_INITIALIZED, isInitialized} as const
}

// Thunk


export const initializeApp = () => (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'));
    profileApi.me()
        .then(res => {
            if (res.data) {
                dispatch(setUserData(res.data));
                dispatch(setIsLoggedIn(true));
                dispatch(setAppStatus('succeeded'));
            } else {
                dispatch(setIsLoggedIn(false));
                dispatch(setAppStatus('succeeded'));
            }
            dispatch(setInitializeApp(true))
            dispatch(setAppStatus('succeeded'));
        })
        .catch((error) => {
            dispatch(setAppError(error));
        })

};


