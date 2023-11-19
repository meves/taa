import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserFullName } from "api/types";
import { AppDispatch, RootState } from "store/redux-store/redux-store";
import { lkApi } from "api/lk-api";
import { ResultCodes } from "api/http-codes";
import { deleteUserData, parseResponseError } from "../libs/utils";
import { deleteFromLocalStorage, saveToLocalStorage } from "../../local-storage/utils";
import { ACTIVATED, ACTIVATION_EMAIL, USER } from "store/local-storage/constants";
import { removeCookiesAcceptedThunk } from "store/redux-store/slices/cookieSlice";
import { BAD_NAME, BAD_NAMES, BAD_SURNAME } from "store/redux-store/libs/constants";
import { deleteRecordIdThunk } from "./videoRecordSlice";


interface UserState {
    user: User | null
}

const initialState: UserState = {
    user: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer

export const selectUser = (state: RootState) => state.user.user

export const updateUserThunk = (userId: number) =>
    async (dispatch: AppDispatch) => {
        const response = await lkApi.updateUser(userId)
        if (response.status === ResultCodes.SUCCESS_200) {
            dispatch(setUser(response.data))
            saveToLocalStorage(USER, response.data)
            return undefined
        } else {
            return parseResponseError(response.status)
        }
    }

export const updateUserNameThunk = (userId: number, userFullName: UserFullName) =>
    async (dispatch: AppDispatch) => {
        const response = await lkApi.updateUserName(userId, userFullName)
        if (response.status === ResultCodes.SUCCESS_200) {
            if (userId) {
                return dispatch(updateUserThunk(userId))
            }
        } else if (response.status === ResultCodes.BAD_REQUEST_400) {
            if (response.data.first_name && response.data.last_name) {
                return BAD_NAMES
            } else if (response.data.first_name && !response.data.last_name) {
                return BAD_NAME
            } else if (!response.data.first_name && response.data.last_name) {
                return BAD_SURNAME
            }
        }
        else {
            return parseResponseError(response.status)
        }
    }

export const clearAccountDataThunk = () =>
    async (dispatch: AppDispatch) => {
        deleteUserData(dispatch)
        deleteFromLocalStorage(ACTIVATED)
        deleteFromLocalStorage(ACTIVATION_EMAIL)
        dispatch(removeCookiesAcceptedThunk())
        dispatch(deleteRecordIdThunk())
    }

export const deleteUserAccountThunk = (userId: number) =>
    async (dispatch: AppDispatch) => {
        const response = await lkApi.deleteUserAccount(userId)
        if (response.status === ResultCodes.NO_CONTENT_204) {
            dispatch(clearAccountDataThunk())
            return undefined
        } else {
            return parseResponseError(response.status)
        }
    }