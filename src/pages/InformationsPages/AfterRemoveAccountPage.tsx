import React from "react"
import { AfterRemoveAccount } from "components/Imformations/AfterRemoveAccount"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { TemporaryMark } from "components/app/TemporaryMark"
import { BorderWrapper } from "components/Forms/widgets-forms/FormWrappers/BorderWrapper"
import { InfoPageWrapper } from "components/common/InfoPagesWidgets"


const AfterRemovedAccountPage = () => {
    return (
        <AppLayout>
            <TemporaryMark text="AfterRemoveAccountPage"/>
            <InfoPageWrapper>
                <BorderWrapper>
                    <AfterRemoveAccount/>
                </BorderWrapper>
            </InfoPageWrapper>
        </AppLayout>
    )
}

export default AfterRemovedAccountPage