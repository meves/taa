import React from "react"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { TemporaryMark } from "components/app/TemporaryMark"
import { WatchVideoContainer } from "components/MyVideos/WatchVideo/WatchVideoContainer"
import { ArchivingModal, SaveCommentModal } from "components/common/Modals/Parents/Modals"


const WatchVideoPage = () => {
    return (
        <AppLayout>
            <TemporaryMark text="WatchVideoPage"/>
            <WatchVideoContainer/>
            <ArchivingModal/>
            <SaveCommentModal/>
        </AppLayout>
    )
}

export default WatchVideoPage