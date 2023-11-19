import { Primary } from "components/common/Buttons/Primary";
import { Secondary } from "components/common/Buttons/Secondary";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";


export const CommentWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const Comment = styled.textarea`
    width: 100%;
    padding: 8px 54px 8px 16px;
    border: 1px solid var(--pure-white-stroke);
    border-radius: 16px;
    outline: none;
    resize: none;
    height: 68px;

    &::placeholder {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--pure-white-stroke);
    }
    
    @media screen and (min-width: 768px) {
        padding-right: 72px;
        height: 96px;

        &::placeholder {
            font-size: 18px;
            line-height: 40px;
        }
    }
`;

export const ButtonsWrapper = styled.div`
    width: 288px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    margin-top: 20px;

    @media screen and (min-width: 768px) {
        width: 704px;
        margin-top: 32px;
        flex-direction: row-reverse;
        gap: 6px;
    }
    @media screen and (min-width: 1910px) {
        width: 1024px;
        gap: 307px;
    }
`;

export const NotesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: 768px) {
        width: 455px;
        flex-direction: row-reverse;
        gap: 6px;
    }
    @media screen and (min-width: 1910px) {
        width: 475px;
        gap: 24px;
    } 
`;

export const SendEmailButton = styled.button`
    ${Primary};
    width: 100%;
    padding: 12px 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    
    @media screen and (min-width: 768px) {
        width: 244px;
    }
`;

const sendButtons = css`
    ${Secondary};
    height: 48px;
    padding-top: 12px;
    padding-bottom: 12px;
    width: 100%;
    text-align: center;
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--pure-white);

    @media screen and (min-width: 768px) {
        height: 56px;
    }
`;

export const MyNotesLink = styled(NavLink)`
    ${sendButtons};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        width: 173px;   
    }
    
`;

export const SaveCommentButton = styled.button`
    ${sendButtons};

    color: ${props => props.disabled ? "var(--black)" : "var(--pure-white)"};
    background-color: ${props => props.disabled ? "var(--grey)" : "var(--transparent)"};
    
    &:hover {
        cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
        background-color: ${props => props.disabled ? "var(--grey)" : "var(--transparent)"};
        border-width: ${props => props.disabled ? "1px" : ""};
    }
    &:active {
        border: ${props => props.disabled ? "1px solid var(--pure-white)" : ""};
    }

    @media screen and (min-width: 768px) {
        width: 276px;
    }
`;

export const QuestionWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;

    @media screen and (min-width: 768px) {
        top: 16px;
        right: 16px;
    }
`;
