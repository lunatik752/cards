import {Dispatch} from "redux";
import {profileApi, UserDataType} from "../m3-dal/profile-api";
import {setIsLoggedIn, SignInActionsType} from "./signInReducer";

const SET_ERROR = 'cards/profile/SET-ERROR'
const SET_IS_INITIALIZED = 'cards/profile/SET-IS-INITIALIZED'
const SET_USER_DATA = 'cards/profile/SET-USER-DATA'


export type RequestErrorType = null | string

export type InitialAppReducerStateType = {
    error: RequestErrorType
    isInitialized: boolean
    userData: UserDataType
}


const initialState = {
    error: null,
    isInitialized: false,
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
        error: ''
    }
}

export const profileReducer = (state: InitialAppReducerStateType = initialState, action: ProfileActionsType): InitialAppReducerStateType => {
    switch (action.type) {
        case SET_ERROR: {
            return {...state, error: action.error}
        }
        case SET_IS_INITIALIZED: {
            return {...state, isInitialized: action.isInitialized}
        }
        case SET_USER_DATA:
            return {...state, userData: action.userData}
        default:
            return state

    }
}

// action types

export type ProfileActionsType = ReturnType<typeof setAppError> | ReturnType<typeof setInitializeApp> | ReturnType<typeof setUserData>


export const setAppError = (error: RequestErrorType) => {
    return {type: SET_ERROR, error} as const
}

export const setInitializeApp = (isInitialized: boolean) => {
    return {type: SET_IS_INITIALIZED, isInitialized} as const
}

export const setUserData = (userData: UserDataType) => {
    return {type: SET_USER_DATA, userData} as const
}


// Thunk


export const initializeApp = () => async (dispatch: ThunkDispatch) => {
    try {
        const response = await profileApi.me()
        dispatch(setUserData(response))
        dispatch(setIsLoggedIn(true))
    } catch (err) {
        const error = err.response
            ? err.response.data.error
            : (err + 'Some kind of error has occurred');
        dispatch(setAppError(error))    }
dispatch(setInitializeApp(true))
}

type ThunkDispatch = Dispatch<ProfileActionsType | SignInActionsType>


