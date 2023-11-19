import React from "react"
import { FAQPageContainer } from "../../components/FAQ/FAQ"
import { AppLayout } from "components/app/Layouts/AppLayout"
import { TemporaryMark } from "components/app/TemporaryMark"
import styled from "styled-components"
import { MainContainer } from "components/app/Containers/MainContainer"


const PageWrapper = styled.main`
    margin: 0 auto;
    max-width: 1152px;
    width: 100%;
    padding-top: 64px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1199px) {
        padding-top: 32px;      
    }

    @media screen and (max-width: 767px) {
        padding-top: 16px;      
    }
`;

const FAQPage = () => {
    return (
        <AppLayout showFooter>
            <TemporaryMark text={'FAQPage'} />
            <MainContainer>
                <PageWrapper>
                    <FAQPageContainer/>
                </PageWrapper>
            </MainContainer>
        </AppLayout>
    )
}

export default FAQPage