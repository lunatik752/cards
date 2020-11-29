import {Dispatch} from "redux";
import {packsApi} from "../m3-dal/packs-api";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";

const SET_PACKS = 'cards/packs/SET-PACKS'
const SET_USER_ID = 'cards/packs/SET-USER-ID'
const SET_CARD_PACKS_TOTAL_COUNT = 'cards/packs/SET-CARD-PACKS-TOTAL-COUNT'
const SET_CURRENT_PAGE = 'cards/packs/SET-CURRENT-PAGE'

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
    cardPacksTotalCount: number
    currentPage: number
    userId: string
}

const packsInitialState: PacksStateType = {
    packs: [],
    cardPacksTotalCount: 1,
    currentPage: 1,
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
        case SET_CARD_PACKS_TOTAL_COUNT: {
            return {
                ...state,
                cardPacksTotalCount: action.cardPacksTotalCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }

        }
        default:
            return state

    }
}

// action types

type PacksActionsType = ReturnType<typeof setPacks>
    | ReturnType<typeof setUserId>
    | ReturnType<typeof setCardPacksTotalCount>
    | ReturnType<typeof setCurrentPage>

export const setPacks = (packs: Array<PackType>) => {
    return {type: SET_PACKS, packs} as const
}
export const setUserId = (userId: string) => {
    return {type: SET_USER_ID, userId} as const
}
export const setCardPacksTotalCount = (cardPacksTotalCount: number) => {
    return {type: SET_CARD_PACKS_TOTAL_COUNT, cardPacksTotalCount} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}

//thunk
export const getPacks = () => async (dispatch: Dispatch<PacksActionsType>, getStore: () => AppRootStateType) => {
    const {userId, currentPage} = getStore().packs
    const response = await packsApi.getPacks(userId, currentPage)
    try {
        dispatch(setPacks(response.cardPacks))
        dispatch(setCardPacksTotalCount(response.cardPacksTotalCount))
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

export const deletePack = (packId: string): ThunkAction<void, AppRootStateType, {}, PacksActionsType> =>
    async (dispatch) => {
        await packsApi.deletePack(packId)
        try {
            await dispatch(getPacks())
        } catch (err) {
            console.log(err)
        }
    }
export const updatePack = (packId: string, newTitle: string): ThunkAction<void, AppRootStateType, {}, PacksActionsType> =>
    async (dispatch) => {
        await packsApi.updatePack(packId, newTitle)
        try {
            await dispatch(getPacks())
        } catch (err) {
            console.log(err)
        }
    }

