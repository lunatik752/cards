import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";


export type CardType = {
    _id: string;
    cardsPack_id: string;
    user_id: string;

    answer: string;
    question: string;
    grade: number;
    shots: number;

    questionImg: string;
    answerImg: string;
    answerVideo: string;
    questionVideo: string;

    comments: string;

    type: string;
    rating: number;
    more_id: string;

    created: string;
    updated: string;
}

export type PacksStateType = {
    cards: Array<CardType>
    cardsTotalCount: number
    currentPage: number
    pageSize?: number
}

const packsInitialState: PacksStateType = {
    cards: [],
    cardsTotalCount: 1,
    currentPage: 1,
    pageSize: 10,
};

export const cardsReducer = (state = packsInitialState, action: CardsActionsType): PacksStateType => {
    switch (action.type) {
        case 'cards/cards/SET-CARDS':
            return {
                ...state,
                cards: action.cards,
            }

        case 'cards/cards/SET-CARDS-TOTAL-COUNT': {
            return {
                ...state,
                cardsTotalCount: action.cardsTotalCount
            }
        }
        case 'cards/cards/SET-CURRENT-PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'cards/cards/SET-PAGE-COUNT': {
            return {
                ...state,
                pageSize: action.pageCount
            }
        }
        default:
            return state

    }
}

// action types

type CardsActionsType = ReturnType<typeof setPacks>
    | ReturnType<typeof setCardPacksTotalCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setPageSize>

export const setPacks = (cards: Array<CardType>) => {
    return {type: 'cards/cards/SET-CARDS', cards} as const
}

export const setCardPacksTotalCount = (cardsTotalCount: number) => {
    return {type: 'cards/cards/SET-CARDS-TOTAL-COUNT', cardsTotalCount} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: 'cards/cards/SET-CURRENT-PAGE', currentPage} as const
}
export const setPageSize = (pageCount?: number) => {
    return {type: 'cards/cards/SET-PAGE-COUNT', pageCount} as const
}

//thunk
export const getCards = () => async (dispatch: Dispatch<CardsActionsType>, getStore: () => AppRootStateType) => {
    try {

    } catch (err) {
        console.log(err)
    }
}
export const addPack = (name: string): ThunkAction<void, AppRootStateType, {}, CardsActionsType> => async (dispatch) => {
    try {
    } catch (err) {
        console.log(err)
    }
}

export const deletePack = (packId: string): ThunkAction<void, AppRootStateType, {}, CardsActionsType> =>
    async (dispatch) => {
        try {
        } catch (err) {
            console.log(err)
        }
    }
export const updatePack = (packId: string, newTitle: string): ThunkAction<void, AppRootStateType, {}, CardsActionsType> =>
    async (dispatch) => {
        try {
        } catch (err) {
            console.log(err)
        }
    }

