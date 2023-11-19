import React from "react"
import { useAppSelector } from "store/redux-store/libs/hooks"
import { selectAppText } from "store/redux-store/slices/langSlice"
import styled from "styled-components"


const Wrapper = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

export const EditPencil = () => {
    const { editPencil } = useAppSelector(selectAppText).forms.tooltips

    return (
        <Wrapper title={editPencil}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.03816 10.7547L3.03815 10.7547C3.03694 10.756 3.03573 10.7572 3.03452 10.7584C3.02472 10.7682 3.01499 10.7779 3.00532 10.7875C2.84285 10.9496 2.69902 11.0932 2.59766 11.2722C2.49629 11.4512 2.44722 11.6484 2.39179 11.8711C2.38808 11.886 2.38435 11.901 2.38057 11.9162L1.55037 15.2369C1.54815 15.2458 1.54592 15.2547 1.54369 15.2637C1.50444 15.4203 1.46254 15.5877 1.44879 15.7282C1.43365 15.8829 1.43718 16.144 1.64659 16.3534C1.856 16.5628 2.11706 16.5663 2.27179 16.5512C2.41233 16.5375 2.57967 16.4956 2.73636 16.4563C2.74529 16.4541 2.75419 16.4518 2.76305 16.4496L6.08384 15.6194C6.09896 15.6156 6.11397 15.6119 6.12886 15.6082C6.35159 15.5528 6.54877 15.5037 6.7278 15.4023C6.90683 15.301 7.05035 15.1571 7.21248 14.9947C7.22332 14.9838 7.23424 14.9729 7.24526 14.9618L15.9393 6.26777L15.9626 6.2445C16.276 5.9311 16.5461 5.66106 16.7333 5.41573C16.9339 5.15281 17.0858 4.86039 17.0858 4.5C17.0858 4.13961 16.9339 3.84719 16.7333 3.58427C16.5461 3.33895 16.2761 3.06892 15.9626 2.75553L15.9393 2.73223L15.2678 2.06066L14.9142 2.41421L15.2678 2.06066L15.2445 2.03737C14.9311 1.72394 14.661 1.45388 14.4157 1.2667C14.1528 1.0661 13.8604 0.914214 13.5 0.914214C13.1396 0.914214 12.8472 1.0661 12.5843 1.2667C12.3389 1.45388 12.0689 1.72395 11.7555 2.03738L11.7322 2.06066L3.03816 10.7547Z" stroke="white"/>
                <path d="M10.5833 2.75008L14.0833 0.416748L17.5833 3.91675L15.25 7.41675L10.5833 2.75008Z" fill="white"/>
            </svg>
        </Wrapper>
    )
}