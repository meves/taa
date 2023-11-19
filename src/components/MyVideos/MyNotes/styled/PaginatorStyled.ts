import styled, { css } from "styled-components";

export const Pagination = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Pages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const PageNumber = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    transition: all 0.3s ease-in-out;
    color: var(--pure-white);
    
    &:hover {
        cursor: pointer;
        font-weight: 700;
    }

    @media screen and (min-width: 768px) {
        width: 40px;
        height: 40px;
        font-size: 14px;
        line-height: 20px;
    }

    @media screen and (min-width: 1910px) {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
    }
`;

export const SelectedNumber = styled(PageNumber)`
    color: var(--text-dark-blue);
    background-color: var(--accent-turquoise);
    border-radius: 50%;
    padding: 4px 5px;
    pointer-events: none;

    @media screen and (min-width: 768px) {
        padding: 10px;
    }

    @media screen and (min-width: 1910px) {
        padding: 8px;
    }
`;

export const ThreeDots = styled(PageNumber)`
    margin-right: 8px;
    margin-left: 8px;

    &:hover {
        cursor: default
    }
`;

export const StartPageNumber = styled(PageNumber)`
    margin-left: 16px;
`;

export const EndPageNumber = styled(PageNumber)`
    margin-right: 16px;
`;

export const buttons = css`
    display: flex;
    align-items: center;
    border: none;
    background-color: var(--transparent);

    &:hover {
        cursor: pointer;
    }
`;

export const PrevNextButton = styled.button`
    ${ buttons };
`;