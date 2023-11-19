import React from "react"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { TemporaryMark } from "components/app/TemporaryMark"
import { AfterPasswordRecoveryModal } from "components/common/Modals/Parents/Modals"
import { NewPasswordForm } from "components/Forms/NewPasswordForm/NewPasswordForm"
import { BorderWrapper } from "components/Forms/widgets-forms/FormWrappers/BorderWrapper"
import { FormPageWrapper } from "components/Forms/widgets-forms/FormWrappers/FormPageWrapper"


const NewPasswordPage = () => {

    return (
        <AppLayout>
            <TemporaryMark text={'NewPasswordPage'} />
            <FormPageWrapper>
                <BorderWrapper>
                    <NewPasswordForm />
                </BorderWrapper>
            </FormPageWrapper>
            <AfterPasswordRecoveryModal />
        </AppLayout>
    )
}

export default NewPasswordPage