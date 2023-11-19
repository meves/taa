import { Politics } from "components/common/Buttons/Politics";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;    
    justify-content: flex-start;    
    margin-bottom: 4px;
    margin-top: 20px;

    & > div {
        margin-top: 0;
        margin-bottom: 0;
    }
`;

const ForgetPasswordLink = styled(NavLink)`
    ${Politics};
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--pure-white);
    margin-left: auto;
`;

export const LabelWrapper = React.memo(({
    children
} : {
    children: React.ReactNode
}) => {
    const { forgetPassword } = useAppSelector(selectAppText).forms.login

    return (
        <Wrapper>
            { children }
            <ForgetPasswordLink to="/forget_password">{forgetPassword}</ForgetPasswordLink>
        </Wrapper>
    )
})