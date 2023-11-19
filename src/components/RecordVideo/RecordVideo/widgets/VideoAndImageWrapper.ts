import styled from "styled-components";


export const VideoAndImageWrapper = styled.div<{isFocus: boolean}>`
    width: 336px;
    border-radius: 16px;
    background-color: var(--video-bg);

    @media screen and (min-width: 768px) {
        width: ${props => props.isFocus ? "704px" : "462px"};
        height: ${props => props.isFocus ? "396px" : "260px"};
        border-radius: 24px;
    }

    @media screen and (min-width: 1200px) {
        width: ${props => props.isFocus ? "640px" : "320px"};
        height: ${props => props.isFocus ? "360px" : "320px"};
        border-radius: 20px;
    }

    @media screen and (min-width: 1910px) {
        width: ${props => props.isFocus ? "1024px" : "512px"};
        height: ${props => props.isFocus ? "576px" : "512px"};
        border-radius: 32px;
    }
`;