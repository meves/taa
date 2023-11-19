import React from "react"
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled from "styled-components";


export const TimerWrapper = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 4px 16px;
    border: 1px solid var(--pure-white);
    border-radius: 8px;
    background-color: var(--app-background);
    
    @media screen and (min-width: 768px) {
        top: 20px;
        right: 20px;
    }
    @media screen and (min-width: 1200px) {
        top: 15px;
        right: 15px;
        padding: 3px 10px;
        border-radius: 5px;
    }
    @media screen and (min-width: 1910px) {
        top: 24px;
        right: 24px;
        padding: 4px 16px;
        border-radius: 8px;
    }
`;

export const Text = styled.span`
    color: var(--pure-white);
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    vertical-align: middle;

    @media screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 28px;
    }

    @media screen and (min-width: 1910px) {
        font-size: 18px;
        line-height: 40px;
    }
`;

export const TimerText = styled.span`
    color: var(--pure-white);
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
    vertical-align: middle;

    @media screen and (min-width: 1200px) {
        font-size: 16px;
        line-height: 30px;
    }

    @media screen and (min-width: 1910px) {
        font-size: 24px;
        line-height: 40px;
    }
`;

export const Timer = React.memo(({
    timer
} : {
    timer: number
}) => {
    const { stayed, seconds } = useAppSelector(selectAppText).videos.timer

    return (
        <TimerWrapper>
            <Text>{ stayed }</Text> 
            <TimerText>{ timer }</TimerText>
            <Text>{ seconds }</Text>
        </TimerWrapper>
    )
})