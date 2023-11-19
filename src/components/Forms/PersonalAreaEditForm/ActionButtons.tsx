import React from "react"
import { useAppSelector } from "store/redux-store/libs/hooks"
import { selectAppText } from "store/redux-store/slices/langSlice"
import styled, { css } from "styled-components"


const Wrapper = styled.div`
    width: 100%;
    margin: 52px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 80px;    

    @media screen and (min-width: 768px) {
        margin-top: 72px;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const actionButtons = css`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--pure-white);
    background-color: var(--transparent);
    border: none;

    &:hover {
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

const LogoutButton = styled.button`
    ${actionButtons};
`;

const DeleteAccountButton = styled.button`
    ${actionButtons};
`;

export const ActionButtons = React.memo(({
    exitButtonDisabled,
    deleteButtonDisabled,
    handleExitAccountOnClick,
    handleDeleteAccountOnClick,
    wrapper
} : {
    exitButtonDisabled: boolean
    deleteButtonDisabled: boolean
    handleExitAccountOnClick: () => Promise<void>
    handleDeleteAccountOnClick: () => void
    wrapper?: string
}) => {
    const { deleteAccount } = useAppSelector(selectAppText).forms.buttons

    return (
        <Wrapper className={wrapper}>
            <DeleteAccountButton
                disabled={deleteButtonDisabled}
                onClick={handleDeleteAccountOnClick}
                type="button"
            >{deleteAccount}
            </DeleteAccountButton>
            <LogoutAccountButton
                exitButtonDisabled={exitButtonDisabled}
                handleExitAccountOnClick={handleExitAccountOnClick}
            />
        </Wrapper>
    )
})

export const PersonalAreaActionButtons = styled(ActionButtons)`
    @media screen and (min-width: 1200px) {
        wrapper {
            margin-top: 48px;
        }
    }
    @media screen and (min-width: 1910px) {
        wrapper {
            margin-top: 72px;
        }
    }
`;

const LogoutWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 204px;
`;

export const LogoutAccount = React.memo(({
    exitButtonDisabled,
    handleExitAccountOnClick
} : {
    exitButtonDisabled: boolean
    handleExitAccountOnClick: () => Promise<void>
}) => {
    return (
        <LogoutWrapper>
            <LogoutAccountButton
                exitButtonDisabled={exitButtonDisabled}
                handleExitAccountOnClick={handleExitAccountOnClick}
            />
        </LogoutWrapper>
    )
})

const LogoutAccountButton = React.memo(({
    exitButtonDisabled,
    handleExitAccountOnClick
} : {
    exitButtonDisabled: boolean
    handleExitAccountOnClick: () => Promise<void>
}) => {
    const { logout } = useAppSelector(selectAppText).forms.buttons

    return (
        <LogoutButton
            disabled={exitButtonDisabled}
            onClick={handleExitAccountOnClick}
            type="button"
        >{logout}
        </LogoutButton>
    )   
})