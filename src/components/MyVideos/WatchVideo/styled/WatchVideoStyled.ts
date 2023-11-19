import { fillHeight } from "components/Forms/widgets-forms/FormWrappers/fillHeight";
import styled, { css } from "styled-components";


export const VideoContainer = styled.div`   
    ${fillHeight};
    width: 336px;
    margin: 0 auto;
    padding: 8px 0 28px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: 768px) {
        width: 704px;
        padding: 0 0 74px;
    }
    @media screen and (min-width: 1910px) {
        width: 1024px;
        padding: 0 0 64px;
    }
`;

export const Date = styled.p`
    width: 100%;
    margin-top: 0;
    margin-bottom: 16px;
    text-align: left;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: var(--white);

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
        font-size: 14px;
        line-height: 28px;
    }

    @media screen and (min-width: 1910px) {
        font-size: 18px;
        line-height: 40px;
    }
`;

export const VideoWrapper = styled.div`
    position: relative;
    width: 336px;
    height: 392px;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 20px;
    background-color: var(--video-bg);

    @media screen and (min-width: 768px) {
        width: 704px;
        height: 574px;
        border-radius: 24px;
        margin-bottom: 32px;
    }

    @media screen and (min-width: 1910px) {
        width: 1024px;
        height: 576px;
        border-radius: 32px;
    }
`;

const imageStyle = css`
    width: 120px;
    height: 80px;
    border-radius: 16px 0 8px;
    
    @media screen and (min-width: 768px) {
        width: 192px;
        height: 128px;
        border-radius: 24px 0 16px;
    }
    @media screen and (min-width: 1910px) {
        border-radius: 32px 0 16px;
    }
`;

export const ImageWrapper = styled.div`
    ${imageStyle};
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;    
`;

export const Poster = styled.img`
    ${imageStyle};
`;

export const PlayButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:hover {
        cursor: pointer;
    }
`;