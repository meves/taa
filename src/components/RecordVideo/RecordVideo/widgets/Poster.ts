import styled from "styled-components";


export const Poster = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PosterImage = styled.div`
    width: 60px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        width: 84px;
        height: 72px;
    }

    @media screen and (min-width: 1910px) {
        width: 116px;
        height: 100px;
    }
`;