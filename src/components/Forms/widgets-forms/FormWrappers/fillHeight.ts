import { css } from "styled-components";


export const fillHeight = css`
    min-height: calc(100vh - 81px);
    
    @media screen and (min-width: 1910px) {
        min-height: calc(100vh - 97px);
    }
`;