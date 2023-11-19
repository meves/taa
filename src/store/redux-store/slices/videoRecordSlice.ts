import { AppDispatch, GetState, RootState } from '../redux-store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Described, RecordedVideos, RecordingState } from '../libs/types';
import { setModalOpen, setModalClose } from './modalSlice';
import { recordsApi } from 'api/records-api';
import { ResultCodes } from 'api/http-codes';
import { Record, Records, Result } from 'api/types';
import { resetThemeThunk } from './themeSlice';
import { parseResponseError } from '../libs/utils';
import { deleteFromLocalStorage, getFromLocalStorage, saveToLocalStorage } from '../../local-storage/utils';
import { lkApi } from 'api/lk-api';
import { setIsSavingComment } from './uiSlice';
import { setSaveCommentError } from './errorSlice';
import { RECORD_ID } from '../../local-storage/constants';
import type { RecordsUrlParams } from "store/redux-store/libs/types"


interface VideoRecordState {
    recordingState: RecordingState
    stream: MediaStream | null
    describedSide: Described | null
    order: boolean
    videoNumber: number
    amountAttempts?: number | null
    recordedVideos: File[],
    recordsToSend: RecordedVideos | null,
    savedVideos: Records | null
    currentPage: number
    pageSize: number
    blockSize: number
    record: Record | null
    tempComment: string
    extension: string
}

const initialState: VideoRecordState = {
    recordingState: {
        preparing: false,
        recording: false,
        stopping: false,
        playing: false,
        pausing: false,
        ended: false
    },
    stream: null,
    describedSide: null,
    order: true,
    videoNumber: 1,
    amountAttempts: null,
    recordedVideos: [],
    recordsToSend: null,
    savedVideos: null,
    currentPage: 1,
    pageSize: 12,
    blockSize: 1,
    record: null,
    tempComment: "",
    extension: "webm"
}

export const videoRecordSlice = createSlice({
    name: "videoRecord",
    initialState,
    reducers: {
        setPreparingVideo: (state, action: PayloadAction<boolean>) => {
            state.recordingState.preparing = action.payload
        },
        setRecordingVideo: (state, action: PayloadAction<boolean>) => {
            state.recordingState.recording = action.payload
        },
        setStoppingVideo: (state, action: PayloadAction<boolean>) => {
            state.recordingState.stopping = action.payload
        },
        setPlayingVideo: (state, action: PayloadAction<boolean>) => {
            state.recordingState.playing = action.payload
        },
        setPausingVideo: (state, action: PayloadAction<boolean>) => {
            state.recordingState.pausing = action.payload
        },
        setEndedVideo: (state, action: PayloadAction<boolean>) => {
            state.recordingState.ended = action.payload
        },
        setStream: (state, action: PayloadAction<MediaStream | null>) => {
            state.stream = action.payload
        },
        setDescribedSide: (state, action: PayloadAction<Described | null>) => {
            state.describedSide = action.payload
        },
        resetDescribedSide: (state, action: PayloadAction) => {
            state.describedSide = null
        },
        setOrder: (state, action: PayloadAction<boolean>) => {
            state.order = action.payload
        },
        setVideoNumber: (state, action: PayloadAction) => {
            state.videoNumber = state.videoNumber + 1
        },
        resetVideoNumber: (state, action: PayloadAction) => {
            state.videoNumber = 1
        },
        setAmountAttempts: (state, action: PayloadAction<number>) => {
            state.amountAttempts = action.payload
        },
        setRecordedVideo: (state, action: PayloadAction<File>) => {
            state.recordedVideos = [...state.recordedVideos, action.payload]
        },
        resetRecordedVideos: (state, action: PayloadAction) => {
            state.recordedVideos = []
        },
        setRecordsToSend: (state, action: PayloadAction<RecordedVideos | null>) => {
            state.recordsToSend = action.payload
        },
        setSavedVideos: (state, action: PayloadAction<Records | null>) => {
            action.payload?.results.sort((a: Result, b: Result) => {
                return a.create_date > b.create_date ? -1 : a.create_date < b.create_date ? 1 : 0
            })
            state.savedVideos = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setRecord: (state, action: PayloadAction<Record | null>) => {
            state.record = action.payload
        },
        setComment: (state, action: PayloadAction<string>) => {
            if (state.record?.comment) {
                state.record.comment = action.payload
            }
        },
        setTempComment: (state, action: PayloadAction<string>) => {
            state.tempComment = action.payload
        },
        setExtension: (state, action: PayloadAction<string>) => {
            state.extension = action.payload
        }
    }
})

export const {
    setPreparingVideo,
    setRecordingVideo,
    setStoppingVideo,
    setPlayingVideo,
    setPausingVideo,
    setEndedVideo,
    setStream,
    setDescribedSide,
    resetDescribedSide,
    setOrder,
    resetRecordedVideos,
    setRecordsToSend,
    setVideoNumber,
    resetVideoNumber,
    setAmountAttempts,
    setRecordedVideo,
    setSavedVideos,
    setCurrentPage,
    setRecord,
    setComment,
    setTempComment,
    setExtension

} = videoRecordSlice.actions

export type ActionType = typeof setStream

export default videoRecordSlice.reducer

export const selectPreparingVideo = (state: RootState) => state.videoRecord.recordingState.preparing
export const selectRecordingVideo = (state: RootState) => state.videoRecord.recordingState.recording
export const selectStoppingVideo = (state: RootState) => state.videoRecord.recordingState.stopping
export const selectPlayingVideo = (state: RootState) => state.videoRecord.recordingState.playing
export const selectPausngVideo = (state: RootState) => state.videoRecord.recordingState.pausing
export const selectEndedVideo = (state: RootState) => state.videoRecord.recordingState.ended
export const selectStream = (state: RootState) => state.videoRecord.stream
export const selectDescribedSide = (state: RootState) => state.videoRecord.describedSide
export const selectVideoNumber = (state: RootState) => state.videoRecord.videoNumber
export const selectAmountAttempts = (state: RootState) => state.videoRecord.amountAttempts
export const selectRecordedVideos = (state: RootState) => state.videoRecord.recordedVideos
export const selectSavedVideos = (state: RootState) => state.videoRecord.savedVideos
export const selectCurrentPage = (state: RootState) => state.videoRecord.currentPage
export const selectPageSize = (state: RootState) => state.videoRecord.pageSize
export const selectBlockSize = (state: RootState) => state.videoRecord.blockSize
export const selectRecord = (state: RootState) => state.videoRecord.record
export const selectComment = (state: RootState) => state.videoRecord.record?.comment
export const selectTempComment = (state: RootState) => state.videoRecord.tempComment
export const selectRecordsToSend = (state: RootState) => state.videoRecord.recordsToSend
export const selectExtension = (state: RootState) => state.videoRecord.extension


export const createRecordsToSendThunk = () =>
    async (dispatch: AppDispatch, getState: GetState) => {
        const order = getState().videoRecord.order
        const storedRecordedVideos = getState().videoRecord.recordedVideos

        const recordsToSend: RecordedVideos = {
            positive_video: order ? storedRecordedVideos[0] : storedRecordedVideos[1],
            negative_video: order ? storedRecordedVideos[1] : storedRecordedVideos[0],
            end_video: storedRecordedVideos[2],
            theme: getState().theme.theme?.id as number,
        }
        dispatch(setRecordsToSend(recordsToSend))
    }

const setInitialVideoSettings = (dispatch: AppDispatch) => {
    dispatch(setDescribedSide(Described.POSITIVE))
    dispatch(setOrder(true))
    dispatch(resetRecordedVideos())
}

export const sendRecordedVideosThunk = () =>
    async (dispatch: AppDispatch, getState: GetState) => {
        dispatch(setModalClose('video-not-sent'))
        dispatch(setModalOpen('video-is-sending'))
        const recordsToSend = getState().videoRecord.recordsToSend
        if (recordsToSend) {
            const response = await recordsApi.saveRecordedVideos(recordsToSend)
            dispatch(setModalClose('video-is-sending'))
            if (response.status === ResultCodes.CREATED_201) {
                const userId = getState().user.user?.id
                dispatch(getAmountAttemptsThunk(userId as number))
                dispatch(setRecordsToSend(null))
                setInitialVideoSettings(dispatch)
                dispatch(resetThemeThunk())
                return undefined
            } else {
                return Promise.reject()
            }
        }
    }

export const getSavedVideosThunk = (recordsUrlParams: RecordsUrlParams) =>
    async (dispatch: AppDispatch) => {
        const response = await recordsApi.getSavedVideos(recordsUrlParams)
        if (response.status === ResultCodes.SUCCESS_200) {
            dispatch(setSavedVideos(response.data))
        }
    }

export const getWatchedVideoThunk = (recordId: number) =>
    async (dispatch: AppDispatch) => {
        const response = await recordsApi.getRecord(recordId)
        if (response.status === ResultCodes.SUCCESS_200) {
            dispatch(setRecord(response.data))
            return undefined
        }
    }

export const restoreWatchedVideoThunk = () =>
    async (dispatch: AppDispatch) => {
        const recordId = getFromLocalStorage<number>(RECORD_ID)
        if (recordId) {
            dispatch(getWatchedVideoThunk(recordId))
        }
    }

export const saveRecordIdThunk = (recordId: number) =>
    async (dispatch: AppDispatch) => {
        saveToLocalStorage(RECORD_ID, recordId)
    }

export const deleteRecordIdThunk = () =>
    async (dispatch: AppDispatch) => {
        deleteFromLocalStorage(RECORD_ID)
    }

export const setRecordedVideoThunk = (videoFile: File) =>
    async (dispatch: AppDispatch, getState: GetState) => {
        dispatch(setRecordedVideo(videoFile))
        const videoNumber = getState().videoRecord.videoNumber
        const amountAttempts = getState().videoRecord.amountAttempts
        if (videoNumber < 3) {
            dispatch(setVideoNumber())
            dispatch(setDescribedSideThunk())
        }
        if (videoNumber === 3 && amountAttempts && amountAttempts > 0) {
            dispatch(setPausingVideo(true))
            dispatch(createRecordsToSendThunk())
            dispatch(sendRecordedVideosThunk())
                .then(() => {
                    dispatch(showModalAfterSeriesThunk(amountAttempts))
                })
                .catch((error: any) => {
                    dispatch(setModalOpen('video-not-sent'))
                })
                .finally(() => {
                    dispatch(resetDescribedSide())
                })
        }
    }

export const saveCommentThunk = (recordId: number, comment: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(setModalOpen('save-comment'))
        dispatch(setIsSavingComment(true))
        dispatch(setTempComment(comment))
        const response = await recordsApi.changeComment(recordId, comment)
        if (response.status === ResultCodes.SUCCESS_200) {
            dispatch(setComment(response.data.comment))
            dispatch(setModalClose('save-comment'))
            dispatch(setIsSavingComment(false))
            dispatch(setTempComment(""))
            dispatch(setModalClose('save-comment'))
            return undefined
        } else {
            dispatch(setSaveCommentError(true))
            dispatch(setIsSavingComment(false))
            return Promise.reject()
        }
    }

export const sendVideoToEmailThunk = (recordId: number) =>
    async (dispatch: AppDispatch, getState: GetState) => {
        const currentLanguage = getState().language.currentLanguage
        const response = await recordsApi.sendVideoToEmail(recordId, currentLanguage)
        if (response.status === ResultCodes.SUCCESS_200) {
            return undefined
        } else {
            return parseResponseError(response.status)
        }
    }

export const getAmountAttemptsThunk = (userId: number) =>
    async (dispatch: AppDispatch) => {
        const response = await lkApi.getAmountAttempts(userId)
        if (response.status === ResultCodes.SUCCESS_200 ||
            response.status === ResultCodes.FORBIDDEN_403) {
            dispatch(setAmountAttempts(response.data.amount_attempts))
        }
    }


export const showModalAfterSeriesThunk = (amountAttempts: number) =>
    async (dispatch: AppDispatch, getState: GetState) => {
        switch (amountAttempts) {
            case 3:
                dispatch(setModalOpen('after-first-video'))
                break
            case 2:
                dispatch(setModalOpen('after-second-video'))
                break
            case 1:
                dispatch(setModalOpen('after-third-video'))
                break
            default:
                return
        }
        return undefined
    }

export const setDescribedSideThunk = () =>
    async (dispatch: AppDispatch, getState: GetState) => {
        const videoNumber = getState().videoRecord.videoNumber
        let described: Described
        switch (videoNumber) {
            case 1:
                described = (Math.floor(Math.random() * 10) % 2) === 0 ? Described.POSITIVE : Described.NEGATIVE
                const order = described === Described.POSITIVE ? true : false
                dispatch(setDescribedSide(described))
                dispatch(setOrder(order))
                break
            case 2:
                const describedSide = getState().videoRecord.describedSide
                described = describedSide === Described.POSITIVE ? Described.NEGATIVE : Described.POSITIVE
                dispatch(setDescribedSide(described))
                break
            case 3:
                dispatch(setDescribedSide(Described.TOTAL))
                break
            default:
                break
        }
    }
