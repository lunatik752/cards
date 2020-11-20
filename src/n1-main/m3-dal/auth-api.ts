import {instance} from './instance'
import {UserDataType} from "./profile-api";


export type ResponseDataType = UserDataType & { error: string }


export type ResponseDataAddedUserType = {
    error: string
}

export type LogoutResponseDataType = {
    info: string,
    error: string
}


export const authApi = {
    register(email: string, password: string) {
        return instance.post<ResponseDataAddedUserType>(`auth/register`, {email, password})
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseDataType>('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete<LogoutResponseDataType>('auth/me')
    }
}
