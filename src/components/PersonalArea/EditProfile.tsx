import React from "react";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled from "styled-components";


const Wrapper = styled.div`
    padding: 16px 73px;
    border: 1px solid var(--pure-white);
    border-radius: 100px;
    max-width: 336px;
    text-align: center;
    margin-bottom: 40px;

    &:hover {
        cursor: pointer;
    }    
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const Label = styled.label`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--pure-white);
    &:hover {
        cursor: pointer;
    }
`

export const EditProfile = React.memo(({
    showForm,
    handleShowFormOnChange
} : {
    showForm: boolean
    handleShowFormOnChange: () => void
}) => {
    const { edit } = useAppSelector(selectAppText).forms.lk

    return (
        <Wrapper>
            <input checked={showForm} onChange={handleShowFormOnChange} id="editProfile" type="checkbox" hidden/>
            <Label htmlFor="editProfile">{ edit }</Label>
        </Wrapper>
    )
})