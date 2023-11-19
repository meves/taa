import { createPortal } from "react-dom"
import { useStub } from "../../../libs/hooks/modal-hooks"
import { StubWrapper } from "../Wrappers/StubWrapper"
import { StubContent } from "../Modals/Stub/StubContent"


export const Stub = () => {
    const {setIsOpen, domElement} = useStub()

    return (
        createPortal(
            <StubWrapper>
                <StubContent setIsOpen={setIsOpen}/>
            </StubWrapper>,
            domElement
        )
    )
}