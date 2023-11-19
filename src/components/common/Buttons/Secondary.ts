import { css } from "styled-components";


export const Secondary = css`
    color: var(--pure-white);
    border: 1px solid var(--pure-white);
    border-radius: 100px;
    transition: all 0.3s ease-out;

    &:hover {
        /* border-width: 2px; */
        outline: 1px solid var(--pure-white);
        cursor: pointer;
    }
    &:active {
        border-color: var(--turquoise-active);
        outline: 0;
    }
`;