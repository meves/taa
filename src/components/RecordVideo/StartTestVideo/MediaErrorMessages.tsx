import React from "react"
import styled from "styled-components";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import { Camera, Microphone } from "components/common/SVG/TestVideoIcons";


const ConnectiomErrorWrapper = styled.div`
    width: 336px;
    margin-top: 20px;

    @media screen and (min-width: 768px) {
        width: 704px;
        margin-top: 33px;
    }
    @media screen and (min-width: 1910px) {
        width: 1024px;
    }
`;

const ErrorMessageWrapper = styled.div`
    margin: 0 0 10px 0;

    @media screen and (min-width: 768px) {
        margin-bottom: 20px;
    }
    @media screen and (min-width: 1910px) {
        margin-bottom: 20px;
    }    
`;

const ErrorMessage = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    color: var(--white);
`;

const IconError = styled.div`
    width: 24px;
    height: 24px;

    @media screen and (min-width: 768px) {
        width: 22px;
        height: 22px;
    }
    @media screen and (min-width: 1910px) {
        width: 20px;
        height: 20px;
    }
`

const Text = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--pure-white);    
`;

export const MediaErrorMessage = ({ 
    cameraPluggedIn,
    microphonePluggedIn,
    errorMessage
} : {
    cameraPluggedIn: boolean
    microphonePluggedIn: boolean
    errorMessage: string
}) => {
    const { cameraIsNotPluggedIn, microphoneIsNotPluggedIn } 
        = useAppSelector(selectAppText).videos.errorMessage

    return (
        <ConnectiomErrorWrapper>
            <ErrorMessageWrapper>
                { cameraPluggedIn ? "" : 
                    <ErrorMessage>
                        <IconError><Camera/></IconError>
                        <Text>{ cameraIsNotPluggedIn }</Text>
                    </ErrorMessage> }
            </ErrorMessageWrapper>
            <ErrorMessageWrapper>
                { microphonePluggedIn ? "" : 
                    <ErrorMessage>
                        <IconError><Microphone/></IconError>
                        <Text>{ microphoneIsNotPluggedIn }</Text>
                    </ErrorMessage> }
            </ErrorMessageWrapper>
            <ErrorMessageWrapper>
                { errorMessage ? <ErrorMessage><Text>{ errorMessage }</Text></ErrorMessage> : null }
            </ErrorMessageWrapper>
        </ConnectiomErrorWrapper>
    )
}