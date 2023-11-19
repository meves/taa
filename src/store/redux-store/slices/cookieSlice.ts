import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppDispatch, RootState } from "../redux-store"
import { COOKIES } from "../libs/types"
import { deleteFromLocalStorage, getFromLocalStorage, saveToLocalStorage } from "store/local-storage/utils"
import { COOKIES_ACCEPTED } from "store/local-storage/constants"
import { setModalClose, setModalOpen } from "./modalSlice"


interface AppState {
    cookiesAccepted: COOKIES | null
}

const initialState: AppState = {
    cookiesAccepted: null
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setCookiesAccepted: (state, action: PayloadAction<COOKIES | null>) => {
            state.cookiesAccepted = action.payload
        }
    }
})

export const { setCookiesAccepted } = appSlice.actions

export default appSlice.reducer

export const selectCookiesAccepted = (state: RootState) => state.app.cookiesAccepted


export const checkCookiesAcceptedThunk = () =>
    async (dispatch: AppDispatch) => {
        let cookiesAccepted = getFromLocalStorage<COOKIES>(COOKIES_ACCEPTED)
        if (!cookiesAccepted) {
            cookiesAccepted = { all: false }
            saveToLocalStorage(COOKIES_ACCEPTED, cookiesAccepted)
        }
        dispatch(setCookiesAccepted(cookiesAccepted))
        cookiesAccepted.all ? dispatch(setModalClose('cookie')) : dispatch(setModalOpen('cookie'))
    }

export const acceptCookiesThunk = (allCookies: boolean) =>
    async (dispatch: AppDispatch) => {
        let cookiesAccepted = getFromLocalStorage<COOKIES>(COOKIES_ACCEPTED)
        if (!cookiesAccepted) {
            cookiesAccepted = { all: allCookies }
        } else {
            cookiesAccepted.all = allCookies
        }
        saveToLocalStorage(COOKIES_ACCEPTED, cookiesAccepted)
        dispatch(setCookiesAccepted(cookiesAccepted))
    }

export const removeCookiesAcceptedThunk = () =>
    async (dispatch: AppDispatch) => {
        const cookiesAccepted = getFromLocalStorage<COOKIES>(COOKIES_ACCEPTED)
        if (cookiesAccepted) {
            dispatch(setCookiesAccepted(null))
            deleteFromLocalStorage(COOKIES_ACCEPTED)
        }
    }