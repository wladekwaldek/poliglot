import React from "react"
import classes from "./ArrowRight.module.css";

const ArrowRight = (props) => {
    return (
        <div className={classes.arrow + ' ' + classes.arrow_right} onClick={props.incr}></div>
    )
}

export default ArrowRight