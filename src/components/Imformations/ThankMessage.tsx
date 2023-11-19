import React from "react"
import { useAppSelector } from "store/redux-store/libs/hooks"
import { selectAppText } from "store/redux-store/slices/langSlice"
import { LinkButton, Text, Title, Wrapper } from "../common/InfoPagesWidgets"


export const ThankMessage = () => {
    const { title, text, link } = useAppSelector(selectAppText).informationPages.thankForRegistration

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <LinkButton to="/">{link}</LinkButton>
        </Wrapper>
    )
}