import {instance} from "./instance";
import {PackType} from "../m2-redux/packsReducer";

export type GetPacksDataType = {
    cardPacks: Array<PackType>;

    error: string;
}


export const packsApi = {
    getPacks: async (userId?: string) => {
        const response = await instance.get<GetPacksDataType>(
            `/cards/pack?`
            + `pageCount=1000`
            + (userId ?  `&user_id=${userId}` : ''))
        return response.data
    },
    addPack: async (name: string) => {
        const response = await instance.post("/cards/pack", {
            cardsPack: {
                name: name
            }
        })
        return response.data
    }
}

