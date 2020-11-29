import {Dispatch} from "redux";
import {packsApi} from "../m3-dal/packs-api";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";

const SET_PACKS = 'cards/packs/SET-PACKS'
const SET_USER_ID= 'cards/packs/SET-USER-ID'

export type PackType = {
    _id: string;
    user_id: string;
    user_name: string;
    private: boolean;

    name: string;
    path: string;
    grade: number;
    shots: number;

    cardsCount: number;
    deckCover: string;

    type: string;
    rating: number;
    more_id: string;

    created: string;
    updated: string;
}

export type PacksStateType = {
    packs: Array<PackType>
    userId: string
}

const packsInitialState: PacksStateType = {
    packs: [],
    userId: ''
};

export const packsReducer = (state = packsInitialState, action: PacksActionsType): PacksStateType => {
    switch (action.type) {
        case SET_PACKS:
            return {
                ...state,
                packs: action.packs,
            }
        case SET_USER_ID:
            return {
            ...state,
                userId: action.userId
        }
        default:
            return state

    }
}

// action types

type PacksActionsType = ReturnType<typeof setPacks>
    |  ReturnType<typeof setUserId>

export const setPacks = (packs: Array<PackType>) => {
    return {type: SET_PACKS, packs} as const
}
export const setUserId = (userId: string) => {
    return {type: SET_USER_ID, userId} as const
}


//thunk
export const getPacks = () => async (dispatch: Dispatch<PacksActionsType>, getStore: () => AppRootStateType) => {
    const {userId} = getStore().packs
    const response = await packsApi.getPacks(userId)
    try {
        dispatch(setPacks(response.cardPacks))
    } catch (err) {
        console.log(err)
    }
}
export const addPack = (name: string): ThunkAction<void, AppRootStateType, {}, PacksActionsType> => async (dispatch) => {
     await packsApi.addPack(name)
    try {
        await dispatch(getPacks())
    } catch (err) {
        console.log(err)
    }
}

export const deletePack = (packId: string):ThunkAction<void, AppRootStateType, {}, PacksActionsType> =>
    async (dispatch) => {
        await packsApi.deletePack(packId)
        try {
            await dispatch(getPacks())
        } catch (err) {
            console.log(err)
        }
    }

