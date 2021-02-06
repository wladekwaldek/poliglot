import React from 'react'
import classes from './TitleLinks.module.css'
import {NavLink} from 'react-router-dom'

const TitleLinks = () => {
    return (
        <div className={classes.words}>
            <div className={classes.menu}>										
                    <NavLink to="/api/words/english/regverbs">Правильные глаголы</NavLink>
                    <NavLink to="/api/words/english/irrverbs">Неправильные глаголы</NavLink>
                    <NavLink to="/api/words/english/expressions">Выражения этикета</NavLink>
            </div>

            <div className={classes.menu}>
                    <NavLink to="/api/words/english/nouns">Существительные</NavLink>
                    <NavLink to="/api/words/english/adjectives">Прилагательные</NavLink>
                    <NavLink to="/api/words/english/adverbs">Наречия</NavLink>
            </div>
	    </div>
	    
    )
}

export default TitleLinks