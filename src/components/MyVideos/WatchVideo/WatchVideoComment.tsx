import React, { ChangeEvent, MouseEvent, useCallback, useEffect, useState } from "react"
import { Record } from "api/types"
import { useCommentInitialState } from "components/libs/hooks/form-hooks"
import { CommentInputErrors, CommentInputState, CommentVisited } from "components/libs/types/form-types"
import { isInputErrors, validateInputsAndSetInputErrors } from "components/libs/utils/form-utils"
import { useAppDispatch, useAppSelector } from "store/redux-store/libs/hooks"
import { saveCommentThunk, selectComment, selectRecord, sendVideoToEmailThunk } from "store/redux-store/slices/videoRecordSlice"
import { setModalOpen } from "store/redux-store/slices/modalSlice"
import { setArchivingError } from "store/redux-store/slices/errorSlice"
import { QuestionComment } from "components/common/SVG/Question"
import { setIsArchiving } from "store/redux-store/slices/uiSlice"
import { 
    ButtonsWrapper, Comment, CommentWrapper, MyNotesLink, NotesWrapper, QuestionWrapper, 
    SaveCommentButton, SendEmailButton 
} from "./styled/CommentStyled"
import { ResponseErrorMessage } from "store/redux-store/libs/types"
import { selectAppText } from "store/redux-store/slices/langSlice"


export const WatchVideoComment = () => {
    const dispatch = useAppDispatch()

    const { 
        buttons: { myRecords, saveComment, sendToEmail }, placeholder 
    } = useAppSelector(selectAppText).videos.watchVideo

    const record: Record | null = useAppSelector(selectRecord)
    const comment = useAppSelector(selectComment)
    const { errors } = useAppSelector(selectAppText).forms

    const { initialInputErrors, initialVisited } = useCommentInitialState()
    const [sendCommentButtonDisabled, setSendCommentButtonDisabled] = useState<boolean>(false)
    
    const [inputState, setInputState] = useState<CommentInputState>(() => {
        if (comment) {
            return { comment }
        } else {
            return { comment: "" }
        }
    })
    const [inputVisisted, setInputVisited] = useState<CommentVisited>(initialVisited)
    const [inputErrors, setInputErrors] = useState<CommentInputErrors>(initialInputErrors)

    useEffect(() => {
        if (comment) {
            setInputState({ comment })
        }
    }, [comment])

    useEffect(() => {
        if (inputVisisted.comment) {
            setSendCommentButtonDisabled(isInputErrors(inputErrors))
        }
    }, [inputErrors, setSendCommentButtonDisabled, inputVisisted.comment])

    const handleCommentOnChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        setInputState(prevInputState => ({ ...prevInputState, [name]: value }))
        setInputVisited(prevInputVisited => ({ ...prevInputVisited, [name]: true }))
        validateInputsAndSetInputErrors<CommentInputErrors>({ name, value }, errors, setInputErrors)
    }, [errors])

    const handleSendCommentOnClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setSendCommentButtonDisabled(true)
        if (record) {
            dispatch(setModalOpen('save-comment'))
            dispatch(saveCommentThunk(record.id, inputState.comment as string))
                .catch((error: any) => {
                    setInputState({ comment: comment as string })
                })
                .finally(() => {
                    setInputVisited(initialVisited)
                    setInputErrors(initialInputErrors)
                })
        }

    }, [dispatch, initialInputErrors, initialVisited, inputState.comment, record, comment])

    const sendVideoToEmailOnClick = useCallback(() => {
        if (record) {
            dispatch(setIsArchiving(true))
            dispatch(setModalOpen('archiving'))
            dispatch(sendVideoToEmailThunk(record.id))
                .then((errorMessage: ResponseErrorMessage) => {
                    if (errorMessage) {
                        dispatch(setArchivingError(true))
                    }
                })
                .catch((error: any) => {
                    dispatch(setArchivingError(true))
                    setInputState({ comment: "" })
                })
                .finally(() => {
                    dispatch(setIsArchiving(false))
                })
        }
    }, [dispatch, record])

    return (
        <>
            <CommentWrapper>
                <Comment
                    className={`input ${(inputVisisted.comment && inputErrors.comment) ? "input_error"
                        : (inputVisisted.comment && !inputErrors.comment) ? "input_success" : ""}`}
                    value={inputState.comment ? inputState.comment : ""}
                    onChange={handleCommentOnChange}
                    name="comment"
                    rows={6}
                    placeholder={placeholder}
                />
                <QuestionWrapper>
                    <QuestionComment />
                </QuestionWrapper>
            </CommentWrapper>
            {(inputVisisted.comment && inputErrors.comment) &&
                <div className="error-message">{inputErrors.comment}</div>}

            <ButtonsWrapper>
                <SendEmailButton
                    onClick={sendVideoToEmailOnClick}
                >{sendToEmail}
                </SendEmailButton>

                <NotesWrapper>
                    <SaveCommentButton
                        type="submit"
                        onClick={handleSendCommentOnClick}
                        disabled={sendCommentButtonDisabled}
                    >{saveComment}
                    </SaveCommentButton>

                    <MyNotesLink to="/mynotes">{myRecords}</MyNotesLink>
                </NotesWrapper>
            </ButtonsWrapper>
        </>
    )
}