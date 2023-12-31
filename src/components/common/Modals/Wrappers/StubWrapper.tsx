import React, { ReactNode } from "react";
import styled from "styled-components";


const StunBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black-transparent70);
`;

const StubContainer = styled.div`
    background-color: var(--pure-white);
    box-shadow: 0px 0px 25px var(--black-transparent15);
    border-radius: 10px; 
    box-sizing: border-box;
    width: 630px;
    padding: 40px 40px 40px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const StubWrapper  = ({
    children
} : {
    children: ReactNode
}) => {
    return (
        <StunBackground>
            <StubContainer>
                { children }
            </StubContainer>
        </StunBackground>
    )
}