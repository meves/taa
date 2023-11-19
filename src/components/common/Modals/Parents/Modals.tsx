import React from "react"
import { createPortal } from "react-dom"
import { ModalWrapper } from "../Wrappers/ModalsWrappers"
import { 
    AfterFirstVideoModalContent,
    AfterPasswordRecoveryModalConent, 
    AfterSecondVideoModalContent, 
    AfterThirdVideoModalContent, 
    ArchivingModalContent,
    EmailAlreadyRegisteredModalConent, 
    PasswordRecoveryLetterSentToEmailModalContent, 
    PasswordSuccessfullyChangedModalContent, 
    CancelRecordVideoModalContent, 
    SaveCommentModalContent, 
    SaveOrTrySendVideoModalContent, 
    DeleteAccountWarningModalContent, 
    ConfirmDeleteAccountModalContent,
    VideoIsSendingToServerModalConent,
} from "../Modals/ModalsContent"
import { useModal } from "../../../libs/hooks/modal-hooks"
import { useAppSelector } from "store/redux-store/libs/hooks"
import { 
    ModalState,
    selectModal
} from "store/redux-store/slices/modalSlice"


export const CancelRecorVideodModal = () => {
    const cancelRecordVideoModalOpen = useAppSelector<ModalState>(selectModal)["cancel-record-video"]
    const {domElement} = useModal(cancelRecordVideoModalOpen)
    
    return (
        createPortal(
            <ModalWrapper>
                <CancelRecordVideoModalContent/>
            </ModalWrapper>,
            domElement
        )
    )
}

export const AfterFirstVideoModal = () => {
    const afterFirstVideoModalOpen = useAppSelector<ModalState>(selectModal)['after-first-video']
    const { domElement } = useModal(afterFirstVideoModalOpen)
    
    return (
        createPortal(
            <ModalWrapper>
                <AfterFirstVideoModalContent/>
            </ModalWrapper>,
            domElement
        )
    )
}

export const AfterSecondVideoModal = () => {
    const afterSecondVideoModalOpen = useAppSelector<ModalState>(selectModal)['after-second-video']
    const { domElement } = useModal(afterSecondVideoModalOpen)
    
    return (
        createPortal(
            <ModalWrapper>
                <AfterSecondVideoModalContent/>
            </ModalWrapper>,
            domElement
        )
    )
}

export const AfterThirdVideoModal = () => {
    const afterThirdVideoModalOpen = useAppSelector<ModalState>(selectModal)['after-third-video']
    const { domElement } = useModal(afterThirdVideoModalOpen)
    
    return (
        createPortal(
            <ModalWrapper>
                <AfterThirdVideoModalContent/>
            </ModalWrapper>,
            domElement
        )
    )
}

export const SaveOrTrySendVideoModal = () => {
    const videoNotSentModalOpen = useAppSelector<ModalState>(selectModal)['video-not-sent']
    const { domElement } = useModal(videoNotSentModalOpen)

    return (
        createPortal(
            <ModalWrapper>
                <SaveOrTrySendVideoModalContent/>
            </ModalWrapper>,
            domElement
        )
    )
}

export const VideoIsSendingToServerModal = () => {
    const videoIsSendingToServerModalOpen = useAppSelector<ModalState>(selectModal)['video-is-sending']
    const { domElement } = useModal(videoIsSendingToServerModalOpen)

    return (
        createPortal(
            <ModalWrapper>
                <VideoIsSendingToServerModalConent/>
            </ModalWrapper>,
            domElement
        )
    )
} 

export const DeleteAccountWarningModal = () => {
    const deleteAccountWarningModalOpen = useAppSelector<ModalState>(selectModal)['delete-account-warning']
    const { domElement } = useModal(deleteAccountWarningModalOpen)
    
    return (
        createPortal(
            <ModalWrapper>
                <DeleteAccountWarningModalContent/>
            </ModalWrapper>,
            domElement
        )
    )
}

export const ConfirmDeleteAccountModal = () => {
    const confirmDeleteAccountModalOpen = useAppSelector<ModalState>(selectModal)['confirm-delete-account']
    const {domElement} = useModal(confirmDeleteAccountModalOpen)
    
    return (
        createPortal(
            <ModalWrapper>
                <ConfirmDeleteAccountModalContent/>
            </ModalWrapper>,
            domElement
        )
    )
}

export const PasswordRecoveryLetterSentToEmailModal = () => {
    const passwordRecoveryLetterSentToEmailModalOpen 
        = useAppSelector<ModalState>(selectModal)['password-recovery-letter-sent']
    const { domElement } = useModal(passwordRecoveryLetterSentToEmailModalOpen)
    
    return (
        createPortal(
            <ModalWrapper>
                <PasswordRecoveryLetterSentToEmailModalContent/>
            </ModalWrapper>,
            domElement
        )
    )
}

export const AfterPasswordRecoveryModal = () => {
    const afterPasswordRecoveryModalOpen = useAppSelector<ModalState>(selectModal)['password-recovered']
    const { domElement } = useModal(afterPasswordRecoveryModalOpen)
    
    return (
        createPortal(
            <ModalWrapper>
                <AfterPasswordRecoveryModalConent />
            </ModalWrapper>,
            domElement
        )
    )
}

export const EmailAlreadyRegisteredModal = () => {
    const emailAlreadyRegisteredModalOpen = useAppSelector<ModalState>(selectModal)['email-already-registered']
    const { domElement } = useModal(emailAlreadyRegisteredModalOpen)

    return (
        createPortal(
            <ModalWrapper>
                <EmailAlreadyRegisteredModalConent/>
            </ModalWrapper>,
            domElement
        )
    )
}

export const PasswordSuccessfullyChangedModal = () => {
    const passwordSuccessfullyChangedModalOpen 
        = useAppSelector<ModalState>(selectModal)['password-successfully-changed']
    const { domElement } = useModal(passwordSuccessfullyChangedModalOpen)

    return (
        createPortal(
            <ModalWrapper>
                <PasswordSuccessfullyChangedModalContent/>
            </ModalWrapper>,
            domElement
        )
    )
}

export const ArchivingModal  = () => {
    const archivingModalOpen = useAppSelector<ModalState>(selectModal)['archiving']
    const { domElement } = useModal(archivingModalOpen)

    return (
        createPortal(
            <ModalWrapper>
                <ArchivingModalContent/>
            </ModalWrapper>,
            domElement
        )
    )
}

export const SaveCommentModal  = () => {
    const saveCommentModalOpen = useAppSelector<ModalState>(selectModal)['save-comment']
    const { domElement } = useModal(saveCommentModalOpen)

    return (
        createPortal(
            <ModalWrapper>
                <SaveCommentModalContent/>
            </ModalWrapper>,
            domElement
        )
    )
}