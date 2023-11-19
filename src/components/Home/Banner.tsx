import React from "react";
import { StartButton } from "components/common/Buttons/StartButton";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled from "styled-components";


const Wrapper = styled.section`
    padding-bottom: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: 768px) {
        padding-bottom: 0;
    }
    @media screen and (min-width: 1200px) {
        padding-bottom: 16px;
    }
    @media screen and (min-width: 1910px) {
        padding-bottom: 24px;
    }

    & > a {
        font-weight: 700;
        font-size: 24px;
        line-height: 40px;
        padding: 16px 48px;        
        
        @media screen and (min-width: 768px) {
            padding-left: 49px;
            padding-right: 49px;
        }
        @media screen and (min-width: 1200px) {
            font-size: 32px;
            line-height: 48px;
            padding: 28px 72px;
        }
        @media screen and (min-width: 1440px) {
            font-size: 40px;
            line-height: 56px;
        }
        @media screen and (min-width: 1910px) {
            font-size: 48px;
            line-height: 64px;
        }
    }
`;

const HeadingOne = styled.h1`
    margin: 0 0 36px 0;
    font-family: var(--IBM-Plex-Sans);
    text-align: center;
    font-weight: 700;
    font-size: 64px;
    line-height: 1;
    white-space: normal;

    & > span:first-child {
        background-color: #9B53D9;
        background-image: linear-gradient(295.62deg, #21D6CC 6.31%, #9B53D9 89.7%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    & > span:last-child {
        background-color: #21D6CC;
        background-image: linear-gradient(295.62deg, #9B53D9 6.31%, #21D6CC 89.7%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    @media screen and (min-width: 768px) {
        margin-bottom: 32px;
        white-space: pre;
    }
    @media screen and (min-width: 1200px) {
        margin-bottom: 28px;
        font-size: 100px;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 40px;
        font-size: 120px;
    }
    @media screen and (min-width: 1910px) {
        margin-bottom: 64px;
        font-size: 160px;
    }
`;

const Text = styled.p`
    margin: 0 auto 72px auto;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: var(--pure-white);
    text-align: center;
    width: 336px;

    @media screen and (min-width: 768px) {
        margin-bottom: 56px;
        width: 512px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 20px;
        line-height: 36px;
        width: 100%;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 80px;
        font-size: 24px;
        line-height: 40px;
    }
    @media screen and (min-width: 1910px) {
        margin-bottom: 104px;
        font-size: 28px;
        line-height: 48px;
    }
`;

export const Banner = () => {
    const { 
        text, title: { improve, yourSpeaking, skills }
    } = useAppSelector(selectAppText).homePage.banner

    return (
        <Wrapper>
            <HeadingOne>
                <span>{improve}</span>
                <span>{yourSpeaking}</span>
                <span>{skills}</span>
            </HeadingOne>
            <Text>{text}</Text>
            <StartButton/>
        </Wrapper>
    )
}