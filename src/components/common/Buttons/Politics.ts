import { css } from "styled-components";


export const Politics = css`
    border-bottom: 1px solid var(--pure-white);
    transition: all 0.3s ease-out;
    
    &:hover {
        cursor: pointer;
        border-bottom-width: 2px;
    }
    &:active {
        border-bottom-color: var(--turquoise-active);
    }
`;