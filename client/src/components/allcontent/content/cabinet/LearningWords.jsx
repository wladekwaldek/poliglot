import React, {useState} from 'react'

const Row = (props) => {

    const [backgroundColor, setBackgroundColor] = useState('#f08000')

    return (
    <tr>
        <td>{props.word.org}</td>
        <td style={{backgroundColor: backgroundColor}} 
        onMouseOver={()=>{setBackgroundColor('')}}
        onMouseOut={()=>{setBackgroundColor('#f08000')}}>{props.word.rus}</td>
    </tr>
    )
}

export default Row