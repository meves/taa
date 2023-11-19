import React, { ReactNode } from "react"
import styled from "styled-components"


const ModalBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--transparent);
    z-index: 1;
`;

const ModalContainer = styled.div`
    width: 328px;
    background-color: var(--pure-white);
    border-radius: 16px;
    padding: 36px 16px 20px 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: 768px) {
        width: 640px;
        border-radius: 32px;
        padding: 48px 48px 32px 48px;
    }
`;

export const ModalWrapper = ({
    children
} : {
    children: ReactNode
}) => {
    return (
        <ModalBackground>
            <ModalContainer>
                { children }
            </ModalContainer>
        </ModalBackground>
    )
}