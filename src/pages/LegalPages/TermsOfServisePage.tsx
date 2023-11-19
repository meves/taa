import { MainContainer } from "components/app/Containers/MainContainer"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { TemporaryMark } from "components/app/TemporaryMark"
import { useScrollToTop } from "components/libs/hooks/useScrollToTop"
import { TermsOfServise } from "components/Legal/TermsOfServise"
import React from "react"


const TermsOfServisePage = () => {
    useScrollToTop({ x: 0, y: 0 })

    return (
        <AppLayout showFooter>
            <TemporaryMark text="TermsOfServisePage" />
            <MainContainer>
                <TermsOfServise />
            </MainContainer>
        </AppLayout>
    )
}

export default TermsOfServisePage