import React, { MouseEvent, useCallback, useState } from "react"
import { Minus, Plus } from "components/common/SVG/AccordeonItems";
import styled from "styled-components"
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";


const Title = styled.h2`
    margin: 0;
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 36px;
    line-height: 1.3;

    @media screen and (max-width: 1199px) {
        margin-bottom: 16px;    
    }

    @media screen and (max-width: 767px) {
        font-size: 18px; 
    }
`

const FAQList = styled.ul`
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    list-style-type: none;
    padding-left: 0;

    @media screen and (max-width: 875px) {
        gap: 13px;     
    }
`;

const FAQListItem = styled.li`
    display: block;
    border-bottom: 1px solid #B0B3B8;
`;

const QuestionWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 4px;

    &:hover {
        cursor: pointer;
    }
`;

const Question = styled.h3`
    margin: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6;

    @media screen and (max-width: 1199px) {
        margin-right: 40px;
        font-size: 16px;
    }

    @media screen and (max-width: 767px) {
        margin-right: 20px;
    }
`;

const Answer = styled.p`
    max-width: 1088px;
    margin: 0;
    margin-bottom: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    
    @media screen and (max-width: 1199px) {
        max-width: 85%;
        font-size: 14px;
    }
`;

const Sign = styled.span`
    margin-left: auto;
`;

export const FAQPageContainer = () => {
    const [currentOpenItems, setCurrentOpenItems] = useState<number[]>([])
    const { faqs, title } = useAppSelector(selectAppText).faqPage

    const handleToggleAnswerOnClick = useCallback(((event: MouseEvent<HTMLParagraphElement>) => {
        const question = event.currentTarget
        const answer = question.nextElementSibling

        if (answer) {
            answer.classList.toggle("hiddenItem")
        }
        setCurrentOpenItems(prevCurrentOpenItems => {
            if (question.dataset.id) {
                const currentId: number = +question.dataset.id
                if (prevCurrentOpenItems.includes(currentId)) {
                    return prevCurrentOpenItems.filter(val => val !== currentId)
                } else {
                    return [...prevCurrentOpenItems, currentId]
                }
            }
            return prevCurrentOpenItems
        })
    }), [])

    return (
        <>
            <Title>{ title }</Title>
            <FAQList>
                { faqs.map(faqItem => (
                    <FAQListItem key={faqItem.id}>
                        <QuestionWrapper 
                            data-id={faqItem.id}
                            onClick={handleToggleAnswerOnClick}
                        >
                            <Question>{ faqItem.question }</Question>
                            <Sign>
                                { currentOpenItems.some(id => id === faqItem.id) ? <Minus/> : <Plus/> }
                            </Sign> 
                        </QuestionWrapper>
                        <Answer className="hiddenItem">{ faqItem.answer }</Answer>
                    </FAQListItem>
                )) }
            </FAQList>
        </>
    )
}
