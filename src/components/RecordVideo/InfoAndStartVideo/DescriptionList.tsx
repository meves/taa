import React from "react"
import { numberOfListPosition, numberOfListStyles } from "components/common/Number";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled from "styled-components";


const List = styled.ol`
    margin: 0 auto;
    width: 336px;
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;

    @media screen and (min-width: 768px) {
        gap: 32px;
        width: 100%;
    }
`;

const Item = styled.li`
    display: flex;
    position: relative;
`;

const Number = styled.p`
    ${numberOfListStyles    };    
    ${numberOfListPosition};    
    margin: 0;
    font-size: 56px;
    line-height: 1;

    @media screen and (min-width: 1910px) {
        font-size: 80px;
    }
`;

const Text = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    color: var(--pure-white);
    padding-left: 48px;
    white-space: pre-wrap;

    @media screen and (min-width: 768px) {
        padding-left: 64px;
    }

    @media screen and (min-width: 1910px) {
        font-size: 18px;
        line-height: 40px;
    }
`;

export const DescriptionList = () => {
    const listItems = useAppSelector(selectAppText).videos.info.description

    return (
        <List>
            { listItems.map(item => (
                <Item key={item.id}> 
                    <Number>{ item.id }</Number>
                    <Text>{ item.text }</Text>
                </Item>                    
            )) }
        </List>
    )
}