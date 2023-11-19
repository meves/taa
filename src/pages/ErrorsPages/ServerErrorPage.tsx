import React from "react"
import { ServerErrorContainer } from "components/Errors/ServerError"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { InfoPageWrapper } from "components/common/InfoPagesWidgets"
import { BorderWrapper } from "components/Forms/widgets-forms/FormWrappers/BorderWrapper"


const ServerErrorPage = () => {
    return (
        <AppLayout>
            <InfoPageWrapper>
                <BorderWrapper>
                    <ServerErrorContainer/>
                </BorderWrapper>
            </InfoPageWrapper>
        </AppLayout>
    )
}

export default ServerErrorPage