import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../redux-store"

interface UiState {
    menuIsOpen: boolean
    isArchiving: boolean
    isSavingComment: boolean
    isSavedVideosLoading: boolean
    isWatchedVideoLoading: boolean
    isThemeImageLoading: boolean
}

const initialState: UiState = {
    menuIsOpen: false,
    isArchiving: false,
    isSavingComment: false,
    isSavedVideosLoading: false,
    isWatchedVideoLoading: false,
    isThemeImageLoading: false
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setMenuIsOpen: (state, action: PayloadAction<boolean>) => {
            state.menuIsOpen = action.payload
        },
        setIsArchiving: (state, action: PayloadAction<boolean>) => {
            state.isArchiving = action.payload
        },
        setIsSavingComment: (state, action: PayloadAction<boolean>) => {
            state.isSavingComment = action.payload
        },
        setIsSavedVideosLoading: (state, action: PayloadAction<boolean>) => {
            state.isSavedVideosLoading = action.payload
        },
        setIsWatchedVideoLoading: (state, action: PayloadAction<boolean>) => {
            state.isWatchedVideoLoading = action.payload
        },
        setIsThemeImageLoading: (state, action: PayloadAction<boolean>) => {
            state.isThemeImageLoading = action.payload
        },
    }
})

export const {
    setMenuIsOpen,
    setIsArchiving,
    setIsSavingComment,
    setIsSavedVideosLoading,
    setIsWatchedVideoLoading,
    setIsThemeImageLoading,

} = uiSlice.actions

export default uiSlice.reducer

export const selectMenuIsOpen = (state: RootState) => state.ui.menuIsOpen
export const selectIsArchiving = (state: RootState) => state.ui.isArchiving
export const selectIsSavingComment = (state: RootState) => state.ui.isSavingComment
export const selectIsSavedVideosLoading = (state: RootState) => state.ui.isSavedVideosLoading
export const selectIsWatchedVideoLoading = (state: RootState) => state.ui.isWatchedVideoLoading
export const selectIsThemeImageLoading = (state: RootState) => state.ui.isThemeImageLoading