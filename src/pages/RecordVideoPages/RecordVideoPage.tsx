import React, { useState } from "react"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { RecordImageBlock } from "components/RecordVideo/RecordVideo/RecordImageBlock"
import { RecordVideoBlock } from "components/RecordVideo/RecordVideo/RecordVideoBlock"
import { TemporaryMark } from "components/app/TemporaryMark"
import { 
    AfterFirstVideoModal,
    AfterSecondVideoModal,
    AfterThirdVideoModal,
    CancelRecorVideodModal,
    SaveOrTrySendVideoModal,
    VideoIsSendingToServerModal
} from "components/common/Modals/Parents/Modals"
import { RecordVideoPageWrapper } from "components/RecordVideo/widgets-record-video/PageWrappers"


const RecordVideoPage = () => {
    const [isFocus, toggleIsFocus] = useState<boolean>(true)

    return (
        <AppLayout>
            <TemporaryMark text={'RecordVideoPage'} />
            <RecordVideoPageWrapper>
                <RecordImageBlock 
                    isFocus={isFocus}
                />
                <RecordVideoBlock
                    isFocus={isFocus}
                    toggleIsFocus={toggleIsFocus}
                />
            </RecordVideoPageWrapper>
            
            <CancelRecorVideodModal/> 
            <AfterFirstVideoModal/> 
            <AfterSecondVideoModal/> 
            <AfterThirdVideoModal/>
            <SaveOrTrySendVideoModal/>
            <VideoIsSendingToServerModal/>
        </AppLayout>
    )
}

export default RecordVideoPage