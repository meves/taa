import React from "react";
import styled from "styled-components";


export const FormWrapper = styled.form`
    width: 100%;
    
    @media screen and (min-width: 768px) {
        border-radius: 56px;
        background-color: var(--app-background);
        padding: 56px 64px 32px;
    }
`;

const Fieldset = styled.fieldset`
    border: none;
    padding-left: 0;
    padding-right: 0;
`;

export const Form = React.memo(({
    onSubmit,
    children,
    wrapper
} : {
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined
    children: React.ReactNode
    wrapper?: string
}) => {
    return (
        <FormWrapper onSubmit={onSubmit} className={wrapper}>
            <Fieldset>
                { children }
            </Fieldset>
        </FormWrapper>
    )
})


export const PersonalAreaFormElement = styled(FormWrapper)`
    @media screen and (min-width: 1200px) {
        padding: 0;        
    }
    @media screen and (min-width: 1910px) {
        padding: 56px 64px 32px;        
    }    
`;