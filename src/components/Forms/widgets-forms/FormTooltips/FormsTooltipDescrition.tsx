import React from "react"
import { TooltipProps } from "components/common/Tooltip/Tooltip"
import styled, { css } from "styled-components"
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";


const DescriptionWrapper = styled.div`
    width: 100%;
`;

export const FormsTooltipDescriptionWrapper: React.FC<TooltipProps> = ({ children }) => {
    return (
        <DescriptionWrapper>
            { children }
        </DescriptionWrapper>
    )
}

const description = css`
    margin-bottom: 0;
    font-size: 16px;
    line-height: 1.6;
    color: var(--white);
`;

const Title = styled.h6`
    ${description};
    margin-top: 13px;
    font-weight: 700;
`;

const Text = styled.p`
    ${description};
    margin-top: 0;    
    font-weight: 400;
`;

export const FormsTooltipDescription = ({
    title,
    text
} : {
    title: string
    text: string
}) => {
    return (
        <>
            <Title>{ title }</Title>
            <Text>{ text }</Text>
        </>
    )
}


export const RegistrationFormDescriptionWrapper = () => {
    const { 
        titleName, titleEmail, titlePassword,
        tooltipName, tooltipEmail, tooltipPassword
    } = useAppSelector(selectAppText).forms.tooltips

    return (
        <FormsTooltipDescriptionWrapper>
            <FormsTooltipDescription title={titleName} text={tooltipName} />
            <FormsTooltipDescription title={titleEmail} text={tooltipEmail} />
            <FormsTooltipDescription title={titlePassword} text={tooltipPassword} />
        </FormsTooltipDescriptionWrapper>
    )
}

export const LoginFormDescriptionWrapper = () => {
    const { 
        titleEmail, titlePassword,
        tooltipEmail, tooltipPassword
    } = useAppSelector(selectAppText).forms.tooltips

    return (
        <FormsTooltipDescriptionWrapper>
            <FormsTooltipDescription title={titleEmail} text={tooltipEmail} />
            <FormsTooltipDescription title={titlePassword} text={tooltipPassword} />
        </FormsTooltipDescriptionWrapper>
    )
}

export const ForgetPasswordFormDescriptionWrapper = () => {
    const { 
        titleEmail, tooltipEmail
    } = useAppSelector(selectAppText).forms.tooltips

    return (
        <FormsTooltipDescriptionWrapper>
            <FormsTooltipDescription title={titleEmail} text={tooltipEmail} />
        </FormsTooltipDescriptionWrapper>
    )
}

export const PasswordsFormsDescriptionWrapper = () => {
    const { 
        titlePassword, tooltipPassword
    } = useAppSelector(selectAppText).forms.tooltips

    return (
        <FormsTooltipDescriptionWrapper>
            <FormsTooltipDescription title={titlePassword} text={tooltipPassword} />
        </FormsTooltipDescriptionWrapper>
    )
}

export const CommentDescriptionWrapper = () => {
    const { 
        titleComment, tooltipComment        
    } = useAppSelector(selectAppText).forms.tooltips

    return (
        <FormsTooltipDescriptionWrapper>
            <FormsTooltipDescription title={titleComment} text={tooltipComment} />
        </FormsTooltipDescriptionWrapper>
    )
}

export const PersonalAreaDescriptionWrapper = () => {
    const { 
        titleName, titleEmail,
        tooltipName, tooltipEmail
    } = useAppSelector(selectAppText).forms.tooltips

    return (
        <FormsTooltipDescriptionWrapper>
            <FormsTooltipDescription title={titleName} text={tooltipName} />
            <FormsTooltipDescription title={titleEmail} text={tooltipEmail} />
        </FormsTooltipDescriptionWrapper>
    )
}