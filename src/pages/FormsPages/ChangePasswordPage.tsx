import React from "react"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { ChangePasswordForm } from "components/Forms/ChangePasswordForm/ChangePasswordForm"
import { TemporaryMark } from "components/app/TemporaryMark"
import { PasswordSuccessfullyChangedModal } from "components/common/Modals/Parents/Modals"
import { BorderWrapper } from "components/Forms/widgets-forms/FormWrappers/BorderWrapper"
import { FormPageWrapper } from "components/Forms/widgets-forms/FormWrappers/FormPageWrapper"


const ChangePasswordPage = () => {
    return (
        <AppLayout>
            <TemporaryMark text={'ChangePasswordPage'} />
            <FormPageWrapper>
                <BorderWrapper>
                    <ChangePasswordForm />
                </BorderWrapper>
            </FormPageWrapper>
            <PasswordSuccessfullyChangedModal />
        </AppLayout>
    )
}

export default ChangePasswordPage