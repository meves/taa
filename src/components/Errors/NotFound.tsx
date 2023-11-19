import React from "react"
import { LinkButton, NotFoundText, NotFoundTitle, Wrapper } from "components/common/InfoPagesWidgets"
import { useAppSelector } from "store/redux-store/libs/hooks"
import { selectAppText } from "store/redux-store/slices/langSlice"


export const NotFoundContainer = () => {
    const { title, text, goToMain } = useAppSelector(selectAppText).errorPages.error_400 

    return (
        <Wrapper>
            <NotFoundTitle>{ title }</NotFoundTitle>
            <NotFoundText>{ text }</NotFoundText>
            <LinkButton to="/">{ goToMain }</LinkButton>            
        </Wrapper>
    )
}