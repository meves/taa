import React, { useState } from "react"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { TemporaryMark } from "components/app/TemporaryMark"
import { StartTestVideoBlock } from "components/RecordVideo/StartTestVideo/StartTestVideoBlock"
import { MediaErrorMessage } from "components/RecordVideo/StartTestVideo/MediaErrorMessages"
import { TestVideoTitle } from "components/RecordVideo/widgets-record-video/Titles"
import { TestVideoPageWrapper } from "components/RecordVideo/widgets-record-video/PageWrappers"
import { useAppSelector } from "store/redux-store/libs/hooks"
import { selectAppText } from "store/redux-store/slices/langSlice"


const StartTestVideoPage = () => {
    const testTitle = useAppSelector(selectAppText).videos.test.title

    const [cameraPluggedIn, setCameraPluggedIn] = useState<boolean>(false)
    const [microphonePluggedIn, setMicrophonePluggedIn] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>("")

    return (
        <AppLayout>            
            <TemporaryMark text={'StartTestVideoPage'} />
            <TestVideoPageWrapper>
                <TestVideoTitle>{ testTitle }</TestVideoTitle>
                <StartTestVideoBlock
                    setCameraPluggedIn={setCameraPluggedIn}
                    setMicrophonePluggedIn={setMicrophonePluggedIn}
                    setErrorMessage={setErrorMessage}
                />
                <MediaErrorMessage
                    cameraPluggedIn={cameraPluggedIn}
                    microphonePluggedIn={microphonePluggedIn}
                    errorMessage={errorMessage}
                />
            </TestVideoPageWrapper>
        </AppLayout>
    )
}

export default StartTestVideoPage
