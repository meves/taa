import React from "react";
import { Primary } from "components/common/Buttons/Primary";
import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;

    @media screen and (min-width: 768px) {
        margin-top: 56px;
    }
`;

const Button = styled.button`
    ${Primary};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    opacity: ${props => props.disabled ? "0.5" : "1"};
    padding: 16px 60px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: var(--text-dark-blue);
    flex: 0.5;

    &:hover {
        background-color: ${props => props.disabled ? "var(--turquoise)" : "var(--turquoise-hover)"};
    }
    &:active {
        background-color: ${props => props.disabled ? "var(--turquoise)" : "var(--turquoise-active)"};
    }
`;

export const SubmitFormButton = React.memo(({
    text,
    isDisabled,
    className
} : {
    text: string
    isDisabled: boolean,
    className?: string
}) => {
    return (
        <Wrapper
            className={className}        
        >
            <Button
                type="submit"
                disabled={isDisabled}
            >{ text }
            </Button>
        </Wrapper>
    )
})