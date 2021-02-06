import React, {useContext} from 'react'
import classes from './Content.module.css'
import Social from './social/Social'
import Homecontent from'./homecontent/Homecontent'
import English from'./english/English'
import Words from "./words/Words"
import FormLogin from "./form/FormLogin"
import Chat from "./cabinet/Chat"
import Cabinet from "./cabinet/Cabinet";
import {Route} from 'react-router-dom'

const Content = () => {
    return (
        <div className={classes.content}>
            <Route path='/' render={() => <Homecontent />} exact />
            <Route path='/words/english' component={English} exact />
            <Route path='/api/words/:uri/:type?' render={() => <Words />} />
            <Route path='/login'>
                <FormLogin />
            </Route>
            <Route path='/chat'>
                <Chat />
            </Route>
            <Route path='/cabinet'>
                <Cabinet/>
            </Route>
            <Social />

        </div>
        )
}

export default Content

