import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { NOT_CREDENTIALS } from "store/redux-store/libs/constants"
import { comparePasswords, isInputErrors, setErrorsToRequiredIfInputValueIsEmpty, validateInputsAndSetInputErrors } from "../../libs/utils/form-utils"
import { Asterisk } from "../../common/SVG/Asterisk"
import { confirmResetPasswordThunk } from "store/redux-store/slices/authSlice"
import { setModalOpen } from "store/redux-store/slices/modalSlice"
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks"
import { NewPasswordInputErrors, NewPasswordInputState, NewPasswordVisited } from "../../libs/types/form-types"
import { useHandleInputOnBlur, useHandleInputOnFocus, useNewPasswordFormInitialState } from "../../libs/hooks/form-hooks"
import { ResponseErrorMessage } from "store/redux-store/libs/types"
import { selectAppText } from "store/redux-store/slices/langSlice"
import { FormLabel } from "../widgets-forms/FormLabel"
import { Form } from "../widgets-forms/Form"
import { FormLegend } from "../widgets-forms/FormLegend"
import { FormErrorMessage } from "../widgets-forms/FormErrorMessage"
import { InputWrapper } from "../widgets-forms/FormWrappers/InputWrapper"
import { PasswordFormIcoon } from "../widgets-forms/FormIcons/PasswordFormIcoon"
import { SubmitFormButton } from "../widgets-forms/SubmitFormButton"


export const NewPasswordForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        errors,
        newPassword: { legend },
        labels: { newPassword, submitNewPassword },
        placeholders: { password: pwd, submitPassword: submitPwd },
        buttons: { save }
    } = useAppSelector(selectAppText).forms

    const [isPasswordsMatch, setIsPasswordsMatch] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showRePassword, setShowRePassword] = useState<boolean>(false)

    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    const { initialInputState, initialVisited, initialInputErrors } = useNewPasswordFormInitialState(errors.required)

    const [inputState, setInputState] = useState<NewPasswordInputState>(initialInputState)
    const [inputVisited, setInputVisited] = useState<NewPasswordVisited>(initialVisited)
    const [inputErrors, setInputErrors] = useState<NewPasswordInputErrors>(initialInputErrors)

    const handleInputOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name
        setInputState(prevInputState => {
            if (name === "re_password") {
                setIsPasswordsMatch(comparePasswords(prevInputState.password, value))
            }
            if (name === "password") {
                setIsPasswordsMatch(comparePasswords(prevInputState.re_password, value))
            }
            return { ...prevInputState, [name]: value }
        })
        setInputVisited(prevInputVisited => ({ ...prevInputVisited, [name]: true }))
        validateInputsAndSetInputErrors<NewPasswordInputErrors>({ name, value }, errors, setInputErrors)
        setErrorsToRequiredIfInputValueIsEmpty<NewPasswordInputErrors>({ name, value }, errors.required, setInputErrors)
    }, [errors])

    const handleInputOnBlur
        = useHandleInputOnBlur<NewPasswordInputErrors, NewPasswordVisited>(errors.required, setInputErrors, setInputVisited)

    const handleInputOnFocus = useHandleInputOnFocus<NewPasswordInputErrors>(errors, setInputErrors)

    useEffect(() => {
        setIsDisabled(!(isPasswordsMatch && !isInputErrors(inputErrors)))
    }, [inputErrors, isPasswordsMatch])

    useEffect(() => {
        setIsPasswordsMatch(comparePasswords(inputState.password, inputState.re_password))
    }, [inputState])

    const handleSubmitForm = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsDisabled(true)
        dispatch(confirmResetPasswordThunk({ new_password: inputState.password, re_new_password: inputState.re_password }))
            .then((message: ResponseErrorMessage) => {
                if (!message) {
                    dispatch(setModalOpen('password-recovered'))
                } else if (message === NOT_CREDENTIALS) {
                    setInputVisited({ password: true, re_password: true })
                    setInputErrors({ password: errors.wrongPassword, re_password: errors.wrongPassword })
                } else {
                    navigate("/error")
                }
            })
            .catch((error: any) => {
                navigate("/error")
            })
    }, [dispatch, inputState, navigate, errors.wrongPassword])

    return (
        <Form onSubmit={handleSubmitForm}>
            <FormLegend legend={legend} />

            <InputWrapper>
                <FormLabel labelName={newPassword} labelFor="password" ><Asterisk /></FormLabel>
                <input
                    className={`input ${(inputVisited.password && inputErrors.password) ? "input_error"
                        : (inputVisited.password && !inputErrors.password) ? "input_success" : ""}`}
                    type={showPassword ? "text" : "password"}
                    placeholder={pwd}
                    id="password"
                    name="password"
                    value={inputState.password}
                    onChange={handleInputOnChange}
                    onBlur={handleInputOnBlur}
                    onFocus={handleInputOnFocus}
                    autoComplete="new-paswword"
                />
                <PasswordFormIcoon
                    isPasswordsMatch={isPasswordsMatch}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    visited={inputVisited.password}
                    error={inputErrors.password}
                />
            </InputWrapper>
            <FormErrorMessage
                errorMessage={inputErrors.password}
                visited={inputVisited.password}
                error={inputErrors.password}
            />

            <InputWrapper>
                <FormLabel labelName={submitNewPassword} labelFor="re_password" ><Asterisk /></FormLabel>
                <input
                    className={`input ${(inputVisited.re_password && inputErrors.re_password) ? "input_error"
                        : (inputVisited.re_password && !inputErrors.re_password) ? "input_success" : ""}`}
                    type={showRePassword ? "text" : "password"}
                    placeholder={submitPwd}
                    id="re_password"
                    name="re_password"
                    value={inputState.re_password}
                    onChange={handleInputOnChange}
                    onBlur={handleInputOnBlur}
                    onFocus={handleInputOnFocus}
                    autoComplete="new-password"
                />
                <PasswordFormIcoon
                    isPasswordsMatch={isPasswordsMatch}
                    showPassword={showRePassword}
                    setShowPassword={setShowRePassword}
                    visited={inputVisited.re_password}
                    error={inputErrors.re_password}
                />
            </InputWrapper>
            <FormErrorMessage
                errorMessage={inputErrors.re_password}
                visited={inputVisited.re_password}
                error={inputErrors.re_password}
            />

            <SubmitFormButton
                isDisabled={isDisabled}
                text={save}
            />
            
        </Form>
    )
}