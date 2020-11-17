import axios from 'axios'

export type ResponseDataType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error: string
}

export type ResponseDataAddedUserType = {
    created: Date
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: Date
    verified: boolean
    __v: number
    _id: string
}

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    // baseURL: 'https://github.com/IgnatZakalinsky/cards-nya-back-2-0',
    withCredentials: true
})

export const authApi = {
    me() {
        return instance.post<ResponseDataType>(`auth/me`, {})
    },
    register(email: string, password: string) {
        return instance.post<ResponseDataAddedUserType>(`auth/register`, {email, password})
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseDataType>('/auth/login', {email, password, rememberMe})
    },
}
