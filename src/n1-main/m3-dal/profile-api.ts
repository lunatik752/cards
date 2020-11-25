import {instance} from "./instance";

export type ResponseDataType = UserDataType & { error: string }

export type UserDataType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: string
    updated: string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error: string
}

export const profileApi = {
    me: async () => {
        const response = await instance.post<ResponseDataType>(`auth/me`)
        return response.data
    },
}

