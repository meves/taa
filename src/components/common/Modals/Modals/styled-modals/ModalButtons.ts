import { Primary } from "components/common/Buttons/Primary";
import { Secondary } from "components/common/Buttons/Secondary";
import styled, { css } from "styled-components";


export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    margin-top: 24px;

    @media screen and (min-width: 768px) {
        flex-direction: row-reverse;
        justify-content: center;
        flex-wrap: wrap;
        gap: 24px;
        margin-top: 32px;
    }
`;

const modalButtons = css`
    font-size: 16px;
    line-height: 24px;
    color: var(--text-dark-blue);
    padding: 10px 0;
    width: 100%;
    text-align: center;

    @media screen and (min-width: 768px) {
        padding: 16px 32px;        
    }
`;

export const PrimaryModalButton = styled.button`
    ${Primary};
    ${modalButtons};
    font-weight: 600;

    @media screen and (min-width: 768px) {
        max-width: 128px;
    }
`;

export const SecondaryModalButton = styled.button`
    ${Secondary};
    ${modalButtons};
    height: 44px;
    font-weight: 400;
    border: 1px solid var(--text-dark-blue);

    @media screen and (min-width: 768px) {
        max-width: 176px;
        height: 56px;
    }
`;

export const PrimaryCancelRecordVideoModalButton = styled(PrimaryModalButton)`
    @media screen and (min-width: 768px) {
        max-width: 264px;
    }
`;

export const SecondaryCancelRecordVideoModalButton = styled(SecondaryModalButton)`
    @media screen and (min-width: 768px) {
        max-width: 226px;
    }
`;

export const PrimaryAfterdVideoModalButton = styled(PrimaryModalButton)`
    @media screen and (min-width: 768px) {
        max-width: 268px;
    }
`;

export const SaveOrTryButtonswrapper = styled(ButtonsWrapper)`
    @media screen and (min-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const SaveAndToMainButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: 768px) {
        flex-direction: row-reverse;
        justify-content: center;
    }
`;

export const TryAgainModalButton = styled(PrimaryModalButton)`
    @media screen and (min-width: 768px) {
        max-width: 242px;
    }
`;

export const SaveOrDeviceModalButton = styled(SecondaryModalButton)`
    @media screen and (min-width: 768px) {
        max-width: 263px;
    }
`;

export const GoTomainModalButton = styled(SecondaryModalButton)`
    @media screen and (min-width: 768px) {
        max-width: 155px;
    }
`;

export const SaveCommentButton = styled(PrimaryModalButton)`
    @media screen and (min-width: 768px) {
        max-width: 155px;
    }
`;

export const CloseWithoutSavingButton = styled(SecondaryModalButton)`
    @media screen and (min-width: 768px) {
        max-width: 288px;
    }
`;