import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../redux-store"
import { ModalType } from "../libs/types"

export interface ModalState {
    'cancel-record-video': boolean
    'after-first-video': boolean
    'after-second-video': boolean
    'after-third-video': boolean
    'delete-account-warning': boolean
    'confirm-delete-account': boolean
    'password-recovery-letter-sent': boolean
    'password-recovered': boolean
    'email-already-registered': boolean
    'cookie': boolean
    'archiving': boolean
    'video-not-sent': boolean
    'password-successfully-changed': boolean
    'video-is-sending': boolean
    'save-comment': boolean
}

const initialState: ModalState = {
    'cancel-record-video': false,
    'after-first-video': false,
    'after-second-video': false,
    'after-third-video': false,
    'delete-account-warning': false,
    'confirm-delete-account': false,
    'password-recovery-letter-sent': false,
    'password-recovered': false,
    'email-already-registered': false,
    'cookie': true,
    'archiving': false,
    'video-not-sent': false,
    'password-successfully-changed': false,
    'video-is-sending': false,
    'save-comment': false,
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalOpen: (state, action: PayloadAction<ModalType>) => {
            state[action.payload] = true
        },
        setModalClose: (state, action: PayloadAction<ModalType>) => {
            state[action.payload] = false
        }        
    }
})

export const { 
    setModalOpen,
    setModalClose

} = modalSlice.actions

export default modalSlice.reducer

export const selectModal = (state: RootState) => state.modal