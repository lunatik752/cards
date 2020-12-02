import {instance} from "./instance";
import { CardType } from "../m2-redux/cardsReducer";

export type GetCardsDataType = {
    cards: Array<CardType>
    cardsTotalCount: number
    error: string;
}

export const cardsApi = {
    getCards: async (cardsPack_id: string) => {
        const response = await instance.get<GetCardsDataType>(
            `/cards/card?`
            + `cardsPack_id=${cardsPack_id}`
            + `&pageCount=30`
        )
        return response.data

    },
    addCard: async (packId: string, question: string, answer: string) => {
        const response = await instance.post(`/cards/card`, {
            card: {
                cardsPack_id: packId,
                question,
                answer
            }
        })
        return response.data
    },
    deleteCard: async (cardId: string) => {
        const response = await instance.delete(`/cards/card?id=${cardId}`)
        return response.data
    },
    updateCurd: async (cardId: string, newQuestion: string) => {
        const response = await instance.put(`/cards/pack`, {
            cardsPack: {
                _id: cardId,
                question: newQuestion
            }
        })
        return response.data
    }
}

