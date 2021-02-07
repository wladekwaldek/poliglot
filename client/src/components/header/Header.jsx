import React from 'react'
//import classes from './Header.module.css'
import Links from './links/Links'
import Title from './title/Title'

const Header = () => {
     
    return (
        <div className="header">
            <Links />
            <Title />
        </div>    
    )
}

export default Header