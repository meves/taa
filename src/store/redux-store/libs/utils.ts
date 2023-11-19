import { ResultCodes } from "api/http-codes";
import {
    BAD_REQUEST,
    HAS_TO_LOGIN,
    NOT_CREDENTIALS,
    NOT_FOUND
} from "./constants";
import { setIsAuth } from "../slices/authSlice";
import { setUser } from "../slices/userSlice";
import { JWT_TOKEN, USER } from "../../local-storage/constants";
import { AppDispatch } from "../redux-store";
import { deleteFromLocalStorage } from "../../local-storage/utils";
import { Languages } from "./types";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { AppText, russianText } from "store/appText/russianText";
import { englishText } from "store/appText/englishText";


export const deleteUserData = (dispatch: AppDispatch) => {
    deleteFromLocalStorage(JWT_TOKEN)
    deleteFromLocalStorage(USER)
    dispatch(setUser(null))
    dispatch(setIsAuth(false))
}

export const moveToLoginPage = () => {
    return HAS_TO_LOGIN
}

export function deleteUserDataAndMoveToLogin(dispatch: AppDispatch) {
    deleteUserData(dispatch)
    return moveToLoginPage()
}

export const parseResponseError = (status: ResultCodes) => {
    switch (status) {
        case ResultCodes.BAD_REQUEST_400:
            return BAD_REQUEST
        case ResultCodes.UNAUTHORIZED_401:
            return NOT_CREDENTIALS
        case ResultCodes.FORBIDDEN_403:
            return NOT_CREDENTIALS
        case ResultCodes.NOT_FOUND_404:
            return NOT_FOUND
    }
}



export const getBrowserDefaultLanguage = (): Languages => {
    const currentLanguage = navigator.language.slice(0, 2).toUpperCase()
    return currentLanguage === Languages.RU
        ? Languages.RU
        : currentLanguage === Languages.EN ? Languages.EN
            : Languages.EN
}

export const setCurrentText = (
    defaultLanguage: Languages,
    dispatch: AppDispatch,
    setAppText: ActionCreatorWithPayload<AppText>
) => {
    switch (defaultLanguage) {
        case Languages.RU:
            dispatch(setAppText(russianText))
            break
        case Languages.EN:
            dispatch(setAppText(englishText))
            break
        default:
            dispatch(setAppText(englishText))
    }
} 