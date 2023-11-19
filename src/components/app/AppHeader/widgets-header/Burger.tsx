import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks";
import { selectMenuIsOpen, setMenuIsOpen } from "store/redux-store/slices/uiSlice";
import styled from "styled-components";


const Wrapper = styled.div<{$open: boolean}>`
    width: 24px;
    height: 24px;
    margin-left: auto;
    transform: ${props => props.$open ? "rotate(90deg)" : "rotate(0deg)"};
    &:hover {
        cursor: pointer;        
    }
    @media screen and (min-width: 1200px) {
        display: none;
    }
`;

const BurgerButton = styled.div`
    width: 24px;
    height: 1px;
    background-color: var(--pure-white);
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s ease-in;

    &:before, &:after {
        width: 24px;
        height: 1px;
        background-color: var(--pure-white);
        content: "";
        position: absolute;
        top: -6px;
    }
    &:after {
        top: 6px;
    }
`;

export const Burger = () => {
    const isOpen = useAppSelector(selectMenuIsOpen)
    const dispatch = useAppDispatch()

    const handleToggleClassOnBurgerButtonOnClick = useCallback(() => {
        dispatch(setMenuIsOpen(isOpen ? false : true))
    }, [dispatch, isOpen])

    return (
        <Wrapper 
            onClick={handleToggleClassOnBurgerButtonOnClick}
            $open={isOpen}
        >
            <BurgerButton/>
        </Wrapper>
    )
}