import React, {useState, useContext, useEffect} from "react";
import {useHttp} from "../../../../hooks/req";
import UsersWords from "./UsersWords";

const Cabinet = () => {
    const [form, setForm] = useState({
        len: 'english',
        kind: '',
        org: '',
        rus: ''
    })

    const {request} = useHttp()

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const addWord = async () => {
        const data = await request('/api/add-word', 'POST', {...form}, {})
        setForm({len: 'english', kind: '', org: '', rus: ''})//?
        alert(data.message)
    }

    const data = JSON.parse(localStorage.getItem('userData'))

    return (
        <>
            <UsersWords userId={data.userId}/>
            {data.userName == 'vlad210778' &&
            <div>
                <h2>Добавить слово</h2>
                <div>
                    <input type="text"
                           placeholder="len"
                           name="len"
                           onChange={changeHandler}
                           value={form.len}/>

                    <input type="text"
                           placeholder="kind"
                           name="kind"
                           onChange={changeHandler}
                           value={form.kind}/>

                    <input type="text"
                           placeholder="org"
                           name="org"
                           onChange={changeHandler}
                           value={form.org}/>

                    <input type="text"
                           placeholder="rus"
                           name="rus"
                           onChange={changeHandler}
                           value={form.rus}/>
                </div>

                <button
                    style={{backgroundColor: "#228b22"}}
                    onClick={addWord}
                >Add word
                </button>
            </div>
            }
        </>
    )
}

export default Cabinet