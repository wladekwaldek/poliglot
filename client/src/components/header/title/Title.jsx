import React from 'react'
import classes from './Title.module.css'
import Globe from './globe/Globe'
import TitleText from './titletext/TitleText'
import TitleLinks from './titlelinks/TitleLinks'
import {Route} from'react-router-dom'

const Title = () => {
    return (
        <div className={classes.title}>
            <Route exact path={['/', '/chat', '/login', '/cabinet']} component={TitleText} />
            <Route path={['/words/:category', '/api/words/:category/:kind']} component={TitleLinks} />
            <Globe />
        </div>
    )
}

export default Title
        