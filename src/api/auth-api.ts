import { AxiosResponse } from "axios"
import { RegistrationInputState, LoginInputState } from "components/libs/types/form-types"
import { instance } from "./api"
import { LoginResponseData, User, RefreshResponseData, Token, RegistrationResponseData, ConfirmResetPassword, ResetPasswordResponseData, ChangePassword } from "./types"
import { Languages } from "store/redux-store/libs/types"


export const authApi = {
    async registerUser(userInput: RegistrationInputState, currentLanguage: string) { 
        let response: AxiosResponse<RegistrationResponseData>
        try {
            response = await instance.post<RegistrationResponseData>(`auth/registration/${currentLanguage}/`, userInput)
        } catch (error: any) {
            response = error.response
        }
        return response
    },
    async activated(email: string) {
        let response: AxiosResponse
        try {
            response = await instance.post("auth/activated/", { email })
        } catch (error: any) {
            response = error.response
        }
        return response
    },
    async loginUser(userInput: LoginInputState) {
        let response: AxiosResponse<LoginResponseData<User>>
        try {
            response = await instance.post<LoginResponseData<User>>("auth/login/", userInput)
            
        } catch (error: any) {
            response = error.response
        }
        return response
    },
    async refreshToken(refresh: string) {
        let response: AxiosResponse<Token>
        try {
            response = await instance.post<Token>(`auth/login/refresh/`, { refresh })
        } catch (error: any) {
            response = error.response
        }
        return response
    },
    async logoutUser(refresh: string) {
        let response: AxiosResponse<RefreshResponseData>
        try {
            response = await instance.post<RefreshResponseData>("auth/logout/", { refresh })
        } catch (error: any) {
            response = error.response
        }
        return response
    },    
    async forgetPassword(email: string, currentLanguage: Languages) {
        let response: AxiosResponse<ResetPasswordResponseData>
        try {
            response = await instance.post<ResetPasswordResponseData>(`auth/password/reset/${currentLanguage}/`, { email })
        } catch (error: any) {
            response = error.response
        }
        return response
    },
    async confirmResetPassword(confirmData: ConfirmResetPassword, currentLanguage: Languages) {
        let response: AxiosResponse
        try {
            response = await instance.post(`auth/password/reset/confirm/${currentLanguage}/`, confirmData)
            return response
        } catch (error: any) {
            response = error.response
        }
        return response
    },
    async changePassword(changePasswordData: ChangePassword, currentLanguage: Languages) {
        let response: AxiosResponse
        try {
            response = await instance.post(`auth/password/set/${currentLanguage}/`, changePasswordData)
            return response
        } catch (error: any) {
            response = error.response
        }
        return response
    }
}