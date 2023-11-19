import { AxiosResponse } from "axios"
import { instance } from "./api"
import { Languages, RecordedVideos } from "store/redux-store/libs/types"
import { Comment, Record, Records } from "./types"
import type { RecordsUrlParams } from "store/redux-store/libs/types"

export const recordsApi = {
    async saveRecordedVideos(recordedVideos: RecordedVideos) {
        const formData: FormData = new FormData()
        formData.append("positive_video", recordedVideos.positive_video)
        formData.append("negative_video", recordedVideos.negative_video)
        formData.append("end_video", recordedVideos.end_video)
        formData.append("theme", String(recordedVideos.theme))
        let response: AxiosResponse
        try {
            response = await instance.post("records/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }})
        } catch (error: any) {
            response = error.response
        }
        return response
    },
    async getSavedVideos(recordsUrlParams: RecordsUrlParams) {
        const { page, sorting } = recordsUrlParams
        let response: AxiosResponse<Records>
        try {
            response = await instance.get<Records>(`records/?page=${page}&ordering=${sorting}`)
        } catch (error: any) {
            response = error.response
        }
        return response
    },
    async getRecord(recordId: number) {
        let response: AxiosResponse<Record>
        try {
            response = await instance.get<Record>(`records/${recordId}/`)
        } catch (error: any) {
            response = error.response
        }
        return response
    },
    async changeComment(recordId: number, comment: string) {
        let response: AxiosResponse<Comment>
        try {
            response = await instance.patch<Comment>(`records/${recordId}/`, { comment })
        } catch (error: any) {
            response = error.response
        }
        return response
    },
    async sendVideoToEmail(recordId: number, currentLanguage: Languages) {
        let response: AxiosResponse
        try {
            response = await instance.post(`records/${recordId}/send_email/${currentLanguage}/`)
        } catch (error: any) {
            response = error.response
        }
        return response
    }
}