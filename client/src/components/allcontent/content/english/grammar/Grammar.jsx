import React from "react"
import Pronoun from './Pronoun'
import QuestionWords from './QuestionWords'
import ToDo from './ToDo'
import ToBe from './ToBe'
import Degree from "./Degree"
import Pretext from "./Pretext"
import PreposOfTime from "./PreposOfTime"

const Grammar = (props) => {
    let i = props.index
    switch (i) {
        case 1 :
            return <QuestionWords />
        case 2:
            return <ToDo />
        case 3:
            return <ToBe />
        case 4:
            return <Degree />
        case 5:
            return <Pretext />
        case 6:
            return <PreposOfTime />
        default:
            return <Pronoun />
    }
}

export default Grammar