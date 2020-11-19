import {instance} from "./instance";
import {ResponseDataType} from "./auth-api";


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
}

export const profileApi = {
    me() {
        return instance.post<ResponseDataType>(`auth/me`, {})
    },
}

