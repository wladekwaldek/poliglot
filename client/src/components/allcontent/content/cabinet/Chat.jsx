import React from "react"
import {AuthContext} from "../../../../context/authContext";

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            li: [],
            connect: {}
        }
    }

    componentDidMount() {
        this.webSock('ws://poliglot.chvv.info:8080')
        console.log('render')
    }

    componentWillUnmount() {
        if (this.context.isAuthenticated) {
            this.state.connect.close()
        } else {return}
    }

    data = JSON.parse(localStorage.getItem('userData'))

    webSock = async (url) => {
        try {
            if (this.context.isAuthenticated || this.data) {
                await this.setState({connect: new WebSocket(url)})
                this.state.connect.onmessage = e => {
                    this.setState({li: [...this.state.li, e.data]})
                }
                this.state.connect.onerror = error => {
                    console.log(error)
                }
            } else {return}
        } catch (e) {}
    }

    changeText = event => {
        this.setState({text: event.target.value})
    }

    sendMessage = () => {
        this.state.connect.send(this.state.text)
        this.setState({text: ''})
    }

    render() {
        if (this.context.isAuthenticated) {
        return (
            <>
                <h1>Чат</h1>

                <form id="form" onSubmit={(event) => {
                    event.preventDefault()
                }}>
                    <input type="text" name="message" onChange={this.changeText} value={this.state.text} />
                    <input type="submit" value="Отправить" onClick={this.sendMessage} />
                    {/*<input type="submit" value="Chao" onClick={chao}/>*/}
                </form>

                <ul id="messages">{this.state.li.map((el, index) => <li key={index}>{el}</li>)}</ul>

            </>
        )} else {
        return (
            <h1>Чтобы пользоваться чатом войдите в систему.</h1>
        )
    }
    }
}

Chat.contextType = AuthContext


export default Chat
