import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch, RootState } from "../redux-store"
import { Languages } from "../libs/types"
import { getBrowserDefaultLanguage, setCurrentText } from "../libs/utils"
import { AppText, russianText } from "store/appText/russianText"
import { getFromLocalStorage, saveToLocalStorage } from "store/local-storage/utils"
import { CURRENT_LANGUAGE } from "store/local-storage/constants"


interface LangState {
    currentLanguage: Languages
    appText: AppText
}

const initialState: LangState = {
    currentLanguage: Languages.RU,
    appText: russianText
}

export const langSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setCurrentLanguage: (state, action: PayloadAction<Languages>) => {
            state.currentLanguage = action.payload
        },
        setAppText: (state, action: PayloadAction<AppText>) => {
            state.appText = action.payload
        }
    }
})

export const { setCurrentLanguage, setAppText } = langSlice.actions

export default langSlice.reducer

export const selectLanguage = (state: RootState) => state.language.currentLanguage
export const selectAppText = (state: RootState) => state.language.appText

export const setInitialLanguageThunk = () =>
    async (dispatch: AppDispatch) => {
        let currentLanguage: Languages
        const storedLanguage = getFromLocalStorage<Languages>(CURRENT_LANGUAGE)
        if (storedLanguage) {
            currentLanguage = storedLanguage
        } else {
            currentLanguage = getBrowserDefaultLanguage()
            saveToLocalStorage(CURRENT_LANGUAGE, currentLanguage)
        }
        dispatch(setCurrentLanguage(currentLanguage))
        setCurrentText(currentLanguage, dispatch, setAppText)
    }

export const setCurrentLanguageThunk = (currentLanguage: Languages) => 
    async (dispatch: AppDispatch) => {
        saveToLocalStorage(CURRENT_LANGUAGE, currentLanguage)
        dispatch(setCurrentLanguage(currentLanguage))      
        setCurrentText(currentLanguage, dispatch, setAppText)
    }