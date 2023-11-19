import React from "react";
import { StartButton } from "components/common/Buttons/StartButton";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled from "styled-components";


const Wrapper = styled.section`
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;

    & > a {
        font-weight: 700;
        font-size: 24px;
        line-height: 40px;
    }
    
    @media screen and (min-width: 768px) {
        padding-top: 140px;
        flex-direction: row;
        gap: 72px;
    }
    @media screen and (min-width: 1200px) {
        padding: 180px 88px 0 0;
        gap: 59px;
        & > a {
            font-size: 32px;
            line-height: 48px;
        }
    }
    @media screen and (min-width: 1440px) {
        padding: 220px 104px 0 0;
        gap: 84px;
        & > a {
            font-size: 40px;
            line-height: 56px;
        }
    }
    @media screen and (min-width: 1910px) {
        padding: 280px 136px 0 0;
        gap: 172px;
        & > a {
            font-size: 48px;
            line-height: 64px;
        }
    }
`;

const Text = styled.div`
    font-family: var(--IBM-Plex-Sans);
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    width: 336px;
    margin: 0 auto;

    & > span:nth-child(odd) {
        color: var(--accent-turquoise);
    }

    @media screen and (min-width: 768px) {
        text-align: left;
        width: 424px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 32px;
        line-height: 48px;
        width: 616px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 40px;
        line-height: 56px;
        width: 728px;
    }
    @media screen and (min-width: 1910px) {
        font-size: 56px;
        line-height: 72px;
        width: 952px;
    }
`;

export const Speech = () => {
    const {
        improve, your_speech_and_thinking, by_yourself, under_comfortable_conditions, right_now
    } = useAppSelector(selectAppText).homePage.speech

    return (
        <Wrapper>
            <Text>
                <span>{improve}</span>
                <span>{your_speech_and_thinking}</span>
                <span>{by_yourself}</span>
                <span>{under_comfortable_conditions}</span>
                <span>{right_now}</span>
            </Text>
            <StartButton/>
        </Wrapper>
    )
}