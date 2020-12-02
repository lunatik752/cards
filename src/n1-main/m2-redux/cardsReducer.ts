import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";
import {cardsApi} from "../m3-dal/cards-api";


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
}

const packsInitialState: PacksStateType = {
    cards: []
};

export const cardsReducer = (state = packsInitialState, action: CardsActionsType): PacksStateType => {
    switch (action.type) {
        case 'cards/cards/SET-CARDS':
            return {
                ...state,
                cards: action.cards,
            }
        default:
            return state

    }
}

// action types

type CardsActionsType = ReturnType<typeof setCards>


export const setCards = (cards: Array<CardType>) => {
    return {type: 'cards/cards/SET-CARDS', cards} as const
}


//thunk
export const getCards = (packId: string) => async (dispatch: Dispatch<CardsActionsType>) => {
    const response = await cardsApi.getCards(packId)
    dispatch(setCards(response.cards))
    try {
    } catch (err) {
        console.log(err)
    }
}

export const addCard = (packId: string, question: string, answer: string): ThunkAction<void, AppRootStateType, {}, CardsActionsType> => async (dispatch) => {
    await cardsApi.addCard(packId, question, answer)
    try {
        await dispatch(getCards(packId))
    } catch (err) {
        console.log(err)
    }
}

export const deleteCard = (cardId: string, packId: string): ThunkAction<void, AppRootStateType, {}, CardsActionsType> => async (dispatch) => {
    await cardsApi.deleteCard(cardId)
    try {
        await dispatch(getCards(packId))
    } catch (err) {
        console.log(err)
    }
}
export const updateCard = (cardId: string, newQuestion: string, packId: string): ThunkAction<void, AppRootStateType, {}, CardsActionsType> =>
    async (dispatch) => {
        await cardsApi.updateCard(cardId, newQuestion)
        try {
            await dispatch(getCards(packId))
        } catch (err) {
            console.log(err)
        }
    }

