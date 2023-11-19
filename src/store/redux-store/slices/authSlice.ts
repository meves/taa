import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppDispatch, GetState, RootState } from "../redux-store"
import { authApi } from "../../../api/auth-api"
import { RegistrationInputState, LoginInputState } from "components/libs/types/form-types"
import { ResultCodes } from "api/http-codes"
import { ChangePassword, Token, User } from "api/types"
import {
    deleteUserDataAndMoveToLogin,
    deleteUserData,
    parseResponseError
} from "../libs/utils"
import { getFromLocalStorage, deleteFromLocalStorage, saveToLocalStorage } from "../../local-storage/utils"
import {
    ACTIVATION_EMAIL,
    JWT_TOKEN,
    USER, ACTIVATED,
    RESET_PASSWORD,
    RECOVERED_PASSWORD
} from "../../local-storage/constants"
import {
    HAS_TO_LOGIN,
    NOT_ACTIVATED,
    SOME_ERROR,
    USER_EXISTS
} from "../libs/constants"
import { ConfirmResetPasswordThunkType } from "../libs/types"
import { Activated, ActivationEmail, RecoveredPassword, ResetPassword } from "store/local-storage/types"
import { clearAccountDataThunk, setUser } from "./userSlice"
import { setModalOpen } from "./modalSlice"


interface AuthState {
    isAuth: boolean
    showAccountVerified?: boolean
    showNewPassword?: boolean
}

const initialState: AuthState = {
    isAuth: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        setShowAccountVerified: (state, action: PayloadAction<boolean | undefined>) => {
            if (!state.showAccountVerified && action.payload) {
                state.showAccountVerified = action.payload
            }
        },
        deleteShowAccountVerified: (state, action: PayloadAction) => {
            if (state.showAccountVerified) {
                delete state.showAccountVerified
            }
        }
    }
})

export const {
    setIsAuth,
    setShowAccountVerified,
    deleteShowAccountVerified,

} = authSlice.actions

export default authSlice.reducer

export const selectIsAuth = (state: RootState) => state.auth.isAuth
export const selectShowAccountVerified = (state: RootState) => state.auth.showAccountVerified


export const registerThunk = (userInput: RegistrationInputState) =>
    async (dispatch: AppDispatch, getState: GetState) => {
        const currentLanguage = getState().language.currentLanguage
        const response = await authApi.registerUser(userInput, currentLanguage)
        // восстановление после принудитенльного удаления учетной записи
        dispatch(clearAccountDataThunk())
        if (response.status === ResultCodes.CREATED_201) {
            dispatch(setUser(response.data))
            saveToLocalStorage(ACTIVATION_EMAIL, { email: response.data.email })
            return undefined
        } else if (response.status === ResultCodes.BAD_REQUEST_400) {
            // регистрировались и не залогинены
            saveToLocalStorage(ACTIVATED, { result: true })
            return USER_EXISTS
        } else {
            return SOME_ERROR
        }
    }

export const activatedThunk = () =>
    async (dispatch: AppDispatch) => {
        const activationEmail = getFromLocalStorage<ActivationEmail>(ACTIVATION_EMAIL)
        const token = getFromLocalStorage<Token>(JWT_TOKEN)
        const activated = getFromLocalStorage<Activated>(ACTIVATED)

        if (!activationEmail && !activated?.result && !token) {
            // не регистрировались
            deleteUserData(dispatch)
            return undefined
        } else if (activationEmail && !activated?.result && !token) {
            // регистрировались и прошли активацию по почте
            deleteUserData(dispatch)
            const response = await authApi.activated(activationEmail.email)
            if (response.status === ResultCodes.NO_CONTENT_204) {
                deleteFromLocalStorage(ACTIVATION_EMAIL)
                saveToLocalStorage(ACTIVATED, { result: true })
                dispatch(setShowAccountVerified(true))
                return HAS_TO_LOGIN
            } else {
                // регистрировались и не прошли активацию по почте
                return NOT_ACTIVATED
            }
        } else if (!activationEmail && activated?.result && !token) {
            // активированы но не логинились или разлогинились
            deleteUserData(dispatch)
            return undefined // HAS_TO_LOGIN
        } else if (!activationEmail && !activated?.result && !token) {
            // ошибка: не удалось сохранить acivated при активации
            saveToLocalStorage(ACTIVATED, { result: true })
            return deleteUserDataAndMoveToLogin(dispatch)
        } else if (!activationEmail && activated?.result && token) {
            // логинились
            const user = getFromLocalStorage<User>(USER)
            if (user) {
                try {
                    const response = await authApi.refreshToken(token.refresh)
                    if (response.status === ResultCodes.SUCCESS_200) {
                        dispatch(setIsAuth(true))
                        dispatch(setUser(user))
                        saveToLocalStorage(JWT_TOKEN, { access: response.data.access, refresh: response.data.refresh })
                        return undefined
                    } else if (response.status === ResultCodes.BAD_REQUEST_400) {
                        return deleteUserDataAndMoveToLogin(dispatch)
                    }
                } catch (error) {
                    // не удалось обновить токен
                    return deleteUserDataAndMoveToLogin(dispatch)
                }
            } else {
                // ошибка : пользователя нет
                return deleteUserDataAndMoveToLogin(dispatch)
            }
        }
    }

export const loginThunk = (userInput: LoginInputState) =>
    async (dispatch: AppDispatch) => {
        const response = await authApi.loginUser(userInput)
        if (response.status === ResultCodes.SUCCESS_200) {
            // если регистрировались в другом браузере и залогинены
            if (!getFromLocalStorage<Activated>(ACTIVATED)) {
                saveToLocalStorage(ACTIVATED, { result: true })
            }
            saveToLocalStorage(JWT_TOKEN, { access: response.data.access, refresh: response.data.refresh })
            saveToLocalStorage(USER, response.data.user)
            dispatch(setUser(response.data.user))
            dispatch(setIsAuth(true))
            dispatch(deleteShowAccountVerified())
            return undefined
        } else {
            deleteUserData(dispatch)
            dispatch(deleteShowAccountVerified())
            return parseResponseError(response.status)
        }
    }

export const logoutThunk = () =>
    async (dispatch: AppDispatch) => {
        const storedToken = getFromLocalStorage<Token>(JWT_TOKEN)
        if (storedToken) {
            const response = await authApi.logoutUser(storedToken.refresh)
            deleteUserData(dispatch)
            if (response.status === ResultCodes.NO_CONTENT_204) {
                return undefined
            } else {
                return parseResponseError(response.status)
            }
        }
    }

export const forgetPasswordThunk = (email: string) =>
    async (dispatch: AppDispatch, getState: GetState) => {
        const currentLanguage = getState().language.currentLanguage
        const response = await authApi.forgetPassword(email, currentLanguage)
        if (response.status === ResultCodes.SUCCESS_200) {
            return undefined
        } else {
            return parseResponseError(response.status)
        }
    }

// вынесен в отдельное приложение
export const confirmResetPasswordThunk = (confirm: ConfirmResetPasswordThunkType) =>
    async (dispatch: AppDispatch, getState: GetState) => {
        const resetPassword = getFromLocalStorage<ResetPassword>(RESET_PASSWORD)
        if (resetPassword) {
            const confirmData = { ...confirm, uid: resetPassword.uid, token: resetPassword.token }
            const currentLanguage = getState().language.currentLanguage
            const response = await authApi.confirmResetPassword(confirmData, currentLanguage)
            if (response.status === ResultCodes.NO_CONTENT_204) {
                deleteFromLocalStorage(RESET_PASSWORD)
                return undefined
            } else {
                return parseResponseError(response.status)
            }
        }
    }

export const checkRecoveredPasswordThunk = () =>
    async (dispatch: AppDispatch) => {
        const recoveredPassword = getFromLocalStorage<RecoveredPassword>(RECOVERED_PASSWORD)
        if (recoveredPassword) {
            deleteFromLocalStorage(RECOVERED_PASSWORD)
            dispatch(setModalOpen('password-recovered'))
            return undefined
        }
    }

export const changePasswordThunk = (changePasswordData: ChangePassword) =>
    async (dispatch: AppDispatch, getState: GetState) => {
        const currentLanguage = getState().language.currentLanguage
        const response = await authApi.changePassword(changePasswordData, currentLanguage)
        if (response.status === ResultCodes.NO_CONTENT_204) {
            deleteUserData(dispatch)
            return undefined
        } else {
            return parseResponseError(response.status)
        }
    }