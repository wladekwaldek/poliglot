import React from "react"
import classes from "./ArrowLeft.module.css";

const ArrowLeft = (props) => {
    return (
        <div className={classes.arrow + ' ' + classes.arrow_left} onClick={props.decr}></div>
    )
}

export default ArrowLeft