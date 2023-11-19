import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    position: relative;
    margin-top: 24px;
    width: 100%;
    
    @media screen and (min-width: 768px) {
        margin-top: 40px;
    }
    @media screen and (min-width: 1200px) {
        margin-top: 28px;
    }
    @media screen and (min-width: 1910px) {
        margin-top: 40px;
    }
`;

export const InputWrapper = ({
    children,
    wrapper
} : {
    children: React.ReactNode
    wrapper?: string
}) => {
    return (
        <Wrapper className={wrapper}>
            { children }
        </Wrapper>
    )
}

export const PersonalAreaInputWrapper = styled(InputWrapper)`
    @media screen and (min-width: 1200px) {
        wrapper {
            margin-top: 20px;
        }
    }
    @media screen and (min-width: 1910px) {
        wrapper {
            margin-top: 28px;
        }
    }
`;