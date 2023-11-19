import React from "react";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled, { css } from "styled-components";
import { LangSwitch } from "../widgets-header/LangSwitch";
import { Primary } from "components/common/Buttons/Primary";
import { Secondary } from "components/common/Buttons/Secondary";
import { selectIsAuth } from "store/redux-store/slices/authSlice";
import { NavLink } from "react-router-dom";


const NavBar = styled.nav`
    display: none;

    @media screen and (min-width: 1200px) {
        width: 100%;
        display: flex;
        max-height: 50px;
    }
`;

const LangWrapper = styled.div`
    @media screen and (min-width: 769px) {
        margin-left: auto;     
    }
`;

const menuButtonStyles = css`
    padding: 13px 32px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    text-decoration: none;

    @media screen and (min-width: 1440px) {
        font-size: 16px;
        line-height: 24px;
        margin-left: 51px;
    }
    @media screen and (min-width: 1910px) {
        margin-left: 56px;
    }
`;

const FaqButton = styled(NavLink)`
    ${Secondary};
    ${menuButtonStyles};
    margin-left: 42px;
    display: flex;
    align-items: center;

    @media screen and (min-width: 1440px) {
        margin-left: 51px;
        font-size: 16px;
        line-height: 24px;
    }
    @media screen and (min-width: 1910px) {
        margin-left: 56px;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    
    @media screen and (min-width: 1440px) {
        margin-left: 32px;
    }
`;

const LoginButton = styled(NavLink)`
    ${menuButtonStyles};
    ${Primary};
    font-weight: 600;
    
    @media screen and (min-width: 1200px) {
        width: 108px;
    }

    @media screen and (min-width: 1440px) {
        font-size: 16px;
        line-height: 24px;
        width: 115px;
    }
`;

const PrivateAreaButton = styled(NavLink)`
    ${menuButtonStyles};
    ${Primary};
`;

export const Menu = () => {
    const isAuth: boolean = useAppSelector(selectIsAuth)
    const { faq, login, lk } = useAppSelector(selectAppText).header
    return (
        <NavBar>
            <FaqButton to="/faq">{faq}</FaqButton>
            <LangWrapper>
                <LangSwitch />
            </LangWrapper>
            <Buttons>
                {isAuth
                    ? <PrivateAreaButton to="/lk">{lk}</PrivateAreaButton>
                    : <LoginButton to="/login">{login}</LoginButton>
                }
            </Buttons>
        </NavBar>
    )
}

