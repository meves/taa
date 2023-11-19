import React, { FC } from "react"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { TemporaryMark } from "components/app/TemporaryMark"
import { TestVideoBlock } from "components/RecordVideo/TestVideo/TestVideoBlock"
import { TestVideoTitle } from "components/RecordVideo/widgets-record-video/Titles"
import { TestVideoPageWrapper } from "components/RecordVideo/widgets-record-video/PageWrappers"
import { useAppSelector } from "store/redux-store/libs/hooks"
import { selectAppText } from "store/redux-store/slices/langSlice"


const RecordTestVideoPage: FC = () => {
    const testTitle = useAppSelector(selectAppText).videos.test.title

    return (
        <AppLayout>
            <TemporaryMark text={'MoreTimeTestVideoPage'} />
            <TestVideoPageWrapper>                    
                <TestVideoTitle>{ testTitle }</TestVideoTitle>
                <TestVideoBlock/>
            </TestVideoPageWrapper>
        </AppLayout>
    )
}

export default RecordTestVideoPage