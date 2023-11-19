import React, { ReactNode } from "react"
import styled from "styled-components";
import { AppHeader } from "../AppHeader/AppHeader";
import { AppFooter } from "../AppFooter/AppFooter";
import { marginTop } from "components/common/marginTop";


const Wrapper = styled.div`
    width: 100%;
    background-color: var(--app-background);
`;

const MarginTop = styled.div`
    ${marginTop};
`

export const AppLayout = ({
    children,
    showFooter
}: {
    children: ReactNode
    showFooter?: boolean
}) => {
    return (
        <Wrapper>
            <AppHeader />
            <MarginTop>
                {children}
                { showFooter ? <AppFooter /> : null }
            </MarginTop>
        </Wrapper>
    )
}