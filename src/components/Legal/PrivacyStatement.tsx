import React from "react"
import { NavLink } from "react-router-dom"
import { useAppSelector } from "store/redux-store/libs/hooks";
import { selectAppText } from "store/redux-store/slices/langSlice";
import { v4 as uuidv4 } from "uuid"
import styles from "./Legal.module.scss"


export const PrivacyStatement = () => {
    const {
        updatingDate, 
        title,
        introduction: { welcome, link, platform, text, connectUs },
        privacies  
    } = useAppSelector(selectAppText).privacyPage

    return (
        <section className={styles.sectionWrapper} id="privacy">
            <div className={styles.contentWrapper}>

                <div className={styles.dataWrapper}>
                    <h2 className={styles.contentHeading}>{ title }</h2>
                    <p className={styles.data}>{ updatingDate }</p>
                </div>

                <p className={styles.contentText}>
                    {welcome}<NavLink className={styles.contentLink} to="/">{link}</NavLink>{platform}
                </p>
                <p className={styles.contentText}>{ text }</p> 
                <p className={styles.contentText}>{ connectUs }</p>
                
                { privacies.map(privacyItem => (
                    <React.Fragment key={privacyItem.id}>
                        { privacyItem.h3title ? <h3 className={styles.h3Title}>{ privacyItem.h3title }</h3> : null }
                        { privacyItem.h4title ? <h4 className={styles.h4Title}>{ privacyItem.h4title }</h4> : null }
                        { privacyItem.text ? 
                            privacyItem.text.map(item => (
                                <p className={styles.contentText} key={uuidv4()}>{ item }</p>))
                            : null }
                        { privacyItem.list ?
                            (<ul className={styles.contentList}>
                                {privacyItem.list.map(item => (
                                    <li className={styles.contentListItem} key={uuidv4()}>{ item };</li>
                                ))}
                            </ul>) : null 
                        }
                        { privacyItem.h5level ? 
                            privacyItem.h5level.map((item: {id: number, h5title: string, text: string, list?: string[]}) => (
                                <div key={item.id}>
                                    <h5 className={styles.h5Title}>{ item.h5title }</h5>
                                    <p className={styles.contentText}>{ item.text }</p>
                                    { item.list ? 
                                        item.list.map((listItem: string) => (
                                            <li className={styles.contentListItem} key={uuidv4()}>{ listItem };</li>
                                        )) : null 
                                    }
                                </div>
                            )) : null 
                        }
                        { privacyItem.h6level ? 
                            privacyItem.h6level.map((item: {id: number, h6title: string, text: string | string[], list?: string[]}) => (
                                <div key={item.id}>
                                    <h6 className={styles.h6Title}>{ item.h6title }</h6>
                                    { Array.isArray(item.text) ?
                                        item.text.map(item => (
                                            <p className={styles.contentText} key={uuidv4()}>{item}</p>
                                        )) : 
                                        <p className={styles.contentText}>{item.text}</p>
                                    }
                                    <ul className={styles.contentList}>
                                        { item.list ? 
                                            item.list.map( (listItem: string) => (
                                                <li className={styles.contentListItem} key={uuidv4()}>{ listItem };</li>
                                            )) : null
                                        }
                                    </ul>
                                </div>
                            )) : null
                        }
                    </React.Fragment>
                )) }
                
            </div>
        </section>
    )
}