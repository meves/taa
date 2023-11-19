import React from "react"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { ForgetPasswordForm } from "components/Forms/ForgetPasswordForm/ForgetPasswordForm"
import { TemporaryMark } from "components/app/TemporaryMark"
import { PasswordRecoveryLetterSentToEmailModal } from "components/common/Modals/Parents/Modals"
import { BorderWrapper } from "components/Forms/widgets-forms/FormWrappers/BorderWrapper"
import { FormPageWrapper } from "components/Forms/widgets-forms/FormWrappers/FormPageWrapper"


const ForgetPasswordPage = () => {
    return (
        <AppLayout>
            <TemporaryMark text={'ForgetPasswordPage'} />
            <FormPageWrapper>
                <BorderWrapper>
                    <ForgetPasswordForm />
                </BorderWrapper>
            </FormPageWrapper>
            <PasswordRecoveryLetterSentToEmailModal />
        </AppLayout>
    )
}

export default ForgetPasswordPage