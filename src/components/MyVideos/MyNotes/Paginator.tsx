import React, { BaseSyntheticEvent, useCallback, useState } from 'react';
import { 
    NextPageBlockIcon, 
    PreviousPageBlockIcon, 
} from 'components/common/SVG/PaginatorButtons';
import { useAppDispatch, useAppSelector } from 'store/redux-store/libs/hooks';
import { selectBlockSize, selectCurrentPage, selectPageSize, 
    selectSavedVideos, setCurrentPage 
} from 'store/redux-store/slices/videoRecordSlice';
import { PageNumber, Pages, Pagination, PrevNextButton, SelectedNumber, StartPageNumber, 
    EndPageNumber, ThreeDots 
} from './styled/PaginatorStyled';
import { selectAppText } from 'store/redux-store/slices/langSlice';


const Paginator = () => {   
    const dispatch = useAppDispatch()

    const { start: startPage, end: endPage, previous, next } = useAppSelector(selectAppText).videos.myNotes.paginator

    const currentPage = useAppSelector(selectCurrentPage)
    const totalRecordsCount = useAppSelector(selectSavedVideos)?.count as number
    const pageSize = useAppSelector(selectPageSize)
    const blockSize = useAppSelector(selectBlockSize)

    const pagesCount: number = Math.ceil(totalRecordsCount / pageSize)
    const blocksCount: number = Math.ceil(pagesCount / blockSize)
    const [blockNumber, setBlockNumber] = useState(currentPage)
    
    let start: number = currentPage > 2 ? currentPage - 1 : currentPage;
    let end: number = currentPage < pagesCount - 1 ? currentPage + 1 : currentPage;

    const pages: Array<number> = [];
    for (let i: number = start; i <= end; i++) {
        pages.push(i);
    }

    const handleStartClick = useCallback(() => {
        setBlockNumber(1);
        dispatch(setCurrentPage(1))
    }, [dispatch])

    const handlePrevClick = useCallback(() => {
        if (start > 1) {
            setBlockNumber(blockNumber - 1);

            dispatch(setCurrentPage(currentPage - 1));
        }
    }, [dispatch, currentPage, start, blockNumber])

    const handleNextClick = useCallback(() => {
        if (blockNumber < blocksCount) {
            setBlockNumber(blockNumber + 1);

            dispatch(setCurrentPage(currentPage + 1));
        }
    }, [dispatch, currentPage, blockNumber, blocksCount])

    const handleLastClick = useCallback(() => {
        setBlockNumber(blocksCount);
        dispatch(setCurrentPage(pagesCount))
    }, [dispatch, blocksCount, pagesCount])

    const handleChangePageOnClick = (event: BaseSyntheticEvent) => {
        if (event.target === event.currentTarget) return;

        const selectedPage = (Number(event.target.innerText))
        dispatch(setCurrentPage(selectedPage))

        setBlockNumber(selectedPage);
    }

    const pagesItems =  pages.map((page: number) => (
        currentPage === page ? 
        <SelectedNumber key={page}>
            { page }
        </SelectedNumber> :
        <PageNumber key={page}>
            { page }
        </PageNumber>
    ))
    
    return (
        <Pagination>

            <PrevNextButton
                onClick={handlePrevClick}
                title={previous}
            >
                <PreviousPageBlockIcon/>
            </PrevNextButton>

            { (blockNumber > 1) 
                ? <StartPageNumber title={startPage} onClick={handleStartClick}>{ 1 }</StartPageNumber> 
                : null 
            }
            
            { start > 2 && <ThreeDots>...</ThreeDots> }
            <Pages onClick={handleChangePageOnClick} >
                    { pagesItems }
            </Pages>
            { end < pagesCount - 1 && <ThreeDots>...</ThreeDots> }
            
            { (blockNumber < blocksCount && blocksCount > 1) 
                ? <EndPageNumber title={endPage} onClick={handleLastClick}>{ pagesCount }</EndPageNumber> 
                : null
            }

            <PrevNextButton 
                onClick={handleNextClick}
                title={next}
            >
                    <NextPageBlockIcon/>
            </PrevNextButton>

        </Pagination>
    )
}

export default Paginator;
