import React from "react"
import styled from "styled-components"


const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const Asterisk = () => {
    return (
        <Wrapper>
            <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.08594 0.84375L4.78906 3.94531L7.875 3.04688L8.07812 4.41406L5.125 4.71875L7.03125 7.25781L5.76562 7.95312L4.35156 5.17188L3.05469 7.95312L1.74219 7.25781L3.63281 4.71875L0.695312 4.41406L0.914062 3.04688L3.95312 3.94531L3.64844 0.84375H5.08594Z" fill="#EA7474"/>
            </svg>
        </Wrapper>
    )
}