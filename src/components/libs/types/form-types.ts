import { BAD_NAME, BAD_NAMES, BAD_SURNAME, SOME_ERROR } from 'store/redux-store/libs/constants';
import { Dispatch, SetStateAction } from "react"
import { USER_EXISTS } from "store/redux-store/libs/constants"
import { ResponseErrorMessage } from 'store/redux-store/libs/types';


export type Input = { name: string, value: string }

export type CommoonInputState = {
    first_name: string
    last_name: string
    email: string
    old_password: string
    password: string
    re_password: string
}

export type CommoonVisited = {
    first_name: boolean
    last_name: boolean
    email: boolean
    old_password: boolean
    password: boolean
    re_password: boolean
}

export type CommoonInputErrors = CommoonInputState

type RegistrationStates = "first_name" | "last_name" | "email" | "password" | "re_password"
export type RegistrationInputState = Pick<CommoonInputState, RegistrationStates>
export type RegistrationInputErrors = Pick<CommoonInputErrors, RegistrationStates>
export type RegistrationVisited = Pick<CommoonVisited, RegistrationStates>

type LoginStates = "email" | "password"
export type LoginInputState = Pick<CommoonInputState, LoginStates>
export type LoginInputErrors = Pick<CommoonInputErrors, LoginStates>
export type LoginVisited = Pick<CommoonVisited, LoginStates>

type ChangePasswordStates = "old_password" | "password" | "re_password"
export type ChangePasswordInputState = Pick<CommoonInputState, ChangePasswordStates> 
export type ChangePasswordVisited = Pick<CommoonVisited, ChangePasswordStates>
export type ChangePasswordInputErrors = Pick<CommoonInputErrors, ChangePasswordStates>

type ForgetPasswordStates = "email"
export type ForgetPasswordInputState = Pick<CommoonInputState, ForgetPasswordStates>
export type ForgetPasswordVisited = Pick<CommoonVisited, ForgetPasswordStates>
export type ForgetPasswordInputErrors = Pick<CommoonInputErrors, ForgetPasswordStates>

type NewPasswordStates = "password" | "re_password"
export type NewPasswordInputState = Pick<CommoonInputState, NewPasswordStates>
export type NewPasswordVisited = Pick<CommoonVisited, NewPasswordStates>
export type NewPasswordInputErrors = Pick<CommoonInputErrors, NewPasswordStates>

type PersonalAreaStates = "first_name" | "last_name" | "email" 
export type PersonalAreaInputState = Pick<CommoonInputState, PersonalAreaStates>
export type PersonalAreaVisited = Pick<CommoonVisited, PersonalAreaStates>
export type PersonalAreaInputErrors = Pick<CommoonInputErrors, PersonalAreaStates>

type SubmitEmailPasswordStates = "email"
export type SubmitEmailInputState = Pick<CommoonInputState, SubmitEmailPasswordStates>
export type SubmitEmailVisited = Pick<CommoonVisited, SubmitEmailPasswordStates>
export type SubmitEmailInputErrors = Pick<CommoonInputErrors, SubmitEmailPasswordStates>


export type CommentInputState = {
    comment: string
}
export type CommentVisited = {
    comment: boolean
}
export type CommentInputErrors = {
    comment: string
}


export type SetInputErrors<T> = 
    T extends ChangePasswordInputErrors ? Dispatch<SetStateAction<ChangePasswordInputErrors>>
    : T extends RegistrationInputErrors ? Dispatch<SetStateAction<RegistrationInputErrors>>
    : T extends LoginInputErrors ? Dispatch<SetStateAction<LoginInputErrors>>
    : T extends PersonalAreaInputErrors ? Dispatch<SetStateAction<PersonalAreaInputErrors>>
    : T extends NewPasswordInputErrors ? Dispatch<SetStateAction<NewPasswordInputErrors>>
    : T extends ForgetPasswordInputErrors ? Dispatch<SetStateAction<ForgetPasswordInputErrors>>
    : T extends SubmitEmailInputErrors ? Dispatch<SetStateAction<SubmitEmailInputErrors>>
    : T extends CommentInputErrors ? Dispatch<SetStateAction<CommentInputErrors>>
    : never;

export type SetInputVisited<T> = 
    T extends ChangePasswordVisited ? Dispatch<SetStateAction<ChangePasswordVisited>>
    : T extends RegistrationVisited ? Dispatch<SetStateAction<RegistrationVisited>>
    : T extends LoginVisited ? Dispatch<SetStateAction<LoginVisited>>
    : T extends PersonalAreaVisited ? Dispatch<SetStateAction<PersonalAreaVisited>>
    : T extends NewPasswordVisited ? Dispatch<SetStateAction<NewPasswordVisited>>
    : T extends ForgetPasswordVisited ? Dispatch<SetStateAction<ForgetPasswordVisited>>
    : T extends SubmitEmailVisited ? Dispatch<SetStateAction<SubmitEmailVisited>>
    : T extends CommentVisited ? Dispatch<SetStateAction<CommentVisited>>
    : never;

export type RegistrationFormMessage = typeof USER_EXISTS | typeof SOME_ERROR | undefined

export type UpdateUserNameFormMessage = 
    typeof BAD_NAME | 
    typeof BAD_SURNAME | 
    typeof BAD_NAMES | 
    ResponseErrorMessage
