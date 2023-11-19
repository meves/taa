import React, { ReactNode } from "react"
import { fillHeight } from "components/Forms/widgets-forms/FormWrappers/fillHeight";
import styled from "styled-components"


const Wrapper = styled.section`
    ${fillHeight};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* align-items: center; */
    align-items: flex-start;
    gap: 24px;
    padding: 32px 12px 44px;

    @media screen and (min-width: 768px) {
        gap: 32px;
        padding: 32px 64px 16px;
    }
    @media screen and (min-width: 1200px) {
        flex-direction: row;
        justify-content: center;
        gap: 128px;
        padding: 14px 0 26px;
    }
    @media screen and (min-width: 1910px) {
        padding: 96px 0 136px;
    }
`;

export const PersonalAreaWrapper = ({
    children
} : {
    children: ReactNode
}) => {
    return (
        <Wrapper>
            { children }
        </Wrapper>
    )
}