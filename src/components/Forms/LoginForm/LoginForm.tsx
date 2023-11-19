import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { Asterisk } from '../../common/SVG/Asterisk'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'store/redux-store/libs/hooks'
import { loginThunk } from 'store/redux-store/slices/authSlice'
import { BAD_REQUEST, NOT_CREDENTIALS } from 'store/redux-store/libs/constants'
import { isInputErrors, setErrorsToRequiredIfInputValueIsEmpty, validateInputsAndSetInputErrors } from '../../libs/utils/form-utils'
import { LoginInputErrors, LoginInputState, LoginVisited } from '../../libs/types/form-types'
import { useHandleInputOnBlur, useHandleInputOnFocus, useLoginFormInitialState } from '../../libs/hooks/form-hooks'
import { ResponseErrorMessage } from 'store/redux-store/libs/types'
import { selectAppText } from 'store/redux-store/slices/langSlice'
import { FormLabel } from '../widgets-forms/FormLabel'
import { Form } from '../widgets-forms/Form'
import { FormLegend } from '../widgets-forms/FormLegend'
import { FormErrorMessage } from '../widgets-forms/FormErrorMessage'
import { InputWrapper } from '../widgets-forms/FormWrappers/InputWrapper'
import { EmailFormIcon } from '../widgets-forms/FormIcons/EmailFormIcon'
import { PasswordFormIcoon } from '../widgets-forms/FormIcons/PasswordFormIcoon'
import { LabelWrapper } from './LabelWrapper'
import { SubmitFormButton } from '../widgets-forms/SubmitFormButton'
import { RedirectionRemark } from '../widgets-forms/RedirectionRemark'

export const LoginForm = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const {
		errors,
		login: { legend, redirectionText },
		buttons: { login },
		labels: { email, password },
		placeholders: { email: mail, password: pwd },
	} = useAppSelector(selectAppText).forms

	const [isDisabled, setIsDisabled] = useState<boolean>(true)
	const [showPassword, setShowPassword] = useState<boolean>(false)

	const { initialInputState, initialVisited, initialInputErrors } = useLoginFormInitialState(errors.required)

	const [inputState, setInputState] = useState<LoginInputState>(initialInputState)
	const [inputVisited, setInputVisited] = useState<LoginVisited>(initialVisited)
	const [inputErrors, setInputErrors] = useState<LoginInputErrors>(initialInputErrors)

	const handleInputOnChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const name = event.currentTarget.name
			const value = name === 'email' ? event.currentTarget.value.toLowerCase() : event.currentTarget.value
			setInputState((prevInputState) => ({ ...prevInputState, [name]: value }))
			setInputVisited((prevInputVisited) => ({ ...prevInputVisited, [name]: true }))
			validateInputsAndSetInputErrors<LoginInputErrors>({ name, value }, errors, setInputErrors)
			setErrorsToRequiredIfInputValueIsEmpty<LoginInputErrors>({ name, value }, errors.required, setInputErrors)
		},
		[errors]
	)

	const handleInputOnBlur = useHandleInputOnBlur<LoginInputErrors, LoginVisited>(errors.required, setInputErrors, setInputVisited)

	const handleInputOnFocus = useHandleInputOnFocus<LoginInputErrors>(errors, setInputErrors)

	useEffect(() => {
		setIsDisabled(isInputErrors(inputErrors))
	}, [inputErrors])

	const handleSubmitForm = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			event.preventDefault()
			setIsDisabled(true)
			dispatch(loginThunk(inputState))
				.then((message: ResponseErrorMessage) => {
					if (!message) {
						navigate('/lk')
					} else if (message === BAD_REQUEST || message === NOT_CREDENTIALS) {
						setInputVisited({ email: true, password: true })
						setInputErrors({ email: errors.wrongCredentials, password: errors.wrongCredentials })
					} else {
						navigate('/error')
					}
				})
				.catch((error: any) => {
					navigate('/error')
				})
		},
		[inputState, dispatch, navigate, errors.wrongCredentials]
	)

	return (
		<Form onSubmit={handleSubmitForm}>
			<FormLegend legend={legend} />

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
				<LabelWrapper>
					<FormLabel labelName={password} labelFor="password">
						<Asterisk />
					</FormLabel>
				</LabelWrapper>
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
					autoComplete="current-password"
				/>
				<PasswordFormIcoon
					showPassword={showPassword}
					setShowPassword={setShowPassword}
					visited={inputVisited.password}
					error={inputErrors.password}
				/>
			</InputWrapper>
			<FormErrorMessage errorMessage={inputErrors.password} visited={inputVisited.password} error={inputErrors.password} />

			<SubmitFormButton isDisabled={isDisabled} text={login} />

			<RedirectionRemark to="/registration" redirectionText={redirectionText} />
		</Form>
	)
}
