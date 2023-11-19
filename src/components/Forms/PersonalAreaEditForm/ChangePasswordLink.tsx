import React from "react";
import { Politics } from "components/common/Buttons/Politics";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
    margin-top: 28px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

const Text = styled.span`
`;

const ChangeLink = styled(NavLink)`
    ${Politics};
    color: var(--pure-white);
    text-decoration: none;
    height: 26px;
`;

export const ChangePasswordLink = ({
    wrapper
} : {
    wrapper?: string
}) => {
    const { password, changePassword } = useAppSelector(selectAppText).forms.lk.redirectionText

    return (
        <Wrapper className={wrapper}>
            <Text>{password}</Text>
            <ChangeLink to="/change_password">{changePassword}</ChangeLink>
        </Wrapper>
    )
}

export const PersonalAreaChangePasswordLink = styled(ChangePasswordLink)`
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