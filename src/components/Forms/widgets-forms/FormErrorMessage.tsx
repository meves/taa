import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    font-weight: 400;
    font-size: 8px;
    line-height: 16px;
    color: var(--accent-red);

    @media screen and (min-width: 768px) {
        font-size: 12px;
        line-height: 24px;
    }
`;

export const FormErrorMessage = React.memo(({
    errorMessage,
    visited,
    error
} : {
    errorMessage: string
    visited: boolean
    error: string
}) => {

    if (!visited || !error) {
        return null 
    }
    return <Wrapper>{errorMessage}</Wrapper>
})