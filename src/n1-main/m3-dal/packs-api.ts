import {instance} from "./instance";
import {PackType} from "../m2-redux/packsReducer";

export type GetPacksDataType = {
    cardPacks: Array<PackType>
    cardPacksTotalCount: number
    error: string;
}

export const packsApi = {
    getPacks: async (userId: string, currentPage: number, pageSize?: number) => {
        const response = await instance.get<GetPacksDataType>(
            `/cards/pack?`
            + `page=${currentPage}`
            + `&pageCount=${pageSize}`
            + (userId ? `&user_id=${userId}` : ''))
        return response.data

    },
    addPack: async (name: string) => {
        const response = await instance.post(`/cards/pack`, {
            cardsPack: {
                name: name
            }
        })
        return response.data
    },
    deletePack: async (packId: string) => {
        const response = await instance.delete(`/cards/pack?id=${packId}`)
        return response.data
    },
    updatePack: async (packId: string, newTitle: string) => {
        const response = await instance.put(`/cards/pack`, {
            cardsPack: {
                _id: packId,
                name: newTitle
            }
        })
        return response.data
    }
}

