import React, { ReactNode } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 4px;
`;

const Label = styled.label`
    color: var(--pure-white);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

export const FormLabel = React.memo(({
    labelFor,
    labelName,
    children
} : {
    labelFor: string
    labelName: string
    children?: ReactNode
}) => {
    return (
        <Wrapper>
            <Label htmlFor={labelFor}>{labelName}</Label>
            { children }
        </Wrapper>
    )
})