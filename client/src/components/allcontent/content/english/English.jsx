import React from 'react'
import classes from './English.module.css'
import Grammar from "./grammar/Grammar"
import ArrowLeft from "./grammar/ArrowLeft"
import ArrowRight from "./grammar/ArrowRight"

class English extends React.Component {
    constructor(props) {
        super(props)
        this.state = {index: 0}
        this.incr = this.incr.bind(this)
        this.decr = this.decr.bind(this)
    }

    incr () {
        if (this.state.index < 6) return this.setState({index: this.state.index + 1})
        return this.setState({index: 0})
    }

    decr () {
        if (this.state.index > 0) return this.setState({index: this.state.index - 1})
        return this.setState({index: 6})
    }

    render() {
        return (
            <div className={classes.tables}>
                <ArrowLeft decr={this.decr} />
                <div className={classes.black_square}>
                    <Grammar index={this.state.index} />
                </div>
                <ArrowRight incr={this.incr} />
            </div>
        )
    }
}

export default English
