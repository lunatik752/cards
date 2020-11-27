import {instance} from "./instance";


export const packsApi = {
    getPacks: async () => {
        const response = await instance.post(`/cards/pack`)
        return response.data
    },
}

