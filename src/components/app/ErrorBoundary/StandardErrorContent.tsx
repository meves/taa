import React from "react"
import { NavLink } from "react-router-dom"
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled from "styled-components"


const LinkWrapper = styled(NavLink)`
    display: inline-block;
    padding: 15px 30px;
    margin-top: 20px;
    border-radius: 20px;
    border: none;
    outline: none;
    text-transform: uppercase;
    font-weight: 700;
    background-color: var(--blue-border);
    color: var(--white);
    text-decoration: none;
`;

export const StandardErrorContent = () => {
    const { text, button } = useAppSelector(selectAppText).errorBoundary.standardErrorContent

    return (
        <div>
            <p>{text}</p>
            <LinkWrapper to="/">{button}</LinkWrapper>
        </div>
    )
}