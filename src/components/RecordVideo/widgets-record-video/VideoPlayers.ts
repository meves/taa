import styled, { css } from "styled-components";


const videoPlayer = css`
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 16px;    

    @media screen and (min-width: 768px) {
        border-radius: 16px;
    }
        @media screen and (min-width: 1910px) {
        border-radius: 32px;
    }
`;

export const WatchVideoPlayer = styled.video`
    ${videoPlayer};
    display: ${props => props.autoPlay ? "block" : "none"};
    object-fit: contain;
    width: 100%;
`;

export const TestVideoPlayer = styled.video`
    ${videoPlayer};
`;

export const RecordVideoPlayer = styled.video`
    ${videoPlayer};    
`;