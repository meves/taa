import React, { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SubmitEmailForm } from "components/Forms/SubmitEmailForm/SubmitEmailForm"

import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks"
import {
    setModalOpen,
    setModalClose
} from "store/redux-store/slices/modalSlice"
import {
    resetVideoNumber,
    saveCommentThunk,
    selectAmountAttempts,
    selectExtension,
    selectRecord,
    selectRecordsToSend,
    selectStream,
    selectTempComment,
    sendRecordedVideosThunk,
    setDescribedSideThunk,
    setPausingVideo,
    setPreparingVideo,
    setRecordingVideo,
    setStoppingVideo,
    setStream,
    showModalAfterSeriesThunk,
} from "store/redux-store/slices/videoRecordSlice"
import { getThemeThunk, selectTheme } from "store/redux-store/slices/themeSlice"
import { RecordedVideos } from "store/redux-store/libs/types"
import { saveRecordedVideosOnDevice } from "../../../libs/utils/modalUtils"
import { PreloaderForModals } from "components/common/Preloader/Preloader"
import { selectIsArchiving, selectIsSavingComment } from "store/redux-store/slices/uiSlice"
import { selectArchingError, selectSaveCommentError, setArchivingError, 
    setSaveCommentError } from "store/redux-store/slices/errorSlice"
import { selectAppText } from "store/redux-store/slices/langSlice"
import { CrossButton } from "components/common/Buttons/CrossButton"
import { ArchiveLetterWillBeSentTextBold, CancelRecordVideoTextBold, ConfirmDeleteAccountTextBold, 
    DeleteAccountWarningTextThin, SaveCommentTextBold, TextBold, TextThin } from "./styled-modals/ContentText"
import { 
    ButtonsWrapper, GoTomainModalButton, PrimaryAfterdVideoModalButton, PrimaryCancelRecordVideoModalButton, 
    PrimaryModalButton, SaveOrDeviceModalButton, SecondaryCancelRecordVideoModalButton, SecondaryModalButton, 
    TryAgainModalButton, SaveOrTryButtonswrapper, SaveAndToMainButtonsWrapper, SaveCommentButton, CloseWithoutSavingButton
} from "./styled-modals/ModalButtons"
import { 
    PasswordRecoveryLetterSentToEmailTextWrapper, 
    PasswordSuccessfullyChangedTextWrapper } from "./styled-modals/ContentWrappers"
import styled from "styled-components"


export const CancelRecordVideoModalContent = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { 
        cancelRecordVideo, 
        buttons: { cancelRecording: cancelButton, continueRecording: continueButton } } 
    = useAppSelector(selectAppText).modals
    const stream = useAppSelector(selectStream)

    const handleContinueRecordOnClick = useCallback(() => {
        dispatch(setModalClose('cancel-record-video'))
    }, [dispatch])

    const handleCancelRecordOnClick = useCallback(() => {
        stream?.getTracks().forEach((track: MediaStreamTrack) => track.stop())
        dispatch(setStream(null))
        dispatch(setRecordingVideo(false))
        dispatch(setModalClose('cancel-record-video'))
        navigate("/")
    }, [dispatch, stream, navigate])

    return (
        <>            
            <CancelRecordVideoTextBold>{ cancelRecordVideo.title }</CancelRecordVideoTextBold>
            <TextThin>{ cancelRecordVideo.text }</TextThin>
            
            <ButtonsWrapper>
                <PrimaryCancelRecordVideoModalButton
                    onClick={handleContinueRecordOnClick}
                >{ continueButton }
                </PrimaryCancelRecordVideoModalButton>
                <SecondaryCancelRecordVideoModalButton
                    onClick={handleCancelRecordOnClick}
                >{ cancelButton }
                </SecondaryCancelRecordVideoModalButton>
            </ButtonsWrapper>
        </>
    )
}

export const AfterFirstVideoModalContent = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        afterFirstVideo, buttons: { goToMain, nextImage }
    } = useAppSelector(selectAppText).modals
    const stream = useAppSelector(selectStream)

    const handleMoveToNextImageOnClick = useCallback(() => {
        dispatch(setModalClose('after-first-video'))
        dispatch(setPausingVideo(false))
        dispatch(setStoppingVideo(false))
        dispatch(setPreparingVideo(true))
        dispatch(resetVideoNumber())
        dispatch(setDescribedSideThunk())
        dispatch(getThemeThunk())
    }, [dispatch])

    const handleMoveToHomePageOnClick = useCallback(() => {
        stream?.getTracks().forEach((track: MediaStreamTrack) => track.stop())
        dispatch(setStream(null))
        dispatch(setModalClose('after-first-video'))
        navigate("/")
    }, [stream, dispatch, navigate])

    return (
        <>
            <TextBold>{ afterFirstVideo.title }</TextBold>
            <TextThin>{ afterFirstVideo.text }</TextThin>
            <ButtonsWrapper>
                <PrimaryAfterdVideoModalButton
                    onClick={handleMoveToNextImageOnClick}
                >{ nextImage }
                </PrimaryAfterdVideoModalButton>
                <SecondaryModalButton
                    onClick={handleMoveToHomePageOnClick}
                >{ goToMain }
                </SecondaryModalButton>
            </ButtonsWrapper>
        </>
    )
}

export const AfterSecondVideoModalContent = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { afterSecondVideo, buttons: { goToMain, nextImage } } = useAppSelector(selectAppText).modals
    const stream = useAppSelector(selectStream)

    const handleMoveToNextImageOnClick = useCallback(() => {
        dispatch(setModalClose('after-second-video'))
        dispatch(setPausingVideo(false))
        dispatch(setStoppingVideo(false))
        dispatch(setPreparingVideo(true))
        dispatch(resetVideoNumber())
        dispatch(setDescribedSideThunk())
        dispatch(getThemeThunk())
    }, [dispatch])

    const handleMoveToHomePageOnClick = useCallback(() => {
        stream?.getTracks().forEach((track: MediaStreamTrack) => track.stop())
        dispatch(setStream(null))
        dispatch(setModalClose('after-second-video'))
        navigate("/")
    }, [stream, dispatch, navigate])

    return (
        <>
            <TextBold>{ afterSecondVideo.title }</TextBold>
            <TextThin>{ afterSecondVideo.text }</TextThin>
            <ButtonsWrapper>
                <PrimaryAfterdVideoModalButton
                    onClick={handleMoveToNextImageOnClick}                    
                >{ nextImage }
                </PrimaryAfterdVideoModalButton>
                <SecondaryModalButton
                    onClick={handleMoveToHomePageOnClick}                    
                >{ goToMain }
                </SecondaryModalButton>
            </ButtonsWrapper>
        </>
    )
}

export const AfterThirdVideoModalContent = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        afterThirdVideo, buttons: { goToMain, myAccount }
    } = useAppSelector(selectAppText).modals
    const stream = useAppSelector(selectStream)
    const resetStreamAndCloseModal = useCallback(() => {
        stream?.getTracks().forEach((track: MediaStreamTrack) => track.stop())
        dispatch(setStream(null))
        dispatch(setModalClose('after-third-video'))
        dispatch(resetVideoNumber())
    }, [stream, dispatch])

    const handleMoveToPersonalAreaOnClick = useCallback(() => {
        resetStreamAndCloseModal()
        navigate("/lk")
    }, [resetStreamAndCloseModal, navigate])

    const handleMoveToHomePageOnClick = useCallback(() => {
        resetStreamAndCloseModal()
        navigate("/")
    }, [resetStreamAndCloseModal, navigate])

    return (
        <>
            <TextBold>{ afterThirdVideo.title }</TextBold>
            <TextThin>{ afterThirdVideo.text }</TextThin>
            <ButtonsWrapper>
                <PrimaryAfterdVideoModalButton
                    onClick={handleMoveToPersonalAreaOnClick}
                >{ myAccount }
                </PrimaryAfterdVideoModalButton>
                <SecondaryModalButton
                    onClick={handleMoveToHomePageOnClick}
                >{ goToMain }
                </SecondaryModalButton>
            </ButtonsWrapper>
        </>
    )
}

export const SaveOrTrySendVideoModalContent = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        saveOrTrySendVideo,
        buttons: { saveToDevice, tryAgain, goToMain }
    } = useAppSelector(selectAppText).modals

    const amountAttempts = useAppSelector(selectAmountAttempts)
    const stream = useAppSelector(selectStream)
    const theme = useAppSelector(selectTheme)
    const extension = useAppSelector(selectExtension)

    const [sendButtonDisabled, setSendButtonDisabled] = useState<boolean>(false)
    const recordsToSend: RecordedVideos | null = useAppSelector(selectRecordsToSend)

    const resetStreamAndCloseModal = useCallback(() => {
        stream?.getTracks().forEach((track: MediaStreamTrack) => track.stop())
        dispatch(setStream(null))
        dispatch(setModalClose('video-not-sent'))
        dispatch(resetVideoNumber())
    }, [stream, dispatch])

    const handleMoveToHomePageOnClick = useCallback(() => {
        resetStreamAndCloseModal()
        navigate("/")
    }, [resetStreamAndCloseModal, navigate])

    const handleTryToSendRecordsOnClick = useCallback(() => {
        setSendButtonDisabled(true)
        dispatch(sendRecordedVideosThunk())
            .then(() => {
                dispatch(setModalClose('video-not-sent'))
                if (amountAttempts) {
                    dispatch(showModalAfterSeriesThunk(amountAttempts))
                }
            })
            .catch((error: any) => {
                dispatch(setModalOpen('video-not-sent'))
            })
            .finally(() => {
                setSendButtonDisabled(false)
            })
    }, [dispatch, amountAttempts])

    const handleSaveVideoOnDeviceOnClick = useCallback(async () => {
        if (recordsToSend && theme) {
            saveRecordedVideosOnDevice(recordsToSend, extension)
        }
    }, [recordsToSend, theme, extension])

    return (
        <>
            <TextBold>{ saveOrTrySendVideo.title }</TextBold>
            <TextThin>{ saveOrTrySendVideo.text }</TextThin>
            <SaveOrTryButtonswrapper>
                <TryAgainModalButton
                    disabled={sendButtonDisabled}
                    onClick={handleTryToSendRecordsOnClick}
                >{ tryAgain }
                </TryAgainModalButton>
                <SaveAndToMainButtonsWrapper>
                    <SaveOrDeviceModalButton
                        onClick={handleSaveVideoOnDeviceOnClick}
                    >{ saveToDevice }
                    </SaveOrDeviceModalButton>
                    <GoTomainModalButton
                        onClick={handleMoveToHomePageOnClick}
                    >{ goToMain }
                    </GoTomainModalButton>
                </SaveAndToMainButtonsWrapper>
            </SaveOrTryButtonswrapper>
        </>
    )
}

const PreloaderWrapper = styled.div`
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
        margin-bottom: 32px;
    }
`;

export const VideoIsSendingToServerModalConent = () => {
    const { title, text } = useAppSelector(selectAppText).modals.videoIsSendingToServer 

    return (
        <>
            <PreloaderWrapper>
                <PreloaderForModals />
            </PreloaderWrapper>
            <TextBold>{ title }</TextBold>
            <TextThin>{ text }</TextThin>
        </>
    )
}

export const DeleteAccountWarningModalContent = () => {
    const dispatch = useAppDispatch()
    
    const { 
        deleteAccountWarning, 
        buttons: { deleteAccout, cancel } 
    } = useAppSelector(selectAppText).modals 

    const handleCancelOnClick = useCallback(() => {
        dispatch(setModalClose('delete-account-warning'))
    }, [dispatch])

    const handleSubmitRemoveAccountOnClick = useCallback(() => {
        dispatch(setModalClose('delete-account-warning'))
        dispatch(setModalOpen('confirm-delete-account'))
    }, [dispatch])

    return (
        <>
            <TextBold>{ deleteAccountWarning.title }</TextBold>
            <DeleteAccountWarningTextThin>{ deleteAccountWarning.text }</DeleteAccountWarningTextThin>
            <ButtonsWrapper>
                <PrimaryModalButton
                    onClick={handleCancelOnClick}
                >{ cancel }
                </PrimaryModalButton>
                <SecondaryModalButton
                    onClick={handleSubmitRemoveAccountOnClick}
                >{ deleteAccout }                    
                </SecondaryModalButton>
            </ButtonsWrapper>
        </>
    )
}

export const ConfirmDeleteAccountModalContent = () => {
    const dispatch = useAppDispatch()

    const { confirmDeleteAccount } = useAppSelector(selectAppText).modals

    const handleCancelOnClick = useCallback(() => {
        dispatch(setModalClose('confirm-delete-account'))
    }, [dispatch])

    return (
        <>
            <ConfirmDeleteAccountTextBold>
                { confirmDeleteAccount.title }
            </ConfirmDeleteAccountTextBold>
            <SubmitEmailForm
                handleCancelOnClick={handleCancelOnClick}
            />
        </>
    )
}

export const PasswordRecoveryLetterSentToEmailModalContent = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { 
        passwordRecoveryLetterSentToEmail, 
        buttons: { goToMain } 
    } = useAppSelector(selectAppText).modals

    const handleSetResetPasswordSentOnClick = useCallback(() => {
        dispatch(setModalClose('password-recovery-letter-sent'))
        navigate("/")
    }, [dispatch, navigate])

    return (
        <>
        <PasswordRecoveryLetterSentToEmailTextWrapper>
            <TextBold>{ passwordRecoveryLetterSentToEmail.title }</TextBold>
        </PasswordRecoveryLetterSentToEmailTextWrapper>
        <ButtonsWrapper>
            <SecondaryModalButton
                onClick={handleSetResetPasswordSentOnClick}
            >{ goToMain }
            </SecondaryModalButton>
        </ButtonsWrapper>
        </>
    )
}

export const AfterPasswordRecoveryModalConent = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { 
        afterPasswordRecovery,
        buttons: { close, login }
    } = useAppSelector(selectAppText).modals

    const handleCloseModalAndMoveToLoginPageOnClick = useCallback(() => {
        dispatch(setModalClose('password-recovered'))
    }, [dispatch])

    const handleCloseModalAndMoveToHomepageOnClick = useCallback(() => {
        dispatch(setModalClose('password-recovered'))
        navigate("/login")
    }, [dispatch, navigate])

    return (
        <>
            <TextBold>{ afterPasswordRecovery.title }</TextBold>
            <ButtonsWrapper>
                <PrimaryModalButton
                    onClick={handleCloseModalAndMoveToHomepageOnClick}
                >{ login }
                </PrimaryModalButton>
                <SecondaryModalButton
                    onClick={handleCloseModalAndMoveToLoginPageOnClick}
                >{ close }
                </SecondaryModalButton>
            </ButtonsWrapper>
        </>
    )
}

export const EmailAlreadyRegisteredModalConent = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        emailAlreadyRegistered,
        buttons: { goToMain, login }
    } = useAppSelector(selectAppText).modals

    const handleMoveToLoginPageOnClick = useCallback(() => {
        dispatch(setModalClose('email-already-registered'))
        navigate("/login")
    }, [dispatch, navigate])

    const handleMoveToHomePageOnClick = useCallback(() => {
        dispatch(setModalClose('email-already-registered'))
        navigate("/")
    }, [dispatch, navigate])

    return (
        <>
            <CrossButton modalType={'email-already-registered'}/>
            <TextBold>{ emailAlreadyRegistered.title }</TextBold>
            <TextThin>{ emailAlreadyRegistered.text }</TextThin>
            <ButtonsWrapper>
                <PrimaryModalButton
                    onClick={handleMoveToLoginPageOnClick}
                >{ login }
                </PrimaryModalButton>
                <SecondaryModalButton
                    onClick={handleMoveToHomePageOnClick}
                >{ goToMain }
                </SecondaryModalButton>
            </ButtonsWrapper>
        </>
    )
}

export const PasswordSuccessfullyChangedModalContent = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        passwordSuccessfullyChanged,
        buttons: { goToMain, login }
    } = useAppSelector(selectAppText).modals

    const closeModalAndNavigate = useCallback((path: string) => {
        dispatch(setModalClose('password-successfully-changed'))
        navigate(path)
    }, [dispatch, navigate])

    const handleMoveToHomePageOnClick = useCallback(() => {
        closeModalAndNavigate("/")
    }, [closeModalAndNavigate])

    const handleMoveToLoginPageOnClick = useCallback(() => {
        closeModalAndNavigate("/login")
    }, [closeModalAndNavigate])

    return (
        <>
        <PasswordSuccessfullyChangedTextWrapper>
            <TextBold>{ passwordSuccessfullyChanged.title }</TextBold>
        </PasswordSuccessfullyChangedTextWrapper>
        <ButtonsWrapper>
            <PrimaryModalButton
                onClick={handleMoveToLoginPageOnClick}
            >{ login }
            </PrimaryModalButton>
            <SecondaryModalButton
                onClick={handleMoveToHomePageOnClick}
            >{ goToMain }
            </SecondaryModalButton>
        </ButtonsWrapper>
        </>
    )
}

export const ArchivingModalContent = () => {
    const dispatch = useAppDispatch()
    const isArchiving = useAppSelector(selectIsArchiving)
    const archivingError = useAppSelector(selectArchingError)

    const {
        archiving, buttons: { ok }
    } = useAppSelector(selectAppText).modals

    const handleVideoSentToEmailOkOnClick = useCallback(() => {
        dispatch(setModalClose('archiving'))
        dispatch(setArchivingError(false))
    }, [dispatch])

    return (
        <>
            {isArchiving ?
                <>
                    <PreloaderForModals />
                    <TextBold>{ archiving.title }</TextBold>
                </> :
                <>
                    {!archivingError
                        ? <ArchiveLetterWillBeSentTextBold>
                            { archiving.success }
                        </ArchiveLetterWillBeSentTextBold>
                        : <TextBold>{ archiving.error }</TextBold>
                    }
                    <ButtonsWrapper>
                        <SecondaryModalButton
                            onClick={handleVideoSentToEmailOkOnClick}
                        >{ ok }
                        </SecondaryModalButton>
                    </ButtonsWrapper>
                </>}
        </>
    )
}

export const SaveCommentModalContent = () => {
    const dispatch = useAppDispatch()
    const isSavingComment = useAppSelector(selectIsSavingComment)
    const saveCommentError = useAppSelector(selectSaveCommentError)
    const id = useAppSelector(selectRecord)?.id
    const comment = useAppSelector(selectTempComment)

    const {
        saveComment, buttons: { save, closeWithoutSaving }
    } = useAppSelector(selectAppText).modals

    const handleSaveCommentOnClick = useCallback(() => {
        if (id) {
            dispatch(saveCommentThunk(id, comment))
                .then(() => {

                })
        }
    }, [dispatch, id, comment])

    const handleCloseModalOnClick = useCallback(() => {
        dispatch(setModalClose('save-comment'))
        dispatch(setSaveCommentError(false))
    }, [dispatch])

    return (
        <>
            {isSavingComment
                ? <>
                    <PreloaderWrapper>
                        <PreloaderForModals />
                    </PreloaderWrapper>
                    <SaveCommentTextBold> { saveComment.title }</SaveCommentTextBold>
                </>
                : <>
                    {saveCommentError
                        ? <>
                            <TextThin>{ saveComment.error }</TextThin>
                            <ButtonsWrapper>
                                <SaveCommentButton
                                    onClick={handleSaveCommentOnClick}
                                >{ save }
                                </SaveCommentButton>
                                <CloseWithoutSavingButton
                                    onClick={handleCloseModalOnClick}
                                >{ closeWithoutSaving }
                                </CloseWithoutSavingButton>
                            </ButtonsWrapper>
                        </>
                        : null
                    }
                </>
            }
        </>
    )
}
