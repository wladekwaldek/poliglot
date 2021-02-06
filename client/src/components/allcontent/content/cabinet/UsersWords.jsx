import React from "react";
import ArrowLeft from "../english/grammar/ArrowLeft";
import ArrowRight from "../english/grammar/ArrowRight";
import classes from "../words/Words.module.css";
import preloader from '../../../../img/preloader.gif'
import Row from './LearningWords'

class UsersWords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [{org: '', rus: ''}],
            len: [],
            isFatching: true,
            backgroundColor: '#f08000'
        }
    }

    componentDidMount() {
        this.sendRequest(this.setUrl())
    }

    setUrl = () => `/api/get-words/${this.props.userId}`

    sendRequest(url)  {
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({words: data.words, len: data.words.map(word=>word.len), isFatching: false})
            })
            .catch(err => console.log(err))
    }

    len = () => {
        const len = new Set(this.state.len)
        for (let lenguage of len.values()) {
            return (lenguage.toUpperCase())
        }
    }

    render() {
        return (
            <>
                {this.state.isFatching ? <img src={preloader} /> : null}
                <div className={classes.tables}>
                    <ArrowLeft/>
                    <table className={classes.words}>
                        <thead>
                        <tr>
                            <th>{this.len()}</th>
                            <th>ПЕРЕВОД</th>
                        </tr>
                        </thead>
                        <tbody>

                        {this.state.words.map((word, index) => <Row word={word} key={index+1} />)}

                        </tbody>
                        <tfoot>
                        <tr>
                            <td colSpan={2}>{this.state.words.length}</td>
                        </tr>
                        </tfoot>
                    </table>
                    <ArrowRight/>
                </div>
            </>
        )
    }
}

export default UsersWords