import { AxiosResponse } from "axios"
import { instance } from "./api"
import { AmountAttempts, User, UserFullName } from "./types"


export const lkApi = {
    async updateUser(userId: number) {
        let response: AxiosResponse<User>
        try {
            response = await instance.get<User>(`lk/${userId}/`)
        } catch (error: any) {
            response = error.response
        }
        return response
    },
    async updateUserName(userId: number, userFullName: UserFullName) {
        let response: AxiosResponse<UserFullName>
        try {
            response = await instance.patch<UserFullName>(`lk/${userId}/`, userFullName)
        } catch (error: any) {            
            response = error.response
        }
        return response
    },
    async deleteUserAccount(userId: number) {
        let response: AxiosResponse
        try {
            response = await instance.delete(`lk/${userId}/`)
        } catch (error: any) {
            response = error.response
        }
        return response
    },
    async getAmountAttempts(userId: number) {
        let response: AxiosResponse<AmountAttempts>
        try {
            response = await instance.get<AmountAttempts>(`lk/${userId}/amount_attempts/`)
        } catch (error: any) {
            response = error.response
        }
        return response
    }
}