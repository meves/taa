import React, { ReactNode } from "react"
import { useToggleVisibilityState } from "components/libs/hooks/useToggleVisibility"
import styled from "styled-components";
import { Minus, Plus } from "../SVG/AccordeonItems";
import { TooltipTitle } from "./TooltipTitle";


const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 35px 0 43px;
    
    @media screen and (max-width: 1194px) {
        margin-top: 0;
        margin-bottom: 13px;
    }
    @media screen and (max-width: 768px) {
        margin-bottom: 12px;
    }
`;

const Label = styled.div`
    display: none;
    margin-left: auto;

    & > label > div {
        cursor: pointer;
        @media screen and (max-width: 1194px) {
            width: 28px;
            height: 28px;        
        }    
    }
    @media screen and (max-width: 1194px) {
        display: block;        
    }

    @media screen and (max-width: 856px) {
        margin-left: auto;
    }
`;

const HorizontalLine = styled.div`
    @media screen and (max-width: 1194px) {
        border-bottom: 1px solid var(--horizontal-line);
    }
`;

export type TooltipProps = {
    mobileWidth?: boolean
    children?: ReactNode
}

export const TooltipWrapperComponent = ({
    DescriptionContent,
    text,
    mobileBreakPoint
} : {
    DescriptionContent: React.FC<TooltipProps>
    text: string
    mobileBreakPoint: number
}) => {
    return (
        <TooltipContent 
            render={(mobileWidth?: boolean) => (<DescriptionContent mobileWidth={mobileWidth}/>)}
            text={text}
            mobileBreakPoint={mobileBreakPoint}
        />
    )
}

export const TooltipContent = ({
    text,
    render,
    mobileBreakPoint
} : {
    text: string
    render: (mobileWidth: boolean) => React.ReactElement
    mobileBreakPoint: number
}) => {
    const { open, mobileWidth, handleOpenCloseDescriptionOnClick } = useToggleVisibilityState(mobileBreakPoint)

    return (
        <>
        <TitleWrapper>
            <TooltipTitle text={text}/>
            <Label>
                <input 
                    checked={open} 
                    onChange={handleOpenCloseDescriptionOnClick}
                    type="checkbox" 
                    id="infoDescription"
                    hidden 
                />
                <label htmlFor="infoDescription" >
                    { open ? <Minus/> : <Plus/> }
                </label>
            </Label>
        </TitleWrapper>
        { open ? render(mobileWidth) : <HorizontalLine/> }
        </>
    )
}