import React, {useContext, useEffect, useState} from 'react'
import classes from './Form.module.css'
import {useHttp} from "../../../../hooks/req"
import {AuthContext} from "../../../../context/authContext"
import {useHistory} from 'react-router-dom'

const FormLogin = () => {
    const [form, setForm] = useState( {login: '', email: '', password: ''} )
    const {request} = useHttp()

    const auth = useContext(AuthContext)

    const history = useHistory()

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const register = async () => {
        try {
            const mes = await request('/api/register', 'POST', {...form}, {})
            alert(mes.message)
        } catch (e) {
            alert(e.message)
        }
    }

    const login = async () => {
        try {
            const data = await request('/api/login', 'POST', {...form}, {})
            await auth.login(data.token, data.userId, data.userName)
            setForm({login: '', email: '', password: ''})
            history.push('/cabinet')
        } catch (e) {
            alert(e.message)
        }
    }

    const logout = () => {
        auth.logout()
    }

    return (
        <div className={classes.form}>
            <h2>Войдите в систему</h2>
            <div className={classes.login}>
                <input type="text"
                       placeholder="Логин"
                       name="login"
                       onChange={changeHandler}
                       value={form.login}/>
                <input type="email"
                       placeholder="E-mail"
                       name="email"
                       onChange={changeHandler}
                       value={form.email}/>
                <input type="password"
                       placeholder="Пароль"
                       name="password"
                       onChange={changeHandler}
                       value={form.password}/>
            </div>
                <button
                    style={ {backgroundColor: "#228b22"} }
                    onClick={login}
                >Войти</button>
                <button
                    style={ {backgroundColor: "#b22222"} }
                    onClick={register}
                >Регистрация</button>
                <button
                    style={ {backgroundColor: "#b22222"} }
                    onClick={logout}
                >Out</button>

        </div>
    )
}

export default FormLogin