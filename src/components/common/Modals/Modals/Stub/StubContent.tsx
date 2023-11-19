import React from "react"
import { useClick } from "../../../../libs/hooks/modal-hooks"
import styles from "./Stub.module.scss"


export const StubContent = ({
    setIsOpen
}: {
    setIsOpen: (isOpen: boolean) => void
}) => {
    const handleOnClick = useClick(setIsOpen)

    return (
        <div className={styles.modalStub}>
            <p className={styles.popup__text}>
                Спасибо за интерес.
            </p>
            <p className={styles.popup__text}>
                Сайт находится на стадии реконструкции.
            </p>
            <p className={styles.popup__text}>
                Следите за новостями в нашем телеграмм канале
            </p>
            <div className={styles.popup__buttons}>
                <a
                    href="https://t.me/talk_aboutall"
                    target="_blank" rel="noreferrer"
                    className={`${styles.popup__button} ${styles.popup__button_forvard}`}>
                    Наш телеграм
                </a>
                <button
                    onClick={handleOnClick}
                    className={`${styles.popup__button} ${styles.popup__button_back}`}>
                    На главную
                </button>
            </div>
        </div>
    )
}