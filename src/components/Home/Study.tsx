import React from "react";
import { TalkAboutAll } from "components/common/Texts/TalkAboutAll";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled from "styled-components";
import { numberOfListPosition, numberOfListStyles } from "components/common/Number";


const Wrapper  = styled.section`
`;

const Title = styled.h2`
    margin: 0 0 19px 0;
    font-family: var(--IBM-Plex-Sans);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    white-space: pre-wrap;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;

    & > div {
        display: inline-flex;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
    }

    @media screen and (min-width: 1200px) {
        margin-bottom: 9px;
        font-size: 48px;
        line-height: 64px;
        & > div {
            font-size: 48px;
            line-height: 64px;
        }
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 8px;
        font-size: 56px;
        line-height: 80px;
        & > div {
            font-size: 56px;
            line-height: 80px;
        }
    }
    @media screen and (min-width: 1910px) {
        margin-bottom: 16px;
        font-size: 72px;
        line-height: 96px;
        & > div {
            font-size: 72px;
            line-height: 96px;
        }
    }
`;

const Cards = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 6px;
    }
    @media screen and (min-width: 1200px) {
        column-gap: 8px;
        & > div:nth-child(odd) > div {
            padding-left: 112px;
        }
        & > div:nth-child(even) > div {
            padding-left: 104px;            
        }
    }
    @media screen and (min-width: 1440px) {
        column-gap: 38px;
        & > div:nth-child(odd) > div {
            padding-left: 116px;
        }
        & > div:nth-child(even) > div {
            padding-left: 122px;            
        }
    }
    @media screen and (min-width: 1910px) {
        column-gap: 116px;
        & > div:nth-child(odd) > div {
            padding-left: 170px;
        }
        & > div:nth-child(even) > div {
            padding-left: 156px;       
        }
    }
`;

const Card = styled.div`
    position: relative;
    width: 336px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        width: 346px;
    }
    @media screen and (min-width: 1200px) {
        width: 512px;
    }
    @media screen and (min-width: 1440px) {
        &:nth-child(odd) {
            width: 580px
        }
        &:nth-child(even) {
            width: 586px;
        }
    }
    @media screen and (min-width: 1910px) {
        &:nth-child(odd) {
            width: 714px
        }
        &:nth-child(even) {
            width: 700px;
        }
    }
`;

const Number = styled.span`
    ${numberOfListStyles};    
    ${numberOfListPosition};
    font-size: 160px;
    line-height: 1;

    @media screen and (min-width: 1200px) {
        font-size: 264px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 320px;
    }
    @media screen and (min-width: 1910px) {
        font-size: 360px;
    }
`;

const Info = styled.div`
    padding: 40px 0 0 84px;
    color: var(--pure-white);

    @media screen and (min-width: 768px) {
        padding-left: 84px;
    }
    @media screen and (min-width: 1200px) {
        padding-top: 72px;
    }
    @media screen and (min-width: 1440px) {
        padding-top: 88px;
    }
    @media screen and (min-width: 1910px) {
        padding-top: 96px;
    }
`;

const InfoTitle = styled.h4`
    margin: 0 0 12px 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-transform: uppercase;

    @media screen and (min-width: 1200px) {
        font-size: 28px;
        line-height: 48px;
    }    
    @media screen and (min-width: 1440px) {
        font-size: 36px;
        line-height: 56px;
    }
    @media screen and (min-width: 1910px) {
        font-size: 48px;
        line-height: 64px;
    }
`;

const InfoText = styled.p`
    margin: 0;  
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;

    @media screen and (min-width: 1440px) {
        font-size: 16px;
        line-height: 36px;
    }
    @media screen and (min-width: 1910px) {
        font-size: 18px;
        line-height: 40px;
    }
`;

export const Study = () => {
    const { title: { together, you_will }, cards } = useAppSelector(selectAppText).homePage.study

    return (
        <Wrapper>
            <Title>
                <span>{together}</span> <TalkAboutAll/> <span>{you_will}</span>
            </Title>
            <Cards>
                { cards.map(card => (
                    <Card key={card.id}>
                        <Number>{card.id}</Number>
                        <Info>
                            <InfoTitle>{card.title}</InfoTitle>
                            <InfoText>{card.text}</InfoText>
                        </Info>
                    </Card>
                )) }
            </Cards>
        </Wrapper>
    )
}