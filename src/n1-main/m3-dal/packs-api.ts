import {instance} from "./instance";
import { PackType } from "../m2-redux/packsReducer";

export type GetPacksDataType = {
    cardPacks: Array<PackType>;

    error: string;
}


export const packsApi = {
    getPacks: async () => {
        const response = await instance.get<GetPacksDataType>(
            `/cards/pack?`
            +`pageCount=1000`)
        return response.data
    },
}

