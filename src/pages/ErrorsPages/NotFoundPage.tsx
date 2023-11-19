import React from "react"
import { NotFoundContainer } from "components/Errors/NotFound"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { InfoPageWrapper } from "components/common/InfoPagesWidgets"
import { BorderWrapper } from "components/Forms/widgets-forms/FormWrappers/BorderWrapper"


const NotFoundPage = () => {
    
    return (
        <AppLayout>
            <InfoPageWrapper>
                <BorderWrapper>
                    <NotFoundContainer/>
                </BorderWrapper>
            </InfoPageWrapper>
        </AppLayout>
    )
}

export default NotFoundPage