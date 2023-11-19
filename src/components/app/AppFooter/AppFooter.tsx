import React from "react";
import { TalkAboutAll } from "components/common/Texts/TalkAboutAll";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled, { css } from "styled-components";
import { Politics } from "components/common/Buttons/Politics";
import { NavLink } from "react-router-dom";


const FooterWrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 99px;
    padding: 8px 28px 40px 12px;

    & > div:first-child > div:first-child {        
        font-size: 14px;
    }
    & > div:first-child > div:first-child > div::first-letter {        
        font-size: 20px;
    }
    @media screen and (min-width: 768px) {
        padding: 16px 56px 16px 40px;
        gap: 281px;
    }
    @media screen and (min-width: 1200px) {
        padding: 14px 100px 10px 84px;
        gap: 410px;
        & > div:first-child > div:first-child {        
            font-size: 20px;                    
        }
        & > div:first-child > div:first-child > div::first-letter {        
            font-size: 28px;            
        }
    } 
    @media screen and (min-width: 1440px) {
        padding: 16px 144px 16px 112px;
        gap: 467px;
        & > div:first-child > div:first-child {        
            font-size: 24px;  
            line-height: 40px;                  
        }
        & > div:first-child > div:first-child > div::first-letter {        
            font-size: 32px;  
            line-height: 40px;          
        }
    } 
    @media screen and (min-width: 1910px) {
        padding: 40px 196px 32px 164px;
        gap: 827px;
    }
`;

const AllRights = styled.div`
    font-weight: 400;
    font-size: 8px;
    line-height: 16px; 

    @media screen and (min-width: 1200px) {
        font-size: 10px;
        line-height: 20px;
    }
    @media screen and (min-width: 1440px) {
        font-size: 12px;
        line-height: 24px;
    }
`;


const LegalPagesLinks = styled.div`
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 48px;
    }
    @media screen and (min-width: 1200px) {
        gap: 38px;
    }
    @media screen and (min-width: 1910px) {
        gap: 65px;
    }
`;

const legalsLinks = css`
    font-weight: 400;
    font-size: 8px;
    line-height: 16px;
    color: var(--pure-white);
    text-decoration: none;

    @media screen and (min-width: 1200px) {
        font-size: 14px;
        line-height: 20px;
    }
    @media screen and (min-width: 1910px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

const Policy = styled(NavLink)`
    ${Politics};
    ${legalsLinks};
`;

const Agreement = styled(NavLink)`
    ${Politics};
    ${legalsLinks};
`;

export const AppFooter = () => {
    const { privacy, terms } = useAppSelector(selectAppText).footer

    return (
        <FooterWrapper>
            <div>
                <TalkAboutAll/>
                <AllRights>All Rights Reserved, 2023</AllRights>
            </div>
            <LegalPagesLinks>
                <div>
                    <Policy to="/privacy">{ privacy }</Policy>
                </div>
                <div>
                    <Agreement to="/terms">{ terms }</Agreement>
                </div>
            </LegalPagesLinks>
        </FooterWrapper>
    )
}