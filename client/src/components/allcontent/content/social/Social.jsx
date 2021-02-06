import React from 'react'
import classes from './Social.module.css'

const Social = () => {
    return (
        <div className={classes.social}>
            <a href="#"><i className="fa fa-instagram" /></a>
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-facebook" /></a>
            <a href="#"><i className="fa fa-vk" /></a>
        </div>   
    )
}

export default Social
