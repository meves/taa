import styled from "styled-components";
import { FormWrapper } from "../widgets-forms/Form"


export const SubmitForm = styled(FormWrapper)`
    padding: 0;
    
    @media screen and (min-width: 768px) {
        background-color: var(--transparent);        
    }
`