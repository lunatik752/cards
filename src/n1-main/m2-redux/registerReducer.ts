import {Dispatch} from 'redux';
import {authApi} from '../m3-dal/auth-api';

type InitialStateType = {
    isSendData: boolean,
    isAddedUser: boolean | null,
    errorMessage: string | null
}

const initialState: InitialStateType = {
    isSendData: false,
    isAddedUser: null,
    errorMessage: null
}

export const registerReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SEND_DATA':
            return {...state, isSendData: action.payload};
        case 'ADDED_USER':
            return {...state, isAddedUser: action.payload};
        case 'SET_ERROR_MESSAGE':
            return {...state, errorMessage: action.payload}

        default :
            return state;
    }
}

// action types
const SEND_DATA = 'SEND_DATA'
const ADDED_USER = 'ADDED_USER'
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'

type ActionType =
    | ReturnType<typeof submitResidterData>
    | ReturnType<typeof addedUser>
    | ReturnType<typeof setErrorMessage>


// action creators

const submitResidterData = (payload: boolean) => ({type: SEND_DATA, payload} as const)

export const addedUser = (payload: boolean) => ({type: ADDED_USER, payload}as const)

export const setErrorMessage = (payload: string) => ({type: SET_ERROR_MESSAGE, payload}as const)

// Thunk

export const registerUser = (email: string, password: string, isSendData: boolean) => (dispatch: Dispatch) => {
    debugger
    dispatch(submitResidterData(isSendData))
    authApi.register(email, password)
        .then(res => {
            debugger
            if (res.statusText === 'Created'){
                dispatch(submitResidterData(false))
                dispatch(addedUser(true))
            }
        })
        .catch(error => {
            debugger
        dispatch(submitResidterData(false))
        dispatch(addedUser(false))
        dispatch(setErrorMessage('Register failed. Try again...'))
    })

    // dispatch(submitResidterData(false))
}

