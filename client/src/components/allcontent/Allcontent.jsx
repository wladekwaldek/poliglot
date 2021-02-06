import React from 'react'
import classes from './Allcontent.module.css'
import Aside from './aside/Aside'
import Content from './content/Content'

const Allcontent = () => {
    return (
        <div className={classes.all_content}>
            <Aside />
	        <Content />
        </div>      
    )
}

export default Allcontent
