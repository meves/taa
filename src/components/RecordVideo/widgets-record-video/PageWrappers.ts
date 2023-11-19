import styled from "styled-components"


export const TestVideoPageWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 12px 28px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        padding: 44px 32px 74px;
    }
    @media screen and (min-width: 1910px) {
        padding: 96px 0 160px;
    }
`;


export const RecordVideoPageWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    padding: 0 12px 8px;

    @media screen and (min-width: 768px) {
        gap: 32px;
        padding: 32px 32px 56px;
    }
    @media screen and (min-width: 1200px) {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        gap: 64px;
        padding: 48px 88px 92px;
        width: 1024px;
        margin: 0 auto;
    }
    @media screen and (min-width: 1910px) {
        padding: 96px 160px 160px;
        width: 1600px;
    }
`;