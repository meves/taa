import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectIsAuth } from "store/redux-store/slices/authSlice";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled from "styled-components";


const Button = styled(NavLink)`
    font-family: var(--IBM-Plex-Sans);
    color: var(--pure-white);
    text-decoration: none;
    text-transform: uppercase;
    padding: 28px 72px;
    text-align: center;
    background-color: var(--accent-purple);
    border-radius: 100px;
    transition: all 0.3s ease-out;

    &:hover {
        cursor: pointer;
        background-color: var(--purple-hover);
    }
    &:active {
        background: linear-gradient(295.62deg, #21D6CC 6.31%, #9B53D9 89.7%);
    }
`;

export const StartButton = () => {
    const isAuth = useAppSelector(selectIsAuth)
    const { start } = useAppSelector(selectAppText).homePage.buttons

    return (
        <Button to={isAuth ? "/start" : "/registration"}>
            { start }
        </Button>
    )
}