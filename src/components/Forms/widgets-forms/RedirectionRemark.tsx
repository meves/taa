import { Politics } from "components/common/Buttons/Politics";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;    
    margin-top: 24px;
    white-space: pre-wrap;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
        white-space: nowrap;
    }
`;

const Text = styled.span`
    color: var(--pure-white);
`;

const TextLink = styled(NavLink)`
    ${Politics};
    color: var(--pure-white);
    text-decoration: none;
    cursor: pointer;
`;

export const RedirectionRemark = React.memo(({
    to,
    redirectionText
} : {
    to: string
    redirectionText: { text: string, moveTo: string, page: string }
}) => {
    const { text, moveTo, page } = redirectionText

    return (
        <Wrapper>
            <Text>{text}</Text>
            <TextLink to={to}>{moveTo}</TextLink>
            <Text>{page}</Text>
        </Wrapper>
    )
})