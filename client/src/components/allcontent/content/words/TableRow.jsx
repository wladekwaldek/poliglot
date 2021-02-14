import React, {useCallback, useContext, useEffect, useState} from "react"
import classes from './TableRow.module.css'
import {useHttp} from "../../../../hooks/req";
import {AuthContext} from "../../../../context/authContext";

const TableRow = (props) => {
    //const [word, setWord] = useState({len: props.values.len, org: props.values.org, rus: props.values.rus})
    const {request} = useHttp()
    const auth = useContext(AuthContext)

    //useEffect(useCallback(() => {
    //    setWord({len: props.values.len, org: props.values.org, rus: props.values.rus})
    //}, []), [props])

    const addWords = async ()=>{
        if (!auth.isAuthenticated) {
            alert('Авторизуйтесь, чтобы добавлять слова в словарь.')
        } else {
            const data = await request('/api/add-words', 'POST', {...props.values, id: auth.userId}, {})
            alert(data.message)
        }
    }

    return (
        <tr>
            <td className={classes.td}>
                <div className={classes.plus}
                     onClick={addWords}
                title='добавить в словарь?'>+</div>
                {props.values.org}</td>
            <td>{props.values.rus}</td>
        </tr>
    )
}

export default TableRow