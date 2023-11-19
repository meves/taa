import { useAppSelector } from "store/redux-store/libs/hooks"
import { ModalState, selectModal } from "store/redux-store/slices/modalSlice"
import { useModal } from "../../../libs/hooks/modal-hooks"
import { createPortal } from "react-dom"
import { CookieContent } from "../Modals/CoockieContent"


export const Cookie = () => {
    const cookieModalOpen = useAppSelector<ModalState>(selectModal)['cookie']
    const { domElement } = useModal(cookieModalOpen)

    if (!cookieModalOpen) {
        return null
    }

    return (
        createPortal(
            <CookieContent/>,
            domElement
        )
    )
}