import React, { ChangeEvent, FocusEvent, FormEvent, useCallback, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { isInputErrors, validateInputsAndSetInputErrors } from "../../libs/utils/form-utils"
import { usePersonalAreaFormInitialState } from "../../libs/hooks/form-hooks"
import { logoutThunk } from "store/redux-store/slices/authSlice"
import { selectUser, updateUserNameThunk } from "store/redux-store/slices/userSlice"
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks"
import { UpdateUserNameFormMessage, PersonalAreaInputErrors, PersonalAreaInputState, PersonalAreaVisited } from "../../libs/types/form-types"
import { BAD_NAME, BAD_NAMES, BAD_REQUEST, BAD_SURNAME, NOT_CREDENTIALS, NOT_FOUND } from "store/redux-store/libs/constants"
import { setModalOpen } from "store/redux-store/slices/modalSlice"
import { ResponseErrorMessage } from "store/redux-store/libs/types"
import { selectAppText } from "store/redux-store/slices/langSlice"
import { FormLabel } from "../widgets-forms/FormLabel"
import { PersonalAreaFormElement } from "../widgets-forms/Form"
import { PersonalAreaFormLegend } from "../widgets-forms/FormLegend"
import { FormErrorMessage } from "../widgets-forms/FormErrorMessage"
import { PersonalAreaInputWrapper } from "../widgets-forms/FormWrappers/InputWrapper"
import { EditableFormIcon } from "../widgets-forms/FormIcons/EditableFormIcon"
import { PersonalAreaChangePasswordLink } from "./ChangePasswordLink"
import { PersonalAreaEditButtons } from "./EditButtons"
import { PersonalAreaActionButtons, LogoutAccount } from "./ActionButtons"


export const PersonalAreaForm = ({
    showForm
}: {
    showForm: boolean
}) => { 
    const user = useAppSelector(selectUser)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        lk: { legend },
        errors,
        labels: { name, surname, email },
        placeholders: { name: fname, surname: lname, email: mail },
    } = useAppSelector(selectAppText).forms

    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)

    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const [exitButtonDisabled, setExitButtonDisabled] = useState<boolean>(false)
    const [deleteButtonDisabled, setDeleteButtonDisabled] = useState<boolean>(false)

    const { initialInputState, initialVisited, initialInputErrors } = usePersonalAreaFormInitialState()

    const [inputState, setInputState] = useState<PersonalAreaInputState>(() => {
        if (user) return user
        else return initialInputState
    })
    const [inputVisited, setInputVisited] = useState<PersonalAreaVisited>(initialVisited)
    const [inputErrors, setInputErrors] = useState<PersonalAreaInputErrors>(initialInputErrors)

    const handleInputOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name
        setInputState(prevInputState => {
            if (name === "email") {
                return prevInputState
            }
            return { ...prevInputState, [name]: value }
        })
        setInputVisited(prevInputVisited => ({ ...prevInputVisited, [name]: true }))
        validateInputsAndSetInputErrors<PersonalAreaInputErrors>({ name, value }, errors, setInputErrors)
    }, [errors])

    const handleInputOnBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        const trimmedValue = value.trim()
        setInputState(prevInputState => ({ ...prevInputState, [name]: trimmedValue }))
        if (!trimmedValue) {
            setInputErrors(prevInputErrors => ({ ...prevInputErrors, [name]: "" }))
        } else {
            validateInputsAndSetInputErrors<PersonalAreaInputErrors>({ name, value: trimmedValue }, errors, setInputErrors)
        }
        setInputVisited(prevInputVisited => ({ ...prevInputVisited, [name]: true }))
    }, [errors])

    useEffect(() => {
        setIsDisabled(isInputErrors(inputErrors))
    }, [inputErrors])

    const handleDenyInputOnClick = useCallback(() => {
        if (user && firstNameRef.current && lastNameRef.current) {
            setInputState(user)
            firstNameRef.current.disabled = true
            firstNameRef.current.blur()
            lastNameRef.current.disabled = true
            lastNameRef.current.blur()
        }
    }, [user])

    const handleExitAccountOnClick = useCallback(async () => {
        setExitButtonDisabled(true)
        dispatch(logoutThunk())
            .then((message: ResponseErrorMessage) => {
                if (!message) {
                    navigate("/")
                } else if (message === BAD_REQUEST || message === NOT_CREDENTIALS) {             
                    console.log('not found');
                    
                    navigate("/notfound")
                } else {
                    navigate("/error")
                }
            })
            .catch((error: any) => {
                navigate("/error")
            })
    }, [dispatch, navigate])

    const handleDeleteAccountOnClick = useCallback(() => {
        setDeleteButtonDisabled(true)
        dispatch(setModalOpen('delete-account-warning'))
        setDeleteButtonDisabled(false)
    }, [dispatch])

    const handleSubmitForm = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (user?.id) {
            setIsDisabled(true)
            dispatch(updateUserNameThunk(user.id, { first_name: inputState.first_name, last_name: inputState.last_name }))
                .then((message: UpdateUserNameFormMessage) => {
                    if (!message) {
                        if (firstNameRef.current && lastNameRef.current) {
                            firstNameRef.current.disabled = true
                            lastNameRef.current.disabled = true
                        }
                        setInputVisited(prevInputVisited => ({ ...prevInputVisited, first_name: false, last_name: false }))
                        setInputErrors(prevInputErrors => ({ ...prevInputErrors, first_name: "", last_name: "" }))
                        setIsDisabled(false)
                    } else if (message === BAD_NAME) {
                        setInputVisited(prevInputVisited => ({ ...prevInputVisited, first_name: true }))
                        setInputErrors(prevInputErrors => ({
                            ...prevInputErrors, first_name: errors.wrongFirstName
                        }))
                    } else if (message === BAD_SURNAME) {
                        setInputVisited(prevInputVisited => ({ ...prevInputVisited, last_name: true }))
                        setInputErrors(prevInputErrors => ({
                            ...prevInputErrors, last_name: errors.wrongLastName
                        }))
                    } else if (message === BAD_NAMES) {
                        setInputVisited(prevInputVisited => ({ ...prevInputVisited, first_name: true, last_name: true }))
                        setInputErrors(prevInputErrors => ({
                            ...prevInputErrors, first_name: errors.wrongFirstName, last_name: errors.wrongLastName
                        }))
                    } else if (message === NOT_CREDENTIALS || message === NOT_FOUND) {
                        navigate("/notfound")
                    } else {
                        navigate("/error")
                    }
                })
                .catch((error: any) => {
                    navigate("/error")
                })
        }
    }, [dispatch, inputState.first_name, inputState.last_name, user?.id, navigate, errors.wrongFirstName, errors.wrongLastName])

    return (

        <PersonalAreaFormElement onSubmit={handleSubmitForm}>
            {showForm ?
                <>
                    <PersonalAreaFormLegend legend={legend}/>

                    <PersonalAreaInputWrapper>
                        <FormLabel labelName={name} labelFor="first_name" ></FormLabel>
                        <input
                            className={`input ${(inputVisited.first_name && inputErrors.first_name) ? "input_error"
                                : (inputVisited.first_name && !inputErrors.first_name) ? "input_success" : ""}`}
                            type="text"
                            placeholder={fname}
                            id="first_name"
                            name="first_name"
                            value={inputState.first_name}
                            onChange={handleInputOnChange}
                            onBlur={handleInputOnBlur}
                            disabled={true}
                            ref={firstNameRef}
                            autoComplete="name"
                        />
                        <EditableFormIcon inputRef={firstNameRef}/>
                    </PersonalAreaInputWrapper>
                    <FormErrorMessage
                        errorMessage={inputErrors.first_name}
                        visited={inputVisited.first_name}
                        error={inputErrors.first_name}
                    />

                    <PersonalAreaInputWrapper>
                        <FormLabel labelName={surname} labelFor="last_name" ></FormLabel>
                        <input
                            className={`input ${(inputVisited.last_name && inputErrors.last_name) ? "input_error"
                                : (inputVisited.last_name && !inputErrors.last_name) ? "input_success" : ""}`}
                            type="text"
                            placeholder={lname}
                            id="last_name"
                            name="last_name"
                            value={inputState.last_name}
                            onChange={handleInputOnChange}
                            onBlur={handleInputOnBlur}
                            disabled={true}
                            ref={lastNameRef}
                            autoComplete="family-name"
                        />
                        <EditableFormIcon inputRef={lastNameRef}/>
                    </PersonalAreaInputWrapper>
                    <FormErrorMessage
                        errorMessage={inputErrors.last_name}
                        visited={inputVisited.last_name}
                        error={inputErrors.last_name}
                    />

                    <PersonalAreaInputWrapper>
                        <FormLabel labelName={email} labelFor="email" ></FormLabel>
                        <input
                            className={`input`}
                            type="email"
                            placeholder={mail}
                            id="email"
                            name="email"
                            value={inputState.email}
                            onChange={handleInputOnChange}
                            disabled
                            autoComplete="email"
                        />
                    </PersonalAreaInputWrapper>
                    <FormErrorMessage
                        errorMessage={inputErrors.email}
                        visited={inputVisited.email}
                        error={inputErrors.email}
                    />

                    <PersonalAreaChangePasswordLink/>

                    <PersonalAreaEditButtons
                        isDisabled={isDisabled}
                        handleDenyInputOnClick={handleDenyInputOnClick}
                    />

                    <PersonalAreaActionButtons
                        exitButtonDisabled={exitButtonDisabled}
                        deleteButtonDisabled={deleteButtonDisabled}
                        handleExitAccountOnClick={handleExitAccountOnClick}
                        handleDeleteAccountOnClick={handleDeleteAccountOnClick}
                    />
                    
                </> :
                
                <LogoutAccount
                    exitButtonDisabled={exitButtonDisabled}
                    handleExitAccountOnClick={handleExitAccountOnClick}
                />             
            }
        </PersonalAreaFormElement>
    )
}