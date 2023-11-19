import React from "react"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { TemporaryMark } from "components/app/TemporaryMark"
import { MyNotesContainer } from "components/MyVideos/MyNotes/MyNotesContainer"
import styled from "styled-components"

const MyNotesWrapper = styled.div`
    & > div > header {
        // стили для хедера на странице mynotes
    }
`

const MyNotesPage = () => {
    return (
        <MyNotesWrapper>
            <AppLayout>
                <TemporaryMark text={'MyNotesPage'} />
                <MyNotesContainer/>
            </AppLayout>
        </MyNotesWrapper>
    )
}

export default MyNotesPage