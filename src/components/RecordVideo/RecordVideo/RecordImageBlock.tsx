import React, { useCallback, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks";
import { getThemeThunk, resetThemeThunk, selectTheme, setReadyTimerStarted } from "store/redux-store/slices/themeSlice";
import { RecordTitle } from "../widgets-record-video/Titles";
import { selectAppText, selectLanguage } from "store/redux-store/slices/langSlice";
import { Languages, Theme } from "store/redux-store/libs/types";
import { selectIsThemeImageLoading, setIsThemeImageLoading } from "store/redux-store/slices/uiSlice";
import { PreloaderForComponents } from "components/common/Preloader/Preloader";
import { Author, Image, ImageWrapper, RecordImageWrapper, Word } from "./widgets/RecordImage";


export const RecordImageBlock = React.memo(({
    isFocus
} : {
    isFocus: boolean
}) => {
    const lang: Languages = useAppSelector(selectLanguage)
    const theme: Theme | null = useAppSelector(selectTheme)
    const { category, author } = useAppSelector(selectAppText   ).videos.record
    
    const dispatch = useAppDispatch()

    const isThemeImageLoading = useAppSelector(selectIsThemeImageLoading)
    
    useEffect(() => {
        dispatch(setIsThemeImageLoading(true))
        dispatch(getThemeThunk())
            .finally(() => {
                dispatch(setIsThemeImageLoading(false))
            })
        return () => {
            dispatch(resetThemeThunk())
        }
    }, [dispatch])

    const handleImageOnLoad = useCallback(() => {
        dispatch(setReadyTimerStarted(true))
    }, [dispatch])

    return (
        <RecordImageWrapper>
            <RecordTitle style={{ opacity: "1" }}>
                { category } &#171;
                <Word>
                    {lang === Languages.RU ? theme?.category.translate : theme?.category.name}
                </Word>&#187;: <Word>
                    {lang === Languages.RU ? theme?.translate : theme?.word}
                </Word>
            </RecordTitle>

            <ImageWrapper isFocus={!isFocus}>
                { theme ? <Image onLoad={handleImageOnLoad} src={theme?.image_uri} alt={theme?.word}/> : null }
                { isThemeImageLoading ? <PreloaderForComponents/> : null}
            </ImageWrapper>

            <Author>
                { author }
                    <a href={ theme?.image_author } target="_blank" rel="noreferrer noopener">
                        { theme?.image_author }
                    </a>
            </Author>
        </RecordImageWrapper>
    )
})