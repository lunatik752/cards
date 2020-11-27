import {Dispatch} from "redux";
import {packsApi} from "../m3-dal/packs-api";

const SET_PACKS = 'cards/packs/SET-PACKS'

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


export const getPacks = () => async (dispatch: Dispatch) => {
    const response = await packsApi.getPacks()
    try {
        dispatch(setPacks(response.cardPacks))
    } catch (err) {
        console.log(err)
    }
}
