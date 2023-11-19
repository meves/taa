import React from "react"
import { useAppSelector } from 'store/redux-store/libs/hooks'
import { selectAppText } from 'store/redux-store/slices/langSlice'
import { LinkButton, Text, Title, Wrapper } from "../common/InfoPagesWidgets"


export const NotActivatedContainer = () => {
    const { title, text, link } = useAppSelector(selectAppText).informationPages.notActivated

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <LinkButton to="/registration" reloadDocument >{link}</LinkButton>
        </Wrapper>
    )
}