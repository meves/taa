import { ModalState } from "../slices/modalSlice"
import { BAD_REQUEST, NOT_CREDENTIALS, NOT_FOUND } from "./constants"

export type ConfirmResetPasswordThunkType = {
    new_password: string
    re_new_password: string
}

export type Category = {
    name: string
    translate: string
}

export type Theme = {
    id: number,
    word: string
    translate: string
    image_uri: string
    image_author: string
    category: Category
}

export type RecordingState = {
    preparing: boolean
    recording: boolean
    stopping: boolean
    playing: boolean
    pausing: boolean
    ended: boolean
}

export enum Languages {
    RU = "RU",
    EN = "EN"
}

export enum Described {
    POSITIVE = "POSITIVE",
    NEGATIVE = "NEGATIVE",
    TOTAL = "TOTAL"
}

export type RecordedVideos = {
    positive_video: File
    negative_video: File
    end_video: File
    theme: number
}

export type Sorting = 'create_date' | '-create_date'

export type RecordsUrlParams = {
    page: number
    sorting: Sorting
}

export type COOKIES = {
    all: boolean
}

export type ResponseErrorMessage = typeof BAD_REQUEST | typeof NOT_CREDENTIALS | typeof NOT_FOUND | undefined

export type ModalType = keyof ModalState