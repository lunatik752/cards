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
    packs: Array<PackType>;
}

const packsInitialState: PacksStateType = {
    packs: [],
};

export const packsReducer = (state = packsInitialState, action: PacksActionsType): PacksStateType => {
    switch (action.type) {
        case SET_PACKS:
            return {
                ...state,
                packs: action.packs,
            }
        default:
            return state

    }
}

// action types

type PacksActionsType = ReturnType<typeof setPacks>

export const setPacks = (packs: Array<PackType>) => {
    return {type: SET_PACKS, packs} as const
}


//thunk
export const getPacks = (userId?: string) => async (dispatch: Dispatch<PacksActionsType>) => {
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


