import React, { ReactNode } from "react"
import styled from "styled-components"


const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    padding: 104px 12px 120px 12px;

    @media screen and (min-width: 768px) {
        padding: 104px 40px 140px 40px;
    }
    @media screen and (min-width: 1200px) {
        padding: 80px 84px 180px 84px;
    }
    @media screen and (min-width: 1440px) {
        padding: 112px 112px 220px 112px;
    }
    @media screen and (min-width: 1910px) {
        padding: 128px 164px 280px 164px;
    }
`;

export const HomePageContainer = ({
    children
} : {
    children: ReactNode
}) => {
    return (
        <Wrapper>
            { children }
        </Wrapper>
    )
}
