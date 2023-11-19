import React, { useCallback } from "react";
import { TalkAboutAll } from "components/common/Texts/TalkAboutAll";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks";
import { selectMenuIsOpen, setMenuIsOpen } from "store/redux-store/slices/uiSlice";
import styled from "styled-components";


const Wrapper = styled.div`
    
    &:hover {
        cursor: pointer;
    }

    & > div:first-child > span {        
        font-size: 14px;
    }
    & > div:first-child > span::first-letter {        
        font-size: 20px;
    }
    @media screen and (min-width: 1200px) {
        & > div:first-child > span {        
            font-size: 20px;
        }
        & > div:first-child > span::first-letter {        
            font-size: 28px;
        }
    }
    @media screen and (min-width: 1440px) {
        & > div:first-child > span {        
            font-size: 24px;
            line-height: 40px;
        }
        & > div:first-child > span::first-letter {        
            font-size: 32px;
        }
    }
`;


export const AppLogo = () => {
    const menuIsOpen = useAppSelector(selectMenuIsOpen)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleRedirectToHomePageOnClick = useCallback(() => {
        if (menuIsOpen) {
            dispatch(setMenuIsOpen(false))
        }
        navigate("/")
    }, [menuIsOpen, dispatch, navigate])

    return (
        <Wrapper onClick={handleRedirectToHomePageOnClick}>
            <TalkAboutAll/>
        </Wrapper>
    )
}