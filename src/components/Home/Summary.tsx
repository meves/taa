import React from "react";
import { TalkAboutAll } from "components/common/Texts/TalkAboutAll";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled from "styled-components";


const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 36px;
    padding: 120px 0;

    color: var(--pure-white);
    font-size: 14px;
    line-height: 2;
    font-weight: 400;

    @media screen and (min-width: 768px) {
        padding: 140px 0;
        flex-direction: row;
        justify-content: center;
        gap: 16px;
    }
    @media screen and (min-width: 1200px) {
        gap: 116px;
        padding: 180px 0;
        font-size: 16px;
        line-height: 30px;
    }
    @media screen and (min-width: 1440px) {
        gap: 104px;
        padding: 220px 0;
        font-size: 20px;
        line-height: 36px;
    }
    @media screen and (min-width: 1910px) {
        gap: 176px;
        padding: 280px 0;
        font-size: 24px;
        line-height: 40px;
    }
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    text-align: left;
    width: 336px;
    
    @media screen and (min-width: 1200px) {
        gap: 32px;
        width: 416px;
    }
    @media screen and (min-width: 1440px) {
        width: 520px;
    }
    @media screen and (min-width: 1440px) {
        width: 640px;
    }
`;

const DescriptionText = styled.p`
    margin: 0;
    & > span:first-child, & > span:nth-child(3) {
        font-weight: 700;
        color: var(--accent-turquoise);
    }
`;

const CardWrapper = styled.div`
    background: linear-gradient(295.62deg, #21D6CC 6.31%, #9B53D9 89.7%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    padding: 1px;
    width: 336px;

    @media screen and (min-width: 1200px) {
        width: 500px;
        border-radius: 60px;
    }
    @media screen and (min-width: 1440px) {
        width: 592px;
    }
    @media screen and (min-width: 1910px) {
        width: 776px;
    }
`;

const Card = styled.div`
    padding: 32px 24px 20px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 32px;
    background-color: var(--app-background);

    @media screen and (min-width: 768px) {
        padding: 24px 24px 32px 24px;
    }
    @media screen and (min-width: 1200px) {
        padding: 42px 50px 38px 50px;
        border-radius: 60px;
    }
    @media screen and (min-width: 1440px) {
        padding: 60px 40px 52px 40px;
    }
    @media screen and (min-width: 1910px) {
        padding: 56px 68px 64px 68px;
    }
`;

const CardTitle = styled.h4`
    margin:  0 0 16px 0;
        
    & > div:first-child {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
    }
    @media screen and (min-width: 1200px) {
        margin-bottom: 32px;
        & > div:first-child {
            font-size: 30px;
            line-height: 48px;
        }
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 24px;
        & > div:first-child {
            font-size: 36px;
            line-height: 56px;
        }
    }
    @media screen and (min-width: 1910px) {
        & > div:first-child {
            font-size: 48px;
            line-height: 72px;
        }
    }
`;

const CardText = styled.p`
    margin: 0;
    align-self: start;
` ;

export const Summary = () => {
    const {
        descriptionText: { paragraphOne, paragraphTwo: {
            recordYourOwnSpeech, trainDialogs, lowStressLevel, selfConfidence
        }},
        cardText
    } = useAppSelector(selectAppText).homePage.summary

    return (
        <Wrapper>
            <Description>
                <DescriptionText>{paragraphOne}</DescriptionText>
                <DescriptionText>
                    <span>{recordYourOwnSpeech}</span>
                    <span>{trainDialogs}</span>
                    <span>{lowStressLevel}</span>
                    <span>{selfConfidence}</span>
                </DescriptionText>
            </Description>
            <CardWrapper>
                <Card>
                    <CardTitle>
                        <TalkAboutAll/>
                    </CardTitle>
                    <CardText>{cardText}</CardText>
                </Card>
            </CardWrapper>
        </Wrapper>
    )
}