import React from "react"
import { NavLink } from "react-router-dom"
import { useAppSelector } from "store/redux-store/libs/hooks"
import { selectAppText } from "store/redux-store/slices/langSlice"
import styled from "styled-components"


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        gap: 32px;
    }
    @media screen and (min-width: 1200px) {
        margin-top: 96px;
        flex-direction: column;
    }
`;

const ButtonLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    padding: 44px 93px;
    max-width: 336px;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: var(--pure-white);
    text-decoration: none;
    text-align: center;
    background-color: var(--background-button);
    border-radius: 32px;
    white-space: pre-wrap;
    transition: all 0.3s ease-out;

    &:hover {
        cursor: pointer;
        background-color: var(--background-button-hover);
    }
    &:active {
        background-color: var(--background-button);
    }

    @media screen and (min-width: 768px) {
        flex: 1;
        padding: 24px 56px;
    }
    @media screen and (min-width: 1200px) {
        padding: 24px 77px;
        max-width: 304px;
    }
    @media screen and (min-width: 1910px) {
        padding: 76px 193px;
        max-width: 544px;
        border-radius: 56px;
        white-space: nowrap;
    }
`;

export const PersonalAreaButtons = () => {
    const { watchVideo, recordVideo } = useAppSelector(selectAppText).forms.lk
    
    return (
        <Wrapper>
            <ButtonLink to="/mynotes">{ watchVideo }</ButtonLink>
            <ButtonLink to="/start">{ recordVideo }</ButtonLink>
        </Wrapper>
    )
}