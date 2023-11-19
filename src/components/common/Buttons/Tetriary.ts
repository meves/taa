import styled from "styled-components";

export const Tetriary = styled.p`
    font-weight: 400;
    color: var(--pure-white);

    &:hover {
        font-weight: 600;
        cursor: pointer;
    }
    &:active {
        color: var(--turquoise-active);
    }
`;