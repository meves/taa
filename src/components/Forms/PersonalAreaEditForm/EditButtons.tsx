import React from "react";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import { SubmitFormButton } from "../widgets-forms/SubmitFormButton";
import styled from "styled-components";
import { Secondary } from "components/common/Buttons/Secondary";


const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    margin-top: 32px;
    width: 100%;
    
    & > div {
        margin-top: 0;
        flex: 3;
    }

    & > div > button {
        flex: 3; 
    }

    @media screen and (min-width: 768px) {
        gap: 24px;
        margin-top: 56px;
    }
`;

const CancelButton = styled.button`
    ${Secondary};
    padding: 16px 32px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    background-color: var(--transparent);
    width: 124px;
    height: 56px;    
    
    @media screen and (min-width: 768px) {
        padding: 16px 54px;
        width: 168px;
    }
`;

const SaveButton = styled(SubmitFormButton)`
    min-width: 196px;

    @media screen and (min-width: 768px) {
        min-width: 320px;
    }    
`;

export const EditButtons = React.memo(({
    isDisabled,
    handleDenyInputOnClick,
    wrapper
} : {
    isDisabled: boolean
    handleDenyInputOnClick: () => void
    wrapper?: string
}) => {
    const {cancel, save } = useAppSelector(selectAppText).forms.buttons
    
    return (
        <Wrapper className={wrapper}>
            <div>
                <CancelButton
                    onClick={handleDenyInputOnClick}
                    type="button"
                >{cancel}
                </CancelButton>
            </div>
            <SaveButton
                isDisabled={isDisabled}
                text={save}
            />
        </Wrapper>
    )
})

export const PersonalAreaEditButtons = styled(EditButtons)`
    @media screen and (min-width: 1200px) {
        wrapper {
            margin-top: 32px;
        }
    }
    @media screen and (min-width: 1910px) {
        wrapper {
            margin-top: 56px;
        }
    }
`;