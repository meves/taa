import React from "react";
import styled from "styled-components";
import { AppLogo } from "./widgets-header/AppLogo";
import { Burger } from "./widgets-header/Burger";
import { Menu } from "./Menu/Menu";
import { MobileMenu } from "./Menu/MobileMenu";


const HeaderWrapper = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 16px 12px;
    position: fixed;
    z-index: 2;
    top: 0;
    width: 360px;
    background-color: var(--app-background);

    @media screen and (min-width: 768px) {
        padding-left: 40px;
        padding-right: 40px;
        width: 768px;
    }
    @media screen and (min-width: 1200px) {
        padding: 16px 84px;
        width: 1192px;
    }
    @media screen and (min-width: 1440px) {
        padding: 12px 112px;
        width: 1432px;
    }
    @media screen and (min-width: 1910px) {
        padding: 20px 164px;
        width: 1912px;
    }
`;

export const AppHeader = () => {
    return (
        <HeaderWrapper>
            <AppLogo />
            <Menu />
            <Burger />
            <MobileMenu />
        </HeaderWrapper>
    )
}