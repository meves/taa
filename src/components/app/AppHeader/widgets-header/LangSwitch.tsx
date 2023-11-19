import React, { MouseEvent, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks";
import { selectLanguage, setCurrentLanguageThunk } from "store/redux-store/slices/langSlice";
import { setMenuIsOpen } from "store/redux-store/slices/uiSlice";
import { Languages } from "store/redux-store/libs/types";
import styled, { css } from "styled-components";


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    padding: 16px 8px;
`;

const langs = css`
    font-size: 16px;
    line-height: 24px;    
`;

const RU = styled.div<{$lang: boolean}>`
    ${langs};
    font-weight: ${props => props.$lang ? "600" : "400"};
    color: ${props => props.$lang ? "var(--pure-white)" : "var(--grey)"} ;
    border-bottom: ${props => props.$lang ? "1px solid var(--pure-white)" : "1px solid var(--transparent)"};

    &:hover {
        cursor: pointer;
    }
`;

const EN = styled.div<{$lang: boolean}>`
    ${langs};
    font-weight: ${props => props.$lang ? "600" : "400"};
    color: ${props => props.$lang ? "var(--pure-white)" : "var(--grey)"} ;
    border-bottom: ${props => props.$lang ? "1px solid var(--pure-white)" : "1px solid var(--transparent)"};

    &:hover {
        cursor: pointer;
    }
`;

export const LangSwitch = () => {
    const currentLanguage = useAppSelector(selectLanguage)
    const dispatch = useAppDispatch()

    const setLanguageOnClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        const lang = event.currentTarget.dataset.lang as Languages        
        dispatch(setCurrentLanguageThunk(lang))
        dispatch(setMenuIsOpen(false))
    }, [dispatch])

    return (
        <Wrapper>
            <RU 
                data-lang={Languages.RU}
                onClick={setLanguageOnClick}
                $lang={currentLanguage === Languages.RU}
            >RU
            </RU>
            <EN 
                data-lang={Languages.EN}
                onClick={setLanguageOnClick}
                $lang={currentLanguage === Languages.EN}
            >EN
            </EN>
        </Wrapper>
    )
}