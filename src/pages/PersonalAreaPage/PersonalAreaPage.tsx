import React, { useCallback, useLayoutEffect, useState } from "react"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { PersonalAreaWrapper } from "components/PersonalArea/PersonalAreaWrapper"
import { PersonalAreaButtons } from "components/PersonalArea/PersonalAreaButtons"
import { PersonalAreaForm } from "components/Forms/PersonalAreaEditForm/PersonalAreaForm"
import { TemporaryMark } from "components/app/TemporaryMark"
import { ConfirmDeleteAccountModal, DeleteAccountWarningModal } from "components/common/Modals/Parents/Modals"
import { TOGGLE_SMARTPHONE_BREAK_POINT } from "components/libs/constants/form-constants"
import { EditProfile } from "components/PersonalArea/EditProfile"
import { BorderWrapper } from "components/Forms/widgets-forms/FormWrappers/BorderWrapper"
import styled from "styled-components"


const PersonalAreaBorderWrapper = styled(BorderWrapper)`
    @media screen and (min-width: 1200px) {
        width: 512px;
        background: var(--app-background);
    }
    @media screen and (min-width: 1910px) {
        width: 640px;
        background: var(--border-wrapper);
    }
`;

const PersonalAreaPage = () => {
    const [showForm, setShowForm] = useState(() => window.innerWidth < TOGGLE_SMARTPHONE_BREAK_POINT ? false : true)
    const handleShowFormOnChange = useCallback(() => {
        setShowForm(prevShowForm => !prevShowForm)
    }, [])

    useLayoutEffect(() => {
        function resizeScreen() {
            const screenWidth = window.screen.width
            if (screenWidth < TOGGLE_SMARTPHONE_BREAK_POINT && showForm) {
                setShowForm(false)
            } else if (screenWidth >= TOGGLE_SMARTPHONE_BREAK_POINT && !showForm) {
                setShowForm(true)
            }
        }
        window.onresize = resizeScreen
        return () => {
            window.onresize = null
        }
    }, [showForm])

    return (
        <>
        <AppLayout>
            <TemporaryMark text={'PersonalAreaPage'} />
            <PersonalAreaWrapper>
                <PersonalAreaButtons/>
                <div>
                    <EditProfile
                        showForm={showForm}
                        handleShowFormOnChange={handleShowFormOnChange}
                    />
                    <PersonalAreaBorderWrapper>
                        <PersonalAreaForm
                            showForm={showForm}
                        />
                    </PersonalAreaBorderWrapper>
                </div>
            </PersonalAreaWrapper>                
            <DeleteAccountWarningModal/>
            <ConfirmDeleteAccountModal/>
        </AppLayout>
        </>
    )
}

export default PersonalAreaPage