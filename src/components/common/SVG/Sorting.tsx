import React from "react";


export const SortingNew = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7H13" stroke="white" strokeLinecap="round"/>
            <path d="M5 12H11" stroke="white" strokeLinecap="round"/>
            <path d="M5 17H9" stroke="white" strokeLinecap="round"/>
            <path d="M19 18L22 15M19 18L16 15M19 18L19 6" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const SortingOld = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 17H13" stroke="white" strokeLinecap="round"/>
            <path d="M5 12H11" stroke="white" strokeLinecap="round"/>
            <path d="M5 7H9" stroke="white" strokeLinecap="round"/>
            <path d="M19 6L22 9M19 6L16 9M19 6L19 18" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}