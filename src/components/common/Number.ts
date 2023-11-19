import { css } from "styled-components";

export const numberOfListStyles = css`
    font-family: var(--IBM-Plex-Sans);
    font-weight: 700;
    background-color: #21D6CC;
    background-image: var(--number-color);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.1;

    @-moz-document url-prefix() {        
        opacity: 0.3;
    }
`;

export const numberOfListPosition = css`
    position: absolute;
    top: 0;
    left: 0;
`;