import React from "react"
import { NavLink } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import styles from "./Legal.module.scss"
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";


export const TermsOfServise = () => {
    const { 
        updatingDate, title, subtitle, 
        introduction: { welcome, link, platform, texts },
        terms
    } = useAppSelector(selectAppText).termsPage

    return (
        <section className={styles.sectionWrapper} id="terms">
            <div className={styles.contentWrapper}>

                <div className={styles.dataWrapper}>
                    <h2 className={styles.contentHeading}>{title}</h2>
                    <p className={styles.data}>{updatingDate}</p>
                </div>

                <h3 className={styles.h3Title}>{subtitle}</h3>
                <p className={styles.contentText}>
                    {welcome}<NavLink className={styles.contentLink} to="/">{link}</NavLink>{platform}
                </p>
                {texts.map(text => (
                    <p key={uuidv4()} className={styles.contentText}>{text}</p>
                ))}

                {terms.map(termsItem => (
                    <React.Fragment key={termsItem.id}>
                        { termsItem.h3title ? <h3 className={styles.h3Title}>{termsItem.h3title}</h3> : null }
                        { termsItem.text ? termsItem.text.map(itemText => (
                            <p key={uuidv4()} className={styles.contentText}>{itemText}</p>
                        )) : null }
                        
                        { termsItem.subTerms ? termsItem.subTerms.map(subTermItem => (
                            <React.Fragment key={uuidv4()}>
                                <h3 className={styles.titleOne}>{subTermItem.titleOne}</h3>
                                { subTermItem.text ? subTermItem.text.map(subItem => (
                                    <p key={uuidv4()} className={styles.contentText}>{subItem}</p>
                                )) : null }
                            </React.Fragment>
                        )) : null }

                    </React.Fragment>
                ))}    
                
            </div>
        </section>
    )
}