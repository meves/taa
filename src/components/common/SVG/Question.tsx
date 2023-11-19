import React, { MouseEvent, useCallback, useEffect, useState } from "react"
import { useAppSelector } from "store/redux-store/libs/hooks"
import { selectAppText } from "store/redux-store/slices/langSlice"
import styled from "styled-components"


const Wrapper = styled.span`
    &:hover {
        cursor: pointer;
    }
`;

const Tooltip = styled.div`
    position: absolute;
    top: -400%;
    right: -10px;
    z-index: 2;
    width: 330px;
    padding: 16px 32px;
    border-radius: 16px;
    background-color: var(--pure-white);
    color: var(--text-dark-blue);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;

    @media screen and (min-width: 768px) {
        width: 520px;
    }
`;

const Question = (
{
    title
} : {
    title: string
}) => {
    const [toggleTooltip, setToggleTooltip] = useState<boolean>(false)

    const handleToggleTooltipOnClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        event.nativeEvent.stopImmediatePropagation()
        setToggleTooltip(prevToggleTooltip => !prevToggleTooltip)
    }, [])

    const handleDocumentOnClick = useCallback(() => {
        setToggleTooltip(false)
    }, [])

    useEffect(() => {
        if (toggleTooltip) {
            document.body.onclick = handleDocumentOnClick
    
            return () => {
                document.body.onclick = null
            }
        }
    }, [toggleTooltip, handleDocumentOnClick])

    return (
        <Wrapper onClick={handleToggleTooltipOnClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10.5312 15.4316V14.9746C10.5312 14.5059 10.5752 14.1045 10.6631 13.7705C10.751 13.4307 10.9033 13.1143 11.1201 12.8213C11.3428 12.5283 11.6504 12.2178 12.043 11.8896C12.5 11.5088 12.8604 11.1865 13.124 10.9229C13.3936 10.6533 13.5869 10.3838 13.7041 10.1143C13.8213 9.84473 13.8799 9.51953 13.8799 9.13867C13.8799 8.5293 13.6836 8.06348 13.291 7.74121C12.8984 7.41309 12.3447 7.24902 11.6299 7.24902C11.0498 7.24902 10.5342 7.32227 10.083 7.46875C9.63184 7.61523 9.19824 7.79102 8.78223 7.99609L8.27246 6.81836C8.75293 6.56641 9.27441 6.36133 9.83691 6.20312C10.3994 6.04492 11.0264 5.96582 11.7178 5.96582C12.8486 5.96582 13.7246 6.24707 14.3457 6.80957C14.9668 7.36621 15.2773 8.13379 15.2773 9.1123C15.2773 9.65723 15.1895 10.123 15.0137 10.5098C14.8379 10.8906 14.5889 11.2422 14.2666 11.5645C13.9443 11.8809 13.5635 12.2178 13.124 12.5752C12.7373 12.9033 12.4414 13.1934 12.2363 13.4453C12.0312 13.6914 11.8906 13.9463 11.8145 14.21C11.7383 14.4678 11.7002 14.7783 11.7002 15.1416V15.4316H10.5312ZM10.1445 18.0859C10.1445 17.6758 10.2412 17.3857 10.4346 17.2158C10.6279 17.04 10.877 16.9521 11.1816 16.9521C11.4688 16.9521 11.7119 17.04 11.9111 17.2158C12.1162 17.3857 12.2188 17.6758 12.2188 18.0859C12.2188 18.4902 12.1162 18.7861 11.9111 18.9736C11.7119 19.1553 11.4688 19.2461 11.1816 19.2461C10.877 19.2461 10.6279 19.1553 10.4346 18.9736C10.2412 18.7861 10.1445 18.4902 10.1445 18.0859Z" fill="white"/>
                <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="white"/>
            </svg>
            { toggleTooltip ? <Tooltip>{ title }</Tooltip> : null }
        </Wrapper>
    )
}

export const QuestionName = () => {
    const { tooltipName } = useAppSelector(selectAppText).forms.tooltips
    return (
        <Question title={tooltipName}/>
    )
}

export const QuestionEmail = () => {
    const { tooltipEmail } = useAppSelector(selectAppText).forms.tooltips
    return (
        <Question title={tooltipEmail}/>
    )
}

export const QuestionPassword = () => {
    const { tooltipPassword } = useAppSelector(selectAppText).forms.tooltips
    return (
        <Question title={tooltipPassword}/>
    )
}

export const QuestionComment = () => {
    const { tooltipComment } = useAppSelector(selectAppText).forms.tooltips
    return (
        <Question title={tooltipComment} />
    )
}