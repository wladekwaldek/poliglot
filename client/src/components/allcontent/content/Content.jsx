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
import { useMediaQuery } from 'react-responsive'

const Content = () => {
    const contCenter = useMediaQuery({query: '(max-width: 650px)'})
    let style = classes.content
    if (contCenter) style = classes.content2
    return (
        <div className={style}>
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

