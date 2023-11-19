import React from "react"
import { MainContainer } from "components/app/Containers/MainContainer"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { TemporaryMark } from "components/app/TemporaryMark"
import { useScrollToTop } from "components/libs/hooks/useScrollToTop"
import { PrivacyStatement } from "components/Legal/PrivacyStatement"


const PrivacyStatementPage = () => {
    useScrollToTop({ x: 0, y: 0 })

    return (
        <AppLayout showFooter>
            <TemporaryMark text="PrivacyStatementPage" />
            <MainContainer>
                <PrivacyStatement />
            </MainContainer>
        </AppLayout>
    )
}

export default PrivacyStatementPage