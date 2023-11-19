import { ReactNode } from "react";
import styled, { css } from "styled-components";


export const titles = css`
    color: var(--white);
    font-family: var(--open-sans);
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;

    @media screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 28px;
    }

    @media screen and (min-width: 1910px) {
        font-size: 18px;
        line-height: 40px;
    }
`;

export const RecordTitle = styled.p`
    ${titles};
    text-align: center;
    margin: 0 0 8px;

    @media screen and (min-width: 768px) {
        margin-bottom: 16px;
    }

    @media screen and (min-width: 1910px) {
        margin-bottom: 24px;
    }
`;


const Title = styled.h2`
    ${titles};
    width: 336px;
    margin: 0 auto 16px;
    text-align: start;
    white-space: pre;

    @media screen and (min-width: 768px) {
        width: 100%;
        text-align: center;
        margin-bottom: 24px;
        white-space:nowrap;
    }
`;

export const TestVideoTitle = ({
    children
} : {
    children: ReactNode
}) => {
    return (
        <Title>
            { children }
        </Title>
    )
}