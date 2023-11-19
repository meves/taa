import React from "react"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { InfoAndStartVideoBlock } from "components/RecordVideo/InfoAndStartVideo/InfoAndStartVideoBlock"
import { TemporaryMark } from "components/app/TemporaryMark"
import { AfterThirdVideoModal } from "components/common/Modals/Parents/Modals"


const InfoAndStartVideoPage = () => {
    return (
        <AppLayout>
            <TemporaryMark text={'InfoAndStartPage'} />
            <InfoAndStartVideoBlock/>
            <AfterThirdVideoModal/>
        </AppLayout>
    )
}

export default InfoAndStartVideoPage