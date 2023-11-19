import { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks"
import { acceptCookiesThunk } from "store/redux-store/slices/cookieSlice"
import { selectAppText } from "store/redux-store/slices/langSlice"
import { setModalClose } from "store/redux-store/slices/modalSlice"
import styled from "styled-components"


const CookieWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 336px;
    margin: 0 auto;
    border-radius: 8px;
    padding: 12px 16px;
    background-color: var(--pure-white);
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media screen and (min-width: 768px) {
        width: 704px;
        border-radius: 16px;
        padding: 16px 32px;
        gap: 16px;
    }
    
    @media screen and (min-width: 1910px) {
        flex-direction: row;
        width: 1175px;
    }
`;

const CookieText = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--text-dark-blue);

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

const CoockieButton = styled.button`
    width: 288px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 1px solid var(--text-dark-blue);
    padding-top: 16px;
    padding-bottom: 16px;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: var(--text-dark-blue);
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        border-width: 2px;
    }

    @media screen and (min-width: 768px) {
        width: 225px;
        margin-left: auto;
        margin-right: auto;
        font-size: 16px;
        line-height: 24px;
        padding: 12px 50px;
    }
`;

export const CookieContent = () => {
    const dispatch = useAppDispatch()

    const {
        cookie, buttons: { acceptCookie }
    } = useAppSelector(selectAppText).modals

    const handleSetIsCookieOpenOnClick = useCallback(() => {
        dispatch(acceptCookiesThunk(true))
        dispatch(setModalClose('cookie'))
    }, [dispatch])

    return (
        <CookieWrapper>
            <CookieText>{ cookie.text }</CookieText>
            <CoockieButton
                onClick={handleSetIsCookieOpenOnClick}
            >{ acceptCookie }
            </CoockieButton>
        </CookieWrapper>
    )
}
