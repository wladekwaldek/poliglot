import React, {useCallback, useContext, useEffect, useState} from "react"
import classes from './TableRow.module.css'
import {useHttp} from "../../../../hooks/req";
import {AuthContext} from "../../../../context/authContext";

const TableRow = (props) => {
    const [word, setWord] = useState({len: '', org: '', rus: ''})
    const {request} = useHttp()
    const auth = useContext(AuthContext)

    useEffect(useCallback(() => {
        setWord({len: props.values.len, org: props.values.org, rus: props.values.rus})
    }, []), [props])

    const addWords = async ()=>{
        if (!auth.isAuthenticated) {
            alert('Авторизуйтесь, чтобы добавлять слова в словарь.')
        } else {
            const data = await request('/api/add-words', 'POST', {...word, id: auth.userId}, {})
            alert(data.message)
        }
    }

    return (
        <tr>
            <td className={classes.td}>
                <div className={classes.plus}
                     onClick={addWords}
                title='добавить в словарь?'>+</div>
                {word.org}</td>
            <td>{word.rus}</td>
        </tr>
    )
}

export default TableRow