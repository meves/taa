import styled from "styled-components";
import { fillHeight } from "./fillHeight";


export const FormPageWrapper = styled.div`
    ${fillHeight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 20px;
    
    @media screen and (min-width: 768px) {
        padding-top: 4px;
        padding-bottom: 12px;
    }
    @media screen and (min-width: 1910px) {
        padding-top: 0px;
        padding-bottom: 40px;
    }
`;