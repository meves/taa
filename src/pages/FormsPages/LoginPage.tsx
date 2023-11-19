import React from "react"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { LoginForm } from "components/Forms/LoginForm/LoginForm"
import { TemporaryMark } from "components/app/TemporaryMark"
import { useAppSelector } from "store/redux-store/libs/hooks"
import { selectShowAccountVerified } from "store/redux-store/slices/authSlice"
import { RegistrationConfirmed } from "components/Forms/LoginForm/RegistrationConfirmed"
import { BorderWrapper } from "components/Forms/widgets-forms/FormWrappers/BorderWrapper"
import { FormPageWrapper } from "components/Forms/widgets-forms/FormWrappers/FormPageWrapper"


const LoginPage = () => {
    const showAccountVerified = useAppSelector(selectShowAccountVerified)

    return (
        <AppLayout>
            <TemporaryMark text={'LoginPage'} />
            {showAccountVerified ? <RegistrationConfirmed/> : null}
            <FormPageWrapper>
                <BorderWrapper>
                    <LoginForm />
                </BorderWrapper>
            </FormPageWrapper>
        </AppLayout>
    )
}

export default LoginPage