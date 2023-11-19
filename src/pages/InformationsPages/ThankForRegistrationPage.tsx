import React from "react"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { ThankMessage } from "components/Imformations/ThankMessage"
import { TemporaryMark } from "components/app/TemporaryMark"
import { BorderWrapper } from "components/Forms/widgets-forms/FormWrappers/BorderWrapper"
import { InfoPageWrapper } from "components/common/InfoPagesWidgets"



const ThankForRegistrationPage = () => {
    return (
        
        <AppLayout>            
            <TemporaryMark text={'ThankForRegistrationPage'} />
            <InfoPageWrapper>
                <BorderWrapper>
                    <ThankMessage/>                    
                </BorderWrapper>
            </InfoPageWrapper>            
        </AppLayout>
        
    )
}

export default ThankForRegistrationPage