import React from 'react'
import classes from './Header.module.css'
import Links from './links/Links'
import Title from './title/Title'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
    const headerSize = useMediaQuery({query: '(min-header: 1800px)'})
    let header = classes.header
    if (headerSize) header = classes.headerBig 
     
    return (
        <div className={header}>
            <Links />
            <Title />
        </div>    
    )
}

export default Header