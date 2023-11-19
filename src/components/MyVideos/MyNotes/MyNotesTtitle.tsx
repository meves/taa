import React, { useCallback } from "react"
import { SortingNew, SortingOld } from "components/common/SVG/Sorting";
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import styled from "styled-components";


export const TitleWrapper = styled.div`
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--pure-white);
    background-color: var(--app-background);
    position: sticky;
    top: 62px;
    z-index: 1;

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
    }

    @media screen and (min-width: 1200px) {
        margin-bottom: 24px;
        top: 74px;
    }

    @media screen and (min-width: 1910px) {
        margin-bottom: 24px;
        top: 82px;
    }
`;

export const Title = styled.h4`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 40px;
    }
`;

const SortingWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    

    &:hover {
        cursor: pointer;
    }
`;

const SortingText = styled.p`
    margin: 0 0 0 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    @media screen and (min-width: 1910px) {
        font-size: 18px;
        line-height: 40px;
    }
`;

export const MyNotesTitle = React.memo(({
    toggleSorting,
    setToggleSorting
} : {
    toggleSorting: boolean
    setToggleSorting: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const {
        title, sorting: { newFirst, oldFirst }
    } = useAppSelector(selectAppText).videos.myNotes

    const handleToggleSortingOnClick = useCallback(() => {
        setToggleSorting(prevToggleSorting => !prevToggleSorting)
    }, [setToggleSorting])

    return (
        <TitleWrapper>
            <Title>{ title }</Title>
            <SortingWrapper onClick={handleToggleSortingOnClick}>
                { toggleSorting ? <SortingNew/> : <SortingOld/>}
                <SortingText>{ toggleSorting ? newFirst : oldFirst }</SortingText>
            </SortingWrapper>
        </TitleWrapper>
    )
})