import React, { ChangeEvent, FocusEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Asterisk } from '../../common/SVG/Asterisk'
import { useAppDispatch, useAppSelector } from 'store/redux-store/libs/hooks'
import { registerThunk } from 'store/redux-store/slices/authSlice'
import { USER_EXISTS } from 'store/redux-store/libs/constants'
import { comparePasswords, isInputErrors, setErrorsToRequiredIfInputValueIsEmpty, validateInputsAndSetInputErrors } from '../../libs/utils/form-utils'
import { useCheckbox, useHandleInputOnFocus, useRegistrationFormInitialState } from '../../libs/hooks/form-hooks'
import { RegistrationFormMessage, RegistrationInputErrors, RegistrationInputState, RegistrationVisited } from '../../libs/types/form-types'
import { setModalOpen } from 'store/redux-store/slices/modalSlice'
import { selectAppText } from 'store/redux-store/slices/langSlice'
import { FormLabel } from '../widgets-forms/FormLabel'
import { Form } from '../widgets-forms/Form'
import { FormLegend } from '../widgets-forms/FormLegend'
import { FormErrorMessage } from '../widgets-forms/FormErrorMessage'
import { InputWrapper } from '../widgets-forms/FormWrappers/InputWrapper'
import { NameFormIcon } from '../widgets-forms/FormIcons/NameFormIcon'
import { EmailFormIcon } from '../widgets-forms/FormIcons/EmailFormIcon'
import { PasswordFormIcoon } from '../widgets-forms/FormIcons/PasswordFormIcoon'
import { AcceptCheckbox } from './AcceptCheckbox'
import { SubmitFormButton } from '../widgets-forms/SubmitFormButton'
import { RedirectionRemark } from '../widgets-forms/RedirectionRemark'

export const RegistrationForm = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const {
		registration: { legend, redirectionText },
		labels: { name, surname, email, password, submitPassword },
		buttons: { registration },
		placeholders: { name: fname, surname: lname, email: mail, password: pwd, submitPassword: submitPwd },
		errors,
	} = useAppSelector(selectAppText).forms

	const [isPasswordsMatch, setIsPasswordsMatch] = useState<boolean>(false)
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const [showRePassword, setShowRePassword] = useState<boolean>(false)

	const { isChecked, handleCheckedOnChange } = useCheckbox()
	const [isDisabled, setIsDisabled] = useState<boolean>(true)

	const { initialInputState, initialVisited, initialInputErrors } = useRegistrationFormInitialState(errors.required)
	const [inputState, setInputState] = useState<RegistrationInputState>(initialInputState)
	const [inputVisited, setInputVisited] = useState<RegistrationVisited>(initialVisited)
	const [inputErrors, setInputErrors] = useState<RegistrationInputErrors>(initialInputErrors)

	const handleInputOnChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const name = event.currentTarget.name
			const value = name === 'email' ? event.currentTarget.value.toLowerCase() : event.currentTarget.value

			setInputState((prevInputState: RegistrationInputState) => {
				if (name === 'password') {
					setIsPasswordsMatch(comparePasswords(prevInputState.re_password, value))
				}
				if (name === 're_password') {
					setIsPasswordsMatch(comparePasswords(prevInputState.password, value))
				}
				return { ...prevInputState, [name]: value }
			})
			setInputVisited((prevInputVisited) => ({ ...prevInputVisited, [name]: true }))
			validateInputsAndSetInputErrors<RegistrationInputErrors>({ name, value }, errors, setInputErrors)
			if (name !== 'first_name' && name !== 'last_name') {
				setErrorsToRequiredIfInputValueIsEmpty<RegistrationInputErrors>({ name, value }, errors.required, setInputErrors)
			}
		},
		[errors]
	)

	const handleInputOnBlur = useCallback(
		(event: FocusEvent<HTMLInputElement>) => {
			const name = event.currentTarget.name
			const value = event.currentTarget.value
			if (!value && name !== 'first_name' && name !== 'last_name') {
				setInputErrors((prevInputErrors) => ({ ...prevInputErrors, [name]: errors.required }))
			}
			if (name === 'first_name' || name === 'last_name') {
				let trimmedValue = value.trim()
				setInputState((prevInputState) => ({ ...prevInputState, [name]: trimmedValue }))
				if (!trimmedValue) {
					setInputErrors((prevInputErrors) => ({ ...prevInputErrors, [name]: '' }))
				} else {
					validateInputsAndSetInputErrors<RegistrationInputErrors>({ name, value: trimmedValue }, errors, setInputErrors)
				}
			}
			setInputVisited((prevInputVisited) => ({ ...prevInputVisited, [name]: true }))
		},
		[errors]
	)

	const handleInputOnFocus = useHandleInputOnFocus<RegistrationInputErrors>(errors, setInputErrors)

	useEffect(() => {
		setIsDisabled(!(isChecked && isPasswordsMatch && !isInputErrors(inputErrors)))
	}, [inputErrors, isChecked, isPasswordsMatch])

	useEffect(() => {
		setIsPasswordsMatch(comparePasswords(inputState.password, inputState.re_password))
	}, [inputState.password, inputState.re_password])

	const handleSubmitForm = useCallback(
		async (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault()
			setIsDisabled(true)
			dispatch(registerThunk(inputState))
				.then((errorMessage: RegistrationFormMessage) => {
					if (!errorMessage) {
						navigate('/thank')
					} else if (errorMessage === USER_EXISTS) {
						dispatch(setModalOpen('email-already-registered'))
					} else {
						navigate('/error')
					}
				})
				.catch((error: any) => {
					navigate('/error')
				})
		},
		[dispatch, inputState, navigate]
	)

	return (
		<Form onSubmit={handleSubmitForm}>
			<FormLegend legend={legend} />

			<InputWrapper>
				<FormLabel labelName={name} labelFor="first_name"></FormLabel>
				<input
					className={`input ${
						inputVisited.first_name && inputErrors.first_name
							? 'input_error'
							: inputVisited.first_name && !inputErrors.first_name
							? 'input_success'
							: ''
					}`}
					type="text"
					placeholder={fname}
					id="first_name"
					name="first_name"
					value={inputState.first_name}
					onChange={handleInputOnChange}
					onBlur={handleInputOnBlur}
					autoComplete="name"
				/>
				<NameFormIcon />
			</InputWrapper>
			<FormErrorMessage errorMessage={inputErrors.first_name} visited={inputVisited.first_name} error={inputErrors.first_name} />

			<InputWrapper>
				<FormLabel labelName={surname} labelFor="last_name"></FormLabel>
				<input
					className={`input ${
						inputVisited.last_name && inputErrors.last_name
							? 'input_error'
							: inputVisited.last_name && !inputErrors.last_name
							? 'input_success'
							: ''
					}`}
					type="text"
					placeholder={lname}
					id="last_name"
					name="last_name"
					value={inputState.last_name}
					onChange={handleInputOnChange}
					onBlur={handleInputOnBlur}
					autoComplete="family-name"
				/>
				<NameFormIcon />
			</InputWrapper>
			<FormErrorMessage errorMessage={inputErrors.last_name} visited={inputVisited.last_name} error={inputErrors.last_name} />

			<InputWrapper>
				<FormLabel labelName={email} labelFor="email">
					<Asterisk />
				</FormLabel>
				<input
					className={`input ${
						inputVisited.email && inputErrors.email ? 'input_error' : inputVisited.email && !inputErrors.email ? 'input_success' : ''
					}`}
					placeholder={mail}
					id="email"
					name="email"
					value={inputState.email}
					onChange={handleInputOnChange}
					onBlur={handleInputOnBlur}
					onFocus={handleInputOnFocus}
					autoComplete="email"
				/>
				<EmailFormIcon />
			</InputWrapper>
			<FormErrorMessage errorMessage={inputErrors.email} visited={inputVisited.email} error={inputErrors.email} />

			<InputWrapper>
				<FormLabel labelName={password} labelFor="password">
					<Asterisk />
				</FormLabel>
				<input
					className={`input ${
						inputVisited.password && inputErrors.password
							? 'input_error'
							: inputVisited.password && !inputErrors.password
							? 'input_success'
							: ''
					}`}
					type={showPassword ? 'text' : 'password'}
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
			<FormErrorMessage errorMessage={inputErrors.password} visited={inputVisited.password} error={inputErrors.password} />

			<InputWrapper>
				<FormLabel labelName={submitPassword} labelFor="re_password">
					<Asterisk />
				</FormLabel>
				<input
					className={`input ${
						inputVisited.re_password && inputErrors.re_password
							? 'input_error'
							: inputVisited.re_password && !inputErrors.re_password
							? 'input_success'
							: ''
					}`}
					type={showRePassword ? 'text' : 'password'}
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
			<FormErrorMessage errorMessage={inputErrors.re_password} visited={inputVisited.re_password} error={inputErrors.re_password} />

			<AcceptCheckbox isChecked={isChecked} handleCheckedOnChange={handleCheckedOnChange} />

			<SubmitFormButton isDisabled={isDisabled} text={registration} />

			<RedirectionRemark to="/login" redirectionText={redirectionText} />
		</Form>
	)
}
