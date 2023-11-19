import { fillHeight } from "components/Forms/widgets-forms/FormWrappers/fillHeight";
import { Secondary } from "components/common/Buttons/Secondary";
import { NavLink } from "react-router-dom";
import styled from "styled-components"


export const InfoPageWrapper = styled.section`
    ${fillHeight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
`;

export const Wrapper = styled.div`
    color: var(--pure-white);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 336px;
    background-color: var(--app-background);
    border-radius: 56px;

    @media screen and (min-width: 768px) {
        width: 640px;
        padding: 56px 80px 32px;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    white-space: pre-wrap;

    @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 40px;
    }
`;

export const Text = styled.p`
    margin: 24px 0 48px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    white-space: pre-wrap;

    @media screen and (min-width: 768px) {
        margin: 32px 0 56px;
        font-size: 18px;
        line-height: 40px;
    }
`;

export const LinkButton = styled(NavLink)`
    ${Secondary};
    display: block;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    padding: 16px 0;
    width: 288px;

    @media screen and (min-width: 768px) {
        width: 225px;
    }
`;

export const NotFoundTitle = styled(Title)`
    @media screen and (min-width: 768px) {
        white-space: nowrap;
    }
`;

export const NotFoundText = styled(Text)`
    @media screen and (min-width: 768px) {
        white-space: nowrap;
    }
`;