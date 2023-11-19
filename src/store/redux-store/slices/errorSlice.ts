import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../redux-store"


interface ErrorState {
    archivingError: boolean
    saveCommentError: boolean
}

const initialState: ErrorState = {
    archivingError: false,
    saveCommentError: false
}

export const ErrorSlice = createSlice({
    name: "errors",
    initialState,
    reducers: {
        setArchivingError: (state, action: PayloadAction<boolean>) => {
            state.archivingError = action.payload
        },
        setSaveCommentError: (state, action: PayloadAction<boolean>) => {
            state.saveCommentError = action.payload
        }
    }
})

export const { 
    setArchivingError,
    setSaveCommentError,

} = ErrorSlice.actions

export default ErrorSlice.reducer

export const selectArchingError = (state: RootState) => state.errors.archivingError
export const selectSaveCommentError = (state: RootState) => state.errors.saveCommentError