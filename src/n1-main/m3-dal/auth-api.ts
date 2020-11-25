import {instance} from './instance'
import {ResponseDataType} from "./profile-api";


export type ResponseDataAddedUserType = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: string
    verified: boolean
    __v: number
    _id: string
}

export type LogoutResponseDataType = {
    info: string
    error: string
}


export const authApi = {
    register:  async (email: string, password: string) => {
      const response = await instance.post<ResponseDataAddedUserType>(`auth/register`, {email, password})
        return response.data
    },
    login: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post<ResponseDataType>('auth/login', {email, password, rememberMe})
        return response.data
    },
    logout: async () => {
        const response = await instance.delete<LogoutResponseDataType>('auth/me')
        return response.data
    }
}
