import React, { useCallback } from "react";
import { Primary } from "components/common/Buttons/Primary";
import { Secondary } from "components/common/Buttons/Secondary";
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks";
import { selectIsAuth } from "store/redux-store/slices/authSlice";
import { selectAppText } from "store/redux-store/slices/langSlice";
import { selectMenuIsOpen, setMenuIsOpen } from "store/redux-store/slices/uiSlice";
import styled, { css } from "styled-components";
import { LangSwitch } from "../widgets-header/LangSwitch";
import { Politics } from "components/common/Buttons/Politics";
import { NavLink } from "react-router-dom";


const NavBar = styled.nav`
    padding: 52px 28px 26px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--app-background);
    z-index: 10;
    border-bottom: 1px solid var(--mobile-menu-bottom);

    /* @media screen and (min-width: 680px) { */
    @media screen and (min-width: 768px) {
        padding: 52px 56px 16px 40px;
    }

    @media screen and (min-width: 1200px) {
        display: none;
    }
`;

const Buttons = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 76px;

    /* @media screen and (min-width: 680px) { */
    @media screen and (min-width: 768px) {
        margin-bottom: 48px;
    }
`;

const buttonStyle = css`
    width: 100%;     
    text-align: center;
    text-decoration: none;
    font-weight: 400;    
    font-size: 14px;
    line-height: 20px;
`;

const FaqButton = styled(NavLink)`
    ${Secondary};
    ${buttonStyle};
    padding: 14px 40px;
`;

const LoginButton = styled(NavLink)`
    ${Primary};
    ${buttonStyle};
    color: var(--text-dark-blue);
    padding: 14px 74px;
    font-weight: 600;
`;

const PrivateAreaButton = styled(NavLink)`
    ${Secondary};
    ${buttonStyle};
    padding: 14px 39px;
`;

const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > div {
        flex-direction: column;
        padding: 8px 16px;
        gap: 20px;

        /* @media screen and (min-width: 680px) { */
        @media screen and (min-width: 768px) {
            flex-direction: row;
            padding: 16px 8px;
            gap: 32px;
        }
    }
`;

const Legals = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: end;
    gap: 28px;

    /* @media screen and (min-width: 680px) { */
    @media screen and (min-width: 768px) {
        gap: 36px;
    }
`;

const legalPages = css`
    color: var(--pure-white);
    text-decoration: none;
`;

const Policy = styled(NavLink)`
    ${Politics};
    ${legalPages};
`;

const Agreement = styled(NavLink)`
    ${Politics};
    ${legalPages};
`;

export const MobileMenu = () => {
    const isOpen: boolean = useAppSelector(selectMenuIsOpen)
    const isAuth: boolean = useAppSelector(selectIsAuth)

    const { faq, lk, login } = useAppSelector(selectAppText).header
    const { privacy, terms } = useAppSelector(selectAppText).footer

    const dispatch = useAppDispatch()

    const handleCloseMenuOnClick = useCallback(() => {
        dispatch(setMenuIsOpen(false))
    }, [dispatch])

    if (!isOpen) {
        return null
    }
    return (
        <NavBar>
            <Buttons>
                <FaqButton onClick={handleCloseMenuOnClick} to="/faq">{faq}</FaqButton>
                {isAuth
                    ? <PrivateAreaButton onClick={handleCloseMenuOnClick} to="/lk">{lk}</PrivateAreaButton>
                    : <LoginButton onClick={handleCloseMenuOnClick} to="/login">{login}</LoginButton>
                }
            </Buttons>
            <Footer>
                <LangSwitch />
                <Legals onClick={handleCloseMenuOnClick}>
                    <Policy to="/privacy">{privacy}</Policy>
                    <Agreement to="/terms">{terms}</Agreement>
                </Legals>
            </Footer>
        </NavBar>
    )
}