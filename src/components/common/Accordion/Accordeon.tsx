import { ReactNode, useState } from "react";
import styles from "./Accordeon.module.scss"

export const Accordeon = ({
    children,
} : {
    children: ReactNode
}) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <div className={styles.accordeon}>
            { 
                isOpen
                    ?  children
                    :   null 
            }

            <button
                className={styles.button}
                onClick={handleToggle}
            >
                { isOpen ? 'Свернуть' : 'Подробнее'}
            </button>
        </div>
    )
}