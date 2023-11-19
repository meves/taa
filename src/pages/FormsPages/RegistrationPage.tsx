import React from "react"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { RegistrationForm } from "components/Forms/RegistrationForm/RegistrationForm"
import { TemporaryMark } from "components/app/TemporaryMark"
import { EmailAlreadyRegisteredModal } from "components/common/Modals/Parents/Modals"
import { BorderWrapper } from "components/Forms/widgets-forms/FormWrappers/BorderWrapper"
import { FormPageWrapper } from "components/Forms/widgets-forms/FormWrappers/FormPageWrapper"


const RegistrationPage = () => {

    return (
        <AppLayout>
            <TemporaryMark text={'RegistrationPage'} />  
            <FormPageWrapper>
                <BorderWrapper>
                    <RegistrationForm />
                </BorderWrapper>                        
            </FormPageWrapper>          
            <EmailAlreadyRegisteredModal />
        </AppLayout>
    )
}

export default RegistrationPage