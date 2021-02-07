import React from 'react'
import classes from './TitleText.module.css'
import { useMediaQuery } from 'react-responsive'

const TitleText = () => {
    const isNormal = useMediaQuery({ query: '(min-width: 735px)' })

    if(isNormal) {
        return (
            <div className={classes.large}>
                Человек столько раз человек, сколько языков он знает.
            </div>
        )
    }

    return (
         <div className={classes.portraite}>
            Человек столько раз человек, сколько языков он знает.
        </div>
    )
}

export default TitleText
