import styled, { css } from "styled-components";


const text = css`
    margin: 0;
    font-size: 14px;
    line-height: 28px;
    color: var(--text-dark-blue);
    text-align: center;
`;

export const TextBold = styled.p`
    ${text};
    font-weight: 700;

    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 32px;
    }
`;

export const TextThin = styled.p`
    ${text};
    font-weight: 400;;
    margin-top: 12px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
        margin-top: 16px;
    }
`;

export const DeleteAccountWarningTextThin = styled(TextThin)`
    line-height: 20px;
`;

export const ConfirmDeleteAccountTextBold = styled(TextBold)`
    white-space: pre-wrap;
`;

export const CancelRecordVideoTextBold = styled(TextBold)`
    width: 70%;

    @media screen and (min-width: 768px) {
        width: 100%;
    }
`;

export const ArchiveLetterWillBeSentTextBold = styled(TextBold)`
    @media screen and (min-width: 768px) {
        width: 66%;
    }
`;

export const SaveCommentTextBold = styled(TextBold)`
    margin-bottom: 25px;
`