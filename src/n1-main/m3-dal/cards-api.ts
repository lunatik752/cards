import {instance} from "./instance";
import {CardType} from "../m2-redux/cardsReducer";

export type GetCardsDataType = {
    cardPacks: Array<CardType>
    cardsTotalCount: number
    error: string;
}

export const cardsApi = {
    getCards: async (cardsPack_id: string, currentPage: number, pageSize: number) => {
        const response = await instance.get<GetCardsDataType>(
            `/cards/card?`
            + `&cardsPack_id=${cardsPack_id}`
            + `page=${currentPage}`
            + `&pageCount=${pageSize}`
           )
        return response.data

    },
    addCard: async (name: string) => {
        const response = await instance.post(`/cards/card`, {
            cardsPack: {
                name: name
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

