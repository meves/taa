import React from "react";
import { QuestionName } from "components/common/SVG/Question";
import styled from "styled-components";


export const Wrapper = styled.div`
    position: absolute;
    right: 10px;
    top: 50%;

    @media screen and (min-width: 1200px) {
        right: 16px;
    }
`;

export const NameFormIcon = () => {
    return (
        <Wrapper>
            <QuestionName />
        </Wrapper>
    )
}