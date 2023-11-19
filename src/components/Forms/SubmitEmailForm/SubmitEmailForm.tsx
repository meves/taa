import React, { ChangeEvent, FC, FormEvent, useCallback, useEffect, useState } from "react"
import { BAD_REQUEST, NOT_CREDENTIALS, NOT_FOUND } from "store/redux-store/libs/constants"
import { isInputErrors, setErrorsToRequiredIfInputValueIsEmpty, validateInputsAndSetInputErrors } from "../../libs/utils/form-utils"
import { deleteUserAccountThunk, selectUser } from "store/redux-store/slices/userSlice"
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks"
import { SubmitEmailInputErrors, SubmitEmailInputState, SubmitEmailVisited } from "../../libs/types/form-types"
import { useHandleInputOnBlur, useHandleInputOnFocus, useSubmitEmailFormInitialState } from "../../libs/hooks/form-hooks"
import { useNavigate } from "react-router-dom"
import { ResponseErrorMessage } from "store/redux-store/libs/types"
import { selectAppText } from "store/redux-store/slices/langSlice"
import { FormErrorMessage } from "../widgets-forms/FormErrorMessage"
import { InputWrapper } from "../widgets-forms/FormWrappers/InputWrapper"
import { ButtonsWrapper, PrimaryModalButton, SecondaryModalButton } from "components/common/Modals/Modals/styled-modals/ModalButtons"
import { SubmitForm } from "./SubmitFormStyled"


type SubmitEmailFormType = {
    handleCancelOnClick: () => void
}
export const SubmitEmailForm: FC<SubmitEmailFormType> = ({ handleCancelOnClick }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    
    const { 
        errors,
        placeholders : { email : mail },
        buttons: { cancel, deletionSubmit }
    } = useAppSelector(selectAppText).forms
    const userId = useAppSelector(selectUser)?.id as number
    const email = useAppSelector(selectUser)?.email as string
    
    const [isDisabled, setIsDisabled] = useState<boolean>(true)    
    
    const { initialInputState, initialVisited, initialInputErrors } = useSubmitEmailFormInitialState(errors.required)

    const [inputState, setInputState] = useState<SubmitEmailInputState>(initialInputState)
    const [inputVisited, setInputVisited] = useState<SubmitEmailVisited>(initialVisited)
    const [inputErrors, setInputErrors] = useState<SubmitEmailInputErrors>(initialInputErrors)

    const handleInputOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value.toLowerCase()
        const name = event.currentTarget.name
        setInputState(prevInputState => ({...prevInputState, [name]: value}))
        setInputVisited(prevInputVisited => ({...prevInputVisited, [name]: true}))
        validateInputsAndSetInputErrors<SubmitEmailInputErrors>({name, value}, errors, setInputErrors)
        setErrorsToRequiredIfInputValueIsEmpty<SubmitEmailInputErrors>({name, value}, errors.required, setInputErrors)
    }, [errors])

    const handleInputOnBlur 
        = useHandleInputOnBlur<SubmitEmailInputErrors, SubmitEmailVisited>(errors.required, setInputErrors, setInputVisited)

    const handleInputOnFocus = useHandleInputOnFocus<SubmitEmailInputErrors>(errors, setInputErrors)

    useEffect(() => {
        setIsDisabled(isInputErrors(inputErrors))
    }, [inputErrors, setIsDisabled])

    const handleSubmitForm = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsDisabled(true)
        if (inputState.email === email) {
            dispatch(deleteUserAccountThunk(userId))
                .then((message: ResponseErrorMessage) => {
                    if (!message) {
                        navigate("/removed")
                    } else if (message === BAD_REQUEST) {
                        setInputVisited({ email: true })
                        setInputErrors({ email: errors.wrongEmail })
                    } else if (message === NOT_CREDENTIALS || message === NOT_FOUND) {
                        navigate("/notfound")
                    } else {           
                        navigate("/error")
                    }         
                })
                .catch((error) => {
                    navigate("/error")
                })
                .finally(() => {
                    handleCancelOnClick()
                })
        } else {
            setInputVisited({ email: true })
            setInputErrors({ email: errors.notYourEmail })
        }
    }, [dispatch, userId, email, inputState.email, navigate, handleCancelOnClick, errors.wrongEmail, errors.notYourEmail]) 

    return (
        <SubmitForm onSubmit={handleSubmitForm}>
            <InputWrapper>
                <input
                    className={`input modalInput ${(inputVisited.email && inputErrors.email) ? "modalInput_error" 
                        : (inputVisited.email && !inputErrors.email) ? "modalInput_success" : ""}`}
                    placeholder={mail}
                    name="email"
                    value={inputState.email}
                    onChange={handleInputOnChange}
                    onBlur={handleInputOnBlur}
                    onFocus={handleInputOnFocus}
                    autoComplete="email"
                />
            </InputWrapper>
            <FormErrorMessage
                errorMessage={inputErrors.email}
                visited={inputVisited.email}
                error={inputErrors.email}
            />
                
            <ButtonsWrapper>
                <PrimaryModalButton 
                    onClick={handleCancelOnClick}
                >{ cancel }
                </PrimaryModalButton>
                <SecondaryModalButton
                    type="submit"
                    disabled={isDisabled}
                >{ deletionSubmit }
                </SecondaryModalButton>
            </ButtonsWrapper>    
        </SubmitForm>
    )
}