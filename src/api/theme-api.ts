import { AxiosResponse } from "axios"
import { Theme } from "store/redux-store/libs/types"
import { instance } from "./api"

export const themeApi = {
    async getTheme() {
        let response: AxiosResponse<Theme>
        try {
            response = await instance.get<Theme>(`word/`)
        } catch (error: any) {
            response = error.response
        }
        return response
    }
}