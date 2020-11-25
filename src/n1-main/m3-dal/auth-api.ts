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

}


export const authApi = {
    register(email: string, password: string) {
        return instance.post<ResponseDataAddedUserType>(`auth/register`, {email, password})
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseDataType>('/auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete<LogoutResponseDataType>('auth/me')
    }
}
