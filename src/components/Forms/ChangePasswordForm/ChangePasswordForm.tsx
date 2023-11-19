import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BAD_REQUEST, NOT_CREDENTIALS } from "store/redux-store/libs/constants"
import { comparePasswords, isInputErrors, setErrorsToRequiredIfInputValueIsEmpty, validateInputsAndSetInputErrors } from "../../libs/utils/form-utils"
import { Asterisk } from "../../common/SVG/Asterisk"
import { changePasswordThunk } from "store/redux-store/slices/authSlice"
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks"
import { ChangePasswordInputErrors, ChangePasswordInputState, ChangePasswordVisited } from "../../libs/types/form-types"
import { useChangePasswordFormInitialState, useHandleInputOnBlur, useHandleInputOnFocus } from "../../libs/hooks/form-hooks"
import { setModalOpen } from "store/redux-store/slices/modalSlice"
import { ResponseErrorMessage } from "store/redux-store/libs/types"
import { selectAppText } from "store/redux-store/slices/langSlice"
import { FormLabel } from "../widgets-forms/FormLabel"
import { Form } from "../widgets-forms/Form"
import { FormLegend } from "../widgets-forms/FormLegend"
import { FormErrorMessage } from "../widgets-forms/FormErrorMessage"
import { InputWrapper } from "../widgets-forms/FormWrappers/InputWrapper"
import { PasswordFormIcoon } from "../widgets-forms/FormIcons/PasswordFormIcoon"
import { SubmitFormButton } from "../widgets-forms/SubmitFormButton"


export const ChangePasswordForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        changePassword: { legend },
        errors,
        labels: { oldPassword, newPassword, submitNewPassword },
        placeholders: { password: pwd, submitPassword: submitPwd },
        buttons: { save }
    } = useAppSelector(selectAppText).forms

    const [isPasswordsMatch, setIsPasswordsMatch] = useState<boolean>(false)
    const [showOldPassword, setShowOldPassword] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showRePassword, setShowRePassword] = useState<boolean>(false)

    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    const { initialInputState, initialInputErrors, initialVisited } = useChangePasswordFormInitialState(errors.required)

    const [inputState, setInputState] = useState<ChangePasswordInputState>(initialInputState)
    const [inputVisited, setInputVisited] = useState<ChangePasswordVisited>(initialVisited)
    const [inputErrors, setInputErrors] = useState<ChangePasswordInputErrors>(initialInputErrors)

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
        validateInputsAndSetInputErrors<ChangePasswordInputErrors>({ name, value }, errors, setInputErrors)
        setErrorsToRequiredIfInputValueIsEmpty<ChangePasswordInputErrors>({ name, value }, errors.required, setInputErrors)
    }, [errors])

    const handleInputOnBlur
        = useHandleInputOnBlur<ChangePasswordInputErrors, ChangePasswordVisited>(errors.required, setInputErrors, setInputVisited)

    const handleInputOnFocus = useHandleInputOnFocus<ChangePasswordInputErrors>(errors, setInputErrors)

    useEffect(() => {
        setIsDisabled(!(isPasswordsMatch && !isInputErrors(inputErrors)))
    }, [inputErrors, isPasswordsMatch, inputState])

    useEffect(() => {
        setIsPasswordsMatch(comparePasswords(inputState.password, inputState.re_password))
    }, [inputState])

    const handleSubmitForm = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsDisabled(true)
        dispatch(changePasswordThunk({
            current_password: inputState.old_password,
            new_password: inputState.password,
            re_new_password: inputState.re_password
        }))
            .then((message: ResponseErrorMessage) => {
                if (!message) {
                    setInputVisited(initialVisited)
                    setInputErrors(initialInputErrors)
                    dispatch(setModalOpen('password-successfully-changed'))
                } else if (message === BAD_REQUEST) {
                    setInputVisited({ old_password: true, password: true, re_password: true })
                    setInputErrors({
                        old_password: errors.wrongPassword,
                        password: errors.wrongPassword,
                        re_password: errors.wrongPassword
                    })
                } else if (message === NOT_CREDENTIALS) {
                    navigate("/notfound")
                }
                else {
                    navigate("/error")
                }
            })
            .catch((error: any) => {
                navigate("/error")
            })
    }, [dispatch, inputState, navigate, initialInputErrors, initialVisited, errors])

    return (
        <Form onSubmit={handleSubmitForm}>
            <FormLegend legend={legend} />

            <InputWrapper>
                <FormLabel labelName={oldPassword} labelFor="old_password" ><Asterisk /></FormLabel>
                <input
                    className={`input ${(inputVisited.old_password && inputErrors.old_password) ? "input_error"
                        : (inputVisited.old_password && !inputErrors.old_password) ? "input_success" : ""}`}
                    type={showOldPassword ? "text" : "password"}
                    placeholder={pwd}
                    id="old_password"
                    name="old_password"
                    value={inputState.old_password}
                    onChange={handleInputOnChange}
                    onBlur={handleInputOnBlur}
                    onFocus={handleInputOnFocus}
                    autoComplete="current-password"
                />
                <PasswordFormIcoon
                    showPassword={showOldPassword}
                    setShowPassword={setShowOldPassword}
                    visited={inputVisited.old_password}
                    error={inputErrors.old_password}
                />
            </InputWrapper>
            <FormErrorMessage
                errorMessage={inputErrors.old_password}
                visited={inputVisited.old_password}
                error={inputErrors.old_password}
            />

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
                    autoComplete="new-password"
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