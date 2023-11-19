import React from "react"
import styled from "styled-components";


const Title = styled.div`
    flex-grow: 1;
    font-family: var(--open-sans);
    font-weight: 700;
    font-size: 32px;
    line-height: 1.3;
    white-space: pre;

    @media screen and (max-width: 1194px) {
        margin-top: 0;
        font-size: 16px;
        line-height: 1.3;
    }
    @media screen and (max-width: 450px) {
        margin-right: 20px;
    }
`;

export const TooltipTitle = ({
    text
} : {
    text: string
}) => {
    return (
        <Title>
            { text }
        </Title>
    )
}