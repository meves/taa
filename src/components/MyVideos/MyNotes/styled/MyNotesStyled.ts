import styled from "styled-components";


export const MyNotesWrapper = styled.section`
    width: 336px;
    margin: 0 auto;
    position: relative;    

    @media screen and (min-width: 768px) {
        width: 640px;
        padding-top: 32px;
    }

    @media screen and (min-width: 1200px) {
        width: 1056px;
    }

    @media screen and (min-width: 1440px) {
        width: 1210px;
    }

    @media screen and (min-width: 1910px) {
        width: 1600px;
        padding-top: 64px;
        padding-bottom: 80px;
    }
`;

export const VideoContainer = styled.div`
    width: 100%;

    position: relative;
`;

export const MyNotesVideos = styled.div<{$videos: boolean}>`
    padding-bottom: 100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    @media (min-width: 768px) {
        padding-bottom: 172px;

        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 32px;
    }
    @media (min-width: 1910px) {
        padding-bottom: 0;

        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: auto;
        overflow-y: visible;
    }
`;

export const VideoCard = styled.div`
    &:hover img {
        opacity: 0.85;
    }
`;

export const VideoFigure = styled.figure`
    display: block;
    margin: 0;
    position: relative;
    max-width: 160px;
    aspect-ratio: 1 / 1.066;

    @media screen and (min-width: 768px) {
        max-width: 200px;
    }

    @media screen and (min-width: 1200px) {
        max-width: 240px;
    }

    @media screen and (min-width: 1440px) {
        max-width: 280px;
    }

    @media screen and (min-width: 1910px) {
        max-width: 240px;
    }

    &:hover {
        cursor: pointer;
    }
`;

export const VideoImage = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 12px;
    
    @media screen and (min-width: 768px) {
        border-radius: 16px;
    }
`;

export const VideoNote = styled.figcaption`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: 400;
    font-size: 8px;
    line-height: 16px;
    color: var(--text-dark-blue);
    background-color: var(--pure-white-stroke);
    padding: 8px 12px;
    height: 32px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    @media screen and (min-width: 768px) {
        font-size: 12px;
        line-height: 24px;
        height: 56px;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
    }

    @media screen and (min-width: 1910px) {
        padding: 12px 32px;
        height: 48px;
    }
` ;

export const VideoDate = styled.p`
    margin: 8px 0 0 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--pure-white);

    @media (min-width:768px) {
        margin-top: 12px;
        font-size: 14px;
        line-height: 1.2;
    }

    @media (min-width:1910px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

export const PaginatorWrapper = styled.div`
    position: fixed;
    bottom: 32px;
    width: calc(360px - 12px * 2);
    left: calc(50% - 360px / 2 + 12px);

    padding: 16px 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--background-button-hover);
    border-radius: 10000px;

    & > div {
        margin-top: 0;
    }
    
    @media screen and (min-width: 768px) {
        bottom: 56px;
        width: calc(512px - 20px * 2);
        left: calc(50% - 512px / 2 + 20px);
    }

    @media screen and (min-width: 1910px) {
        position: absolute;
        bottom: -158px;
    }
`;