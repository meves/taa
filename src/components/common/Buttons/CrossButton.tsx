import React, { useCallback } from "react";
import { useAppDispatch } from "store/redux-store/libs/hooks";
import { ModalType } from "store/redux-store/libs/types";
import { setModalOpen } from "store/redux-store/slices/modalSlice";
import styled from "styled-components";


const Wrapper = styled.div`
    position: absolute;
    top: 17px;
    right: 17px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {
        width: 24px;
        height: 24px;
        top: 20px;
        right: 20px;
    }
`;

const Cross = styled.div`
    width: 10px;
    height: 10px;
    position: relative;

    &:before, &:after {
        content: "";
        display: block;
        width: 14px;
        height: 2px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        background-color: var(--text-dark-blue);
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }

    @media screen and (min-width: 768px) {
        width: 12px;
        height: 12px;

        &:before, &:after {
            width: 17px;
        }
    }
`;

export const CrossButton = React.memo(({
    modalType
} : {
    modalType: ModalType
}) => {
    const dispatch = useAppDispatch()

    const handleOnClick = useCallback(() => {
        dispatch(setModalOpen(modalType))
    }, [dispatch, modalType])
    return (
        <Wrapper onClick={handleOnClick}>
            <Cross/>
        </Wrapper>
    )
})