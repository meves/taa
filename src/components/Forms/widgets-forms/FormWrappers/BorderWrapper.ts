import styled from "styled-components";


export const BorderWrapper = styled.div`
    padding: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: 336px;

    @media screen and (min-width: 768px) {
        background: var(--border-wrapper);
        border-radius: 56px;
        width: 640px;
    }
`;
