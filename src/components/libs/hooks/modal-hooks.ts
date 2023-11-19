import { useCallback, useEffect, useMemo, useState } from "react"


export const useStub = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)    

    const ModalRootElement = useMemo(() => document.querySelector("#modal"), [])
    const domElement = useMemo(() => document.createElement("div"), [])

    useEffect(() => {
        if (isOpen) {
            ModalRootElement?.appendChild(domElement)
            return () => {
                ModalRootElement?.removeChild(domElement)
            }
        }
    }, [isOpen, domElement, ModalRootElement])

    return {setIsOpen, domElement}
}

export const useModal = (isOpen: boolean) => {
    const ModalRootElement = useMemo(() => document.querySelector("#modal"), [])
    const domElement = useMemo(() => document.createElement("div"), [])
    
    useEffect(() => {
        if (isOpen) {
            ModalRootElement?.appendChild(domElement)
            return () => {
                ModalRootElement?.removeChild(domElement)
            }
        }
    }, [isOpen, domElement, ModalRootElement])

    return { domElement }
}

export const useClick = (setIsOpen: (isOpen: boolean) => void) => {
    return useCallback(() => {
        setIsOpen(false)
    }, [setIsOpen])
}