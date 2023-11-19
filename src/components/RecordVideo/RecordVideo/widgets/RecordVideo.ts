import { Primary } from "components/common/Buttons/Primary";
import { VideoAndImageWrapper } from "./VideoAndImageWrapper";
import styled, { css } from "styled-components";
import { Secondary } from "components/common/Buttons/Secondary";


export const RecordVideoWrapper = styled.section`
    flex: 1 1 50%;

    @media screen and (min-width: 1200px) {
        position: relative;
    }
`;

export const VideoWrapper = styled(VideoAndImageWrapper)`
    position: relative;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    
    @media screen and (max-width: 767px) {
        height: 336px;
    }
`;

export const ButtonsWrapper = styled.div<{isFocus: boolean}>`
    width: 100%;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
    gap: 8px;

    @media screen and (min-width: 768px) {
        width: 704px;
        flex-direction: row-reverse;
        gap: 85px;
        padding-left: 0;
        padding-right: 0;
        margin-top: 40px;
    }

    @media screen and (min-width: 1200px) {
        width: ${props => props.isFocus ? "640px" : "773px"};
        position: ${props => props.isFocus ? "static" : "absolute" };
        bottom: ${props => props.isFocus ? "0" : "-135px" };
        right: ${props => props.isFocus ? "0" : "0" };
        gap: ${props => props.isFocus ? "20px" : "150px"};
    }

    @media screen and (min-width: 1910px) {
        width: 1024px;
        position: ${props => props.isFocus ? "static" : "absolute" };
        bottom: ${props => props.isFocus ? "0" : "-150px" };
        right: ${props => props.isFocus ? "0" : "20px" };
        gap: ${props => props.isFocus ? "auto" : "343px"};
    }
`;

const startStopButtons = css`
    ${Primary};
    width: 100%;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--text-dark-blue);
    padding-top: 12px;
    padding-bottom: 12px;
    
    @media screen and (min-width: 768px) {
        padding: 16px 40px;
    }

    @media screen and (min-width: 1200px) {
        width: 434px;
    }

    @media screen and (min-width: 1910px) {
        width: 434px;
    }
`;

export const StartButton = styled.button`
    ${startStopButtons};
`;

export const StopButton = styled.button`
    ${startStopButtons};
`;

export const ButonsGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
`;

const cancelChangeButtons = css`
    ${Secondary};
    width: 100%;
    background-color: var(--transparent);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--pure-white);
    padding-top: 12px;
    padding-bottom: 12px;
`;

export const CancelButton = styled.button`
    ${cancelChangeButtons};

    @media screen and (min-width: 768px) {
        width: 140px;
    }
`;

export const ChangeFocusButton = styled.button`
    display: none;

    @media screen and (min-width: 768px) {
        position: relative;
        display: flex;
        ${cancelChangeButtons};   
        width: 220px;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
        padding-left: 32px;
        padding-right: 36px;        
    }
`;

export const TimerText = styled.div`
    margin-top: 25px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    color: var(--white);
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
    @media screen and (max-width: 390px) {
        font-size: 12px;
    }
`;