import React from "react"
import { useAppSelector } from "store/redux-store/libs/hooks"
import { selectAppText } from "store/redux-store/slices/langSlice"
import { LinkButton, Text, Title, Wrapper } from "components/common/InfoPagesWidgets"


export const ServerErrorContainer = () => {
    const { title, text, reload } = useAppSelector(selectAppText).errorPages.error_500

    return (
        <Wrapper>
            <Title>{ title }</Title> 
            <Text>{ text }</Text>
            <LinkButton to="/" reloadDocument >{ reload }</LinkButton>
        </Wrapper>
    )
}