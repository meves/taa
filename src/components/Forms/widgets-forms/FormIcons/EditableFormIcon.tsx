import React, { useCallback } from "react";
import { EditPencil } from "components/common/SVG/EditPencil";
import { QuestionName } from "components/common/SVG/Question";
import styled from "styled-components";
import { Wrapper } from "./NameFormIcon";


const EditableWrapper = styled(Wrapper)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 18px;
`;

export const EditableFormIcon = React.memo(({
    inputRef
} : {
    inputRef: React.RefObject<HTMLInputElement>
}) => {
    const handleEditNameOnClick = useCallback(() => {
        if (inputRef.current) {
            inputRef.current.disabled = false
            inputRef.current.focus()
        }        
    }, [inputRef])

    return (
        <EditableWrapper>
            <div onClick={handleEditNameOnClick}>
                <EditPencil />
            </div>
            <QuestionName/>
        </EditableWrapper>
    )
})