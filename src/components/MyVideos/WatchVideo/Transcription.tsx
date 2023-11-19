import { Record } from "api/types";
import React from "react";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled from "styled-components";


export const TranscriptionWrapper = styled.div`
    width: 336px;
    margin-bottom: 20px;
    
    @media screen and (min-width: 768px) {
        width: 704px;
        margin-bottom: 32px;
    }

    @media screen and (min-width: 1910px) {
        width: 1024px;
    }
`;

export const MainTitle = styled.h4`
    margin: 0 0 10px;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    color: var(--pure-white);

    @media screen and (min-width: 768px) {
        font-size: 20px;
        line-height: 40px;
    }
`;

export const TranscriptionTitle = styled.h4`
    margin: 0 0 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--pure-white);

    @media screen and (min-width: 1910px) {
        font-size: 18px;
        line-height: 40px;
    }
`;

export const TranscriptionText = styled.p`
    margin: 0 0 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    overflow-x: auto;
    overflow-y: hidden;

    @media screen and (min-width: 1910px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

export const Transcription = React.memo(({
    record
} : {
    record: Record | null
}) => {
    const {
    videoNotPlaying, transcriptions: { positiveSides, negativeSides, summarize }
    } = useAppSelector(selectAppText).videos.watchVideo

    return (
        <TranscriptionWrapper>
            <MainTitle>{ videoNotPlaying }</MainTitle>

            <TranscriptionTitle>{positiveSides}:</TranscriptionTitle>
            <TranscriptionText>{record?.positive_text}</TranscriptionText>
            
            <TranscriptionTitle>{negativeSides}:</TranscriptionTitle>
            <TranscriptionText>{record?.negative_text}</TranscriptionText>
            
            <TranscriptionTitle>{summarize}:</TranscriptionTitle>
            <TranscriptionText>{record?.summary_text}</TranscriptionText>
        </TranscriptionWrapper>
    )
})