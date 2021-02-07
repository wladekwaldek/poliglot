import React, {useCallback, useContext, useEffect, useState} from 'react'
import classes from './Links.module.css'
import {NavLink} from 'react-router-dom'
import {AuthContext} from "../../../context/authContext"
import { useMediaQuery } from 'react-responsive'

const Links = () => {
    const fontSize = useMediaQuery({query: '(max-width: 635px)'})
    const auth = useContext(AuthContext)
    const data = JSON.parse(localStorage.getItem('userData'))
    const [links, setLinks] = useState([])

    useEffect(() => {
        setLinks([
            {to: '/words/english', kind: 'English'},
            {to: '/words/francais.html', kind: 'Francais'},
            {to: '/words/deutsche.html', kind: 'Deutsche'},
            {to: '/words/#', kind: 'Polish'},
            {to: '/chat', kind: 'Чат'},
            {to: '/login', kind: 'Вход'}
        ])
        if (auth.userName)
        setLinks([...links, {to: '/cabinet', kind: auth.userName.slice(0, 4).toUpperCase()}])
    }, [auth.userName])

    return (fontSize ?
        <div className={classes.links}>
            <NavLink to="/"><i className="fa fa-home" style={{fontSize: '3vw'}} /></NavLink>
            {links.map((link, index) => <NavLink key={index + 1} to={link.to} style={{fontSize: '3vw'}}>{link.kind}</NavLink>)}
        </div> : 
        <div className={classes.links}>
        <NavLink to="/"><i className="fa fa-home" /></NavLink>
        {links.map((link, index) => <NavLink key={index + 1} to={link.to} >{link.kind}</NavLink>)}
    </div>
    )
}

export default Links
