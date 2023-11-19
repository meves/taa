import React from "react";

import "./secondaryButton.css"

interface SecondaryButtonProps {
    text: string
}

export const SecondaryButton = ({
    text
} : SecondaryButtonProps) => {
    return (
        <div className="wrapper">
            <button
                className="secondary-button"
            >
                { text }
            </button>
        </div>
    )
}