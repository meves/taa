import { css } from "styled-components";


export const linkButtons = css`
    padding: 12px 40px;
    border: 1px solid var(--white);
    border-radius: 72px;
    background-color: var(--transparent);
    color: var(--white);
    font-family: var(--open-sans);
    font-weight: 400;
    font-size: 20px;
    line-height: 1.35;
    text-decoration: none;
    transition: all 0.15s ease-in-out;
    
    &:hover {
        cursor: pointer;
        background-color: var(--blue-cookie-hover);
        border-color: transparent;
    }
    
    @media screen and (max-width: 675px) {
        font-size: 16px;
        padding: 9px 32px;
    }
`;

export const buttons = css`
    text-align: center;
    padding: 12px 40px;
    border: none;
    border-radius: 72px;
    background-color: var(--blue-cookie);
    color: var(--white);
    font-family: var(--open-sans);
    font-weight: 400;
    font-size: 20px;
    line-height: 1.35;
    text-decoration: none;
    transition: all 0.15s ease-in-out;
    
    &:hover {
        background-color: var(--blue-cookie-hover);
        cursor: pointer;
    }

    @media screen and (max-width: 675px) {
        font-size: 16px;
        padding: 9px 32px;
    }
`;

export const testVideoButtons = css`
    width: 100%;
    padding: 12px 0;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    @media screen and (min-width: 768px) {
        padding: 16px 40px;
        height: 56px;
    }
`;
