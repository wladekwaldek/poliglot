import React, { useRef } from 'react'
import classes from './Allcontent.module.css'
import Aside from './aside/Aside'
import Content from './content/Content'
import { useMediaQuery } from 'react-responsive'

const Allcontent = () => {
    const fontSize = useMediaQuery({query: '(max-width: 650px)'})

    return (fontSize ? 
        <div className={classes.all_content2}>
	        <Content />
        </div>  : 
        <div className={classes.all_content}>
        <Aside />
        <Content />
    </div>    
    )
}

export default Allcontent
