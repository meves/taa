import { titles } from "components/RecordVideo/widgets-record-video/Titles";
import styled from "styled-components";
import { VideoAndImageWrapper } from "./VideoAndImageWrapper";


export const RecordImageWrapper = styled.section`
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const ImageWrapper = styled(VideoAndImageWrapper)`
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 767px) {
        height: 210px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Author = styled.figcaption`
    ${titles};
    margin-left: 10px;
    
    a {
        text-decoration: none;
        transition: color 0.3s ease-in-out;
        
        &:link {
            color: var(--blue-accent);
        }
        &:visited {
            color: var(--accent-red);
        }
        &:hover {
            color: var(--blue-accent);
        }
        &:active {
            color: var(--blue-cookie-hover);
        }
    }
`;

export const Word = styled.span`
    text-transform: capitalize;  
`;
