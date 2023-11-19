import React from "react"
import { useAppSelector } from "store/redux-store/libs/hooks"
import { selectAppText } from "store/redux-store/slices/langSlice"
import styled from "styled-components"


const Wrapper = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--pure-white);
    margin: 56px auto 40px auto;
    width: 300px;
    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 40px;
        margin-top: 128px;
        margin-bottom: 18px;
        width: 100%;
    }
    @media screen and (min-width: 1200px) {
        margin-top: 96px;
        margin-bottom: 46px;
    }
`;

export const RegistrationConfirmed = () => {
    const { accountConfirmed } = useAppSelector(selectAppText).forms.login

    return (
        <Wrapper>{ accountConfirmed }</Wrapper>
    )
}