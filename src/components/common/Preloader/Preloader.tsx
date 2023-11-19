import React from 'react';
import { v4 as uuidv4 } from "uuid";
import styled from 'styled-components';


const Circle = styled.span`    
    display:  inline-block;
    width:  12px;
    height:  12px;
    margin-right: 6px;
    border-radius: 50%;
    animation-name: circle;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    &:nth-child(1) {
        background-color: yellow;
        animation-delay: 0;
    }
    &:nth-child(2) {
        background-color: red;
        animation-delay: 0.2s;
    }
    &:nth-child(3) {
        background-color: green;
        animation-delay: 0.4s;
    }
    &:nth-child(4) {
        background-color: blue;
        animation-delay: 0.6s;
    }
    &:nth-child(5) {
        background-color: violet;
        animation-delay: 0.8s;
    }
    
    /* animation */
    @keyframes circle {
        from {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        to {
            opacity: 1;
        }
    }    
`;

export const Preloader = () => {
    const circles = Array.from(new Array<number>(5));

    return (
        <div>
            {circles.map(() => ( 
                <Circle key={uuidv4()}></Circle> 
            ))}
        </div>
    )
}

export const PreloaderForModals = () => {
    return (
        <Preloader/>
    )
}

const AppPreloaderWrapper = styled.div`
    position: fixed;
    top: 5%;
    left: 50%;
`;

export const AppPreloader = () => {
    return (
        <AppPreloaderWrapper>
            <Preloader/>
        </AppPreloaderWrapper>
    )
}

const PreloaderForComponentsWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
`;

export const PreloaderForComponents = () => {
    return (
        <PreloaderForComponentsWrapper>
            <Preloader/>
            <p>Идёт загрузка...</p>
        </PreloaderForComponentsWrapper>
    )
}