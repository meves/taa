import { css } from "styled-components";


export const Primary = css`
    color: var(--text-dark-blue);
    background-color: var(--turquoise);
    border: none;
    border-radius: 100px;
    transition: all 0.3s ease-out;

    &:hover {
        cursor: pointer;
        background-color: var(--turquoise-hover);
    }
    &:active {
        background-color: var(--turquoise-active);
    }
`;