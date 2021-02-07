import React from "react"
import classes from './Words.module.css'
import ArrowLeft from "../english/grammar/ArrowLeft"
import ArrowRight from "../english/grammar/ArrowRight"
import {withRouter} from "react-router-dom";
import TableRow from "./TableRow";
import preloader from '../../../../img/preloader.gif'

class Words extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            words: [{_id: 1, len: '', org: '', rus: ''}],
            page: 1,
            count: 0,
            limit: 2,
            kind: this.props.match.params.type,
            uri: this.props.match.params.uri,
            isFatching: true
        }
        this.incr = this.incr.bind(this)
        this.decr = this.decr.bind(this)
    }

    componentDidMount() {
        this.sendRequest(this.setUrl())
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.type !== prevState.kind
            || this.props.match.params.uri !== prevState.uri) {
            this.setState({page: 1})
            this.setState({kind: this.props.match.params.type})
            this.setState({uri: this.props.match.params.uri})
            this.sendRequest(this.setUrl())
        }
        if (this.state.page !== prevState.page)  {
            this.sendRequest(this.setUrl())
        }
    }

        async sendRequest(url)  {
            this.setState({isFatching: true})
            await fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.setState({words: data.resul, count: data.count})
                })
                .catch(err => console.log(err))
            this.setState({isFatching: false})
        }

    setUrl = () => `/api/words/${this.state.uri}/${this.state.kind}?page=${this.state.page}&limit=${this.state.limit}`
    getTotalCount = () => Math.ceil(this.state.count / this.state.limit)

    incr = () => {
            if (this.state.page < this.getTotalCount()) {
                this.setState({page: this.state.page + 1})
            } else {
                this.setState({page: 1})
            }
    }

    decr = () => {
            if (this.state.page > 1) {
                this.setState({page: this.state.page - 1})
            } else {
                this.setState({page: this.getTotalCount()})
            }
    }

    render() {
        return (
            <>
                {this.state.isFatching ? <img src={preloader} /> : 
                <div className={classes.tables}>
                    <ArrowLeft decr={this.decr} />
                    <table className={classes.words}>
                        <thead>
                        <tr>
                            <th>{this.state.uri.toUpperCase()}</th>
                            <th>ПЕРЕВОД</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.words.map(word =>
                                <TableRow key={word._id} values={word} />
                                )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={2}>{String(this.state.page) + ' ... ' + String(this.getTotalCount())}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>{this.state.count}</td>
                            </tr>
                        </tfoot>
                    </table>
                    <ArrowRight incr={this.incr}/>
                </div>}
            </>
        )
    }
}


export default withRouter(Words)
