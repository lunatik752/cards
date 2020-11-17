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


const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    // baseURL: 'https://github.com/IgnatZakalinsky/cards-nya-back-2-0',
    withCredentials: true
})

export const authApi = {
    me() {
        debugger
        return instance.post<ResponseDataType>(`/auth/me`, {})
    },
    login(email: string, password: string, rememberMe: boolean) {
        debugger
        return instance.post('/auth/login', {email, password, rememberMe})
    }

}
