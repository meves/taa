import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    color: var(--pure-white);
    font-family: var(--IBM-Plex-Sans);
    font-weight: 400;
    line-height: 32px;
    display: flex;
`;

const Word = styled.span`
    
    &::first-letter {
        color: var(--turquoise);        
        font-weight: 700;
    }    
`;

export const TalkAboutAll = React.memo(() => {   

    return (
        <Wrapper>
            <Word>Talk</Word><Word>About</Word><Word>All</Word>
        </Wrapper>
    )
})