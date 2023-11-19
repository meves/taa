import styled from "styled-components";


export const FormInput = styled.input`
    box-sizing: border-box;
    appearance: none;
    width: 100%;
    height: 44px;
    padding: 8px 90px 8px 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--pure-white);                
    background-color: var(--transparent);
    border: 1px solid var(--pure-white-stroke);
    border-radius: 16px;
    outline: none;

    @media screen and (min-width: 1200px) {
        height: 56px;
        font-size: 18px;
        line-height: 40px;
    }

    &::placeholder {
        color: var(--pure-white-stroke);
        opacity: 0;            
    }
    &:focus::placeholder {
        opacity: 1;
    }    

    &_success:-webkit-autofill {
        box-shadow:0 0 0 50px var(--light-light-green) inset;
        -webkit-text-fill-color: var(--pure-white-stroke);
    }
    &_success, &_success:focus {
        color: var(--pure-white);
        background-color: var(--transparent);
    }

    &_error:invalid:-webkit-autofill {
        box-shadow:0 0 0 50px var(--transparent) inset;
        -webkit-text-fill-color: var(--pure-white-stroke);
    }

    &_error:invalid, &_error:focus, &_error:not(:focus) {
        color: var(--pure-white-stroke);
        border: 1px solid var(--accent-red);
    }
`;