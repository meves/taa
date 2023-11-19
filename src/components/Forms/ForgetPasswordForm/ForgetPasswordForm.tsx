import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react"
import { BAD_REQUEST, NOT_CREDENTIALS } from "store/redux-store/libs/constants"
import { isInputErrors, setErrorsToRequiredIfInputValueIsEmpty, validateInputsAndSetInputErrors } from "../../libs/utils/form-utils"
import { Asterisk } from "../../common/SVG/Asterisk"
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks"
import { forgetPasswordThunk } from "store/redux-store/slices/authSlice"
import { setModalOpen } from "store/redux-store/slices/modalSlice"
import { ForgetPasswordInputErrors, ForgetPasswordInputState, ForgetPasswordVisited } from "../../libs/types/form-types"
import { useForgetPasswordFormInitialState, useHandleInputOnBlur, useHandleInputOnFocus } from "../../libs/hooks/form-hooks"
import { useNavigate } from "react-router-dom"
import { ResponseErrorMessage } from "store/redux-store/libs/types"
import { selectAppText } from "store/redux-store/slices/langSlice"
import { FormLabel } from "../widgets-forms/FormLabel"
import { Form } from "../widgets-forms/Form"
import { FormLegend } from "../widgets-forms/FormLegend"
import { FormErrorMessage } from "../widgets-forms/FormErrorMessage"
import { InputWrapper } from "../widgets-forms/FormWrappers/InputWrapper"
import { EmailFormIcon } from "../widgets-forms/FormIcons/EmailFormIcon"
import { SubmitFormButton } from "../widgets-forms/SubmitFormButton"


export const ForgetPasswordForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        errors,
        forgetPassword: { legend },
        labels: { enterEmail },
        placeholders: { email: mail },
        buttons: { recoverPassword }
    } = useAppSelector(selectAppText).forms

    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    const { initialInputState, initialVisited, initialInputErrors } = useForgetPasswordFormInitialState(errors.required)

    const [inputState, setInputState] = useState<ForgetPasswordInputState>(initialInputState)
    const [inputVisited, setInputVisited] = useState<ForgetPasswordVisited>(initialVisited)
    const [inputErrors, setInputErrors] = useState<ForgetPasswordInputErrors>(initialInputErrors)

    const handleInputOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value.toLowerCase()
        setInputState(prevInputState => ({ ...prevInputState, [name]: value }))
        setInputVisited(prevInputVisited => ({ ...prevInputVisited, [name]: true }))
        validateInputsAndSetInputErrors<ForgetPasswordInputErrors>({ name, value }, errors, setInputErrors)
        setErrorsToRequiredIfInputValueIsEmpty<ForgetPasswordInputErrors>({ name, value }, errors.required, setInputErrors)
    }, [errors])

    const handleInputOnBlur
        = useHandleInputOnBlur<ForgetPasswordInputErrors, ForgetPasswordVisited>(errors.required, setInputErrors, setInputVisited)

    const handleInputOnFocus = useHandleInputOnFocus<ForgetPasswordInputErrors>(errors, setInputErrors)

    useEffect(() => {
        setIsDisabled(isInputErrors(inputErrors))
    }, [inputErrors])

    const handleSubmitForm = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsDisabled(true)
        dispatch(forgetPasswordThunk(inputState.email))
            .then((message: ResponseErrorMessage) => {
                if (!message) {
                    dispatch(setModalOpen('password-recovery-letter-sent'))
                } else if (message === BAD_REQUEST) {
                    setInputVisited({ email: true })
                    setInputErrors({ email: errors.wrongEmail })
                } else if (message === NOT_CREDENTIALS) {
                    navigate("/notfound")
                } else {
                    navigate("/error")
                }
            })
            .catch((error: any) => {
                navigate("/error")
            })
    }, [dispatch, inputState.email, navigate, errors.wrongEmail])

    return (        
        <Form onSubmit={handleSubmitForm}>
            <FormLegend legend={legend} />

            <InputWrapper>
                <FormLabel labelName={enterEmail} labelFor="email" ><Asterisk /></FormLabel>
                <input
                    className={`input ${(inputVisited.email && inputErrors.email) ? "input_error"
                        : (inputVisited.email && !inputErrors.email) ? "input_success" : ""}`}
                    placeholder={mail}
                    id="email"
                    name="email"
                    value={inputState.email}
                    onChange={handleInputOnChange}
                    onBlur={handleInputOnBlur}
                    onFocus={handleInputOnFocus}
                    autoComplete="email"
                />
                <EmailFormIcon/>
            </InputWrapper>
            <FormErrorMessage
                errorMessage={inputErrors.email}
                visited={inputVisited.email}
                error={inputErrors.email}
            />

            <SubmitFormButton
                isDisabled={isDisabled}
                text={recoverPassword}
            />
        </Form>
    )
}