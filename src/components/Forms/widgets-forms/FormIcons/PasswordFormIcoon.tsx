import { CheckPasswordMark } from "components/common/SVG/CheckMarks";
import { Eye } from "components/common/SVG/Eyes";
import { QuestionPassword } from "components/common/SVG/Question";
import React from "react";
import styled from "styled-components";
import { Wrapper } from "./NameFormIcon";


const PasswordWrapper = styled(Wrapper)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 18px;
`;

export const PasswordFormIcoon = React.memo(({
    isPasswordsMatch,
    showPassword,
    setShowPassword,
    visited,
    error
} : {
    isPasswordsMatch?: boolean
    showPassword: boolean
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
    visited: boolean
    error: string
}) => {
    return (
        <PasswordWrapper>
            { isPasswordsMatch && !error ? <CheckPasswordMark /> : null }
            
            <Eye
                show={showPassword}
                setShow={setShowPassword}
                visited={visited}
                error={error} 
            />
            { !isPasswordsMatch || error ? <QuestionPassword /> : null}
            
        </PasswordWrapper>
    )
})