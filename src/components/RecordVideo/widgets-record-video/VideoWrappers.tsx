import styled from "styled-components";


export const TestVideoWrapper = styled.main`
    width: 288px;    

    @media screen and (min-width: 768px) {
        width: 704px;
    }
    @media screen and (min-width: 1910px) {
        width: 1024px;
    }
`;

export const VideoPlayerWrapper = styled.div`
    height: 512px;
    position: relative;
    background-color: var(--video-bg);
    border-radius: 16px;

    @media screen and (min-width: 768px) {
        width: 704px;
        height: 702px;
        border-radius: 16px;
    }
    @media screen and (min-width: 1910px) {
        width: 1024px;
        height: 578px;
        border-radius: 32px;
    }
`;