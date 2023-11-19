import React, { useCallback, useEffect, useRef } from "react"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks";
import { getAmountAttemptsThunk, selectAmountAttempts, selectStream, setStream } from "store/redux-store/slices/videoRecordSlice";
import { setModalOpen } from "store/redux-store/slices/modalSlice";
import { selectUser } from "store/redux-store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { selectAppText } from "store/redux-store/slices/langSlice";
import { DescriptionList } from "./DescriptionList";
import { Secondary } from "components/common/Buttons/Secondary";
import { BorderWrapper } from "components/Forms/widgets-forms/FormWrappers/BorderWrapper";


const InfoWrapper = styled.section`
    padding: 32px 12px 48px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        padding: 114px 65px 78px;
    }

    @media screen and (min-width: 1910px) {
        padding: 104px 608px 100px;

        & > div {
            width: 704px;
        }
    }
`;

const InfoBlock = styled.div`
    width: 100%;
    background-color: var(--app-background);

    @media screen and (min-width: 768px) {
        border-radius: 56px;
        padding: 56px 31px 32px;
        display: flex;
        flex-direction: column;
    }

    @media screen and (min-width: 1910px) {
        padding-left: 64px;         
        padding-right: 64px;         
    }
`;

const InfoTitle = styled.h4`
    margin: 0 0 20px 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--pure-white);
    width: 336px;
    white-space: pre-wrap;

    @media screen and (min-width: 768px) {
        width: 100%;
        white-space: nowrap;
        text-align: center;
        margin-bottom: 32px;
    }
    
    @media screen and (min-width: 1910px) {
        font-size: 24px;
        line-height: 40px;
    }
`;

const StartButton = styled.button`
    ${Secondary};
    margin: 0 auto;
    width: 323px;
    height: 48px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--pure-white);
    background-color: var(--transparent);
    padding: 12px 84px;
    border: 1px solid var(--pure-white);
    border-radius: 100px;
    margin-top: 32px;

    @media screen and (min-width: 768px) {
        width: 220px;
        height: 56px;
        padding: 16px 32px;
    }
`;


export const InfoAndStartVideoBlock = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { buttons: { infoStart }, info: { title } } = useAppSelector(selectAppText).videos

    const userId = useAppSelector(selectUser)?.id
    const amountAttempts = useAppSelector(selectAmountAttempts)
    
    const stream = useAppSelector(selectStream)
    const nextPath = useRef("")

    const handleStartRecordVideoOnClick = useCallback(() => {
        if (amountAttempts && amountAttempts > 0) {
            nextPath.current = "/record"
            navigate("/record")
        } else {
            dispatch(setModalOpen('after-third-video'))
        }
    }, [dispatch, amountAttempts, navigate])  
        
    useEffect(() => {
        return () => {
            if (nextPath.current !== "/record") {
                stream?.getTracks().forEach((track: MediaStreamTrack) => track.stop())
                dispatch(setStream(null))
            }
        }
    }, [dispatch, stream])

    useEffect(() => {
        if (userId) {
            dispatch(getAmountAttemptsThunk(userId))
        }
    }, [dispatch, userId])

    return (
        <InfoWrapper>
            <BorderWrapper>
                <InfoBlock>

                    <InfoTitle>{ title }</InfoTitle>

                    <DescriptionList/>
                        
                    <StartButton 
                        onClick={handleStartRecordVideoOnClick}
                    >{ infoStart }
                    </StartButton>

                </InfoBlock>
            </BorderWrapper>            
        </InfoWrapper>
    )
}