import React from "react"
import { NotActivatedContainer } from "components/Imformations/NotActivated"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { BorderWrapper } from "components/Forms/widgets-forms/FormWrappers/BorderWrapper"
import { InfoPageWrapper } from "components/common/InfoPagesWidgets"


const NotActivatedPage = () => {
    return (
        <AppLayout>
            <InfoPageWrapper>
                <BorderWrapper>
                    <NotActivatedContainer/>
                </BorderWrapper>
            </InfoPageWrapper>
        </AppLayout>
    )
}

export default NotActivatedPage