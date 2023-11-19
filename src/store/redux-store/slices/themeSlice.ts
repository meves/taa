import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResultCodes } from "api/http-codes";
import { themeApi } from "api/theme-api";
import { AppDispatch, RootState } from "../redux-store";
import { Theme } from "../libs/types";
import { NOT_CREDENTIALS } from "../libs/constants";


interface ThemeState {
    theme: Theme | null
    readyTimerStarted: boolean
}

const initialState: ThemeState = {
    theme: null,
    readyTimerStarted: false
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload
        },
        resetTheme: (state, action: PayloadAction) => {
            state.theme = null
        },
        setReadyTimerStarted: (state, action: PayloadAction<boolean>) => {
            state.readyTimerStarted = action.payload
        }
    }
})

export const {
    setTheme,
    resetTheme,
    setReadyTimerStarted,

} = themeSlice.actions

export default themeSlice.reducer

export const selectTheme = (state: RootState) => state.theme.theme
export const selectReadyTimerStarted = (state: RootState) => state.theme.readyTimerStarted

export const getThemeThunk = () =>
    async (dispatch: AppDispatch) => {
        const response = await themeApi.getTheme()
        if (response.status === ResultCodes.SUCCESS_200) {
            dispatch(setTheme(response.data))
            return undefined
        } else if (response.status === ResultCodes.UNAUTHORIZED_401 || response.status === ResultCodes.FORBIDDEN_403) {
            return NOT_CREDENTIALS
        }
    }

export const resetThemeThunk = () =>
    async (dispatch: AppDispatch) => {
        dispatch(resetTheme())
        dispatch(setReadyTimerStarted(false))
    }