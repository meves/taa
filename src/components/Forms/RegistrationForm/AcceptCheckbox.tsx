import { Politics } from "components/common/Buttons/Politics";
import React from "react";import { NavLink } from "react-router-dom";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
        
    @media screen and (min-width: 768px) {
        margin-top: 28px;        
        gap: 16px;
    }
`;

const Checkbox = styled.input`
    appearance: none;
    height: 24px;
    width: 24px;
    border: 1px solid var(--pure-white);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    background-color: var(--transparent);
    
    &:hover {
        cursor: pointer;
    }
    &:checked {
        border-color: var(--purple-hover);
        background-color: var(--purple-hover);
    }
    
    &::after {
        content: "\u2713";
        width: 24px;
        height: 24px;
        font-weight: 900;
        font-size: 18px;
        color: var(--pure-white);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    }
    &:checked::after {
        opacity: 1;
    }
`;

const Label = styled.label`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--pure-white);
    white-space: pre;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

const Text = styled.span`
    
`;

const Link = styled(NavLink)`
    ${Politics};
    color: var(--pure-white);
    text-decoration: none;
`;

export const AcceptCheckbox = React.memo(({
    isChecked,
    handleCheckedOnChange
} : {
    isChecked: boolean
    handleCheckedOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) => {
    const {
        registration: {
            submitAcquainted: { read, agreement, and, policy }
        }
    } = useAppSelector(selectAppText).forms

    return (
        <Wrapper>
            <Checkbox
                type="checkbox"
                id="acquainted"
                name="acquainted"
                checked={isChecked}
                onChange={handleCheckedOnChange}
            />
            <Label htmlFor="acquainted">
                <Text>{read}</Text>
                <Link to="/terms">{agreement}</Link>
                <Text>{and}</Text>
                <Link to="/privacy">{policy}</Link>
            </Label>
        </Wrapper>
    )
})