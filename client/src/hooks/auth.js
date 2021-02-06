import {useState, useCallback, useEffect} from 'react'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [usId, setUsId] = useState(null)
    const [usName, setUsName] = useState('')

    const login = useCallback((jwtToken, id, name) => {
        setToken(jwtToken)
        setUsId(id)
        setUsName(name)
        localStorage.setItem('userData', JSON.stringify({
            token: jwtToken, userId: id, userName: name
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUsId(null)
        setUsName('')
        localStorage.removeItem('userData')
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        if(data  && data.token) {
            login(data.token, data.userId, data.userName)
        }
    }, [login])

    return {login, logout, token, usName, usId}
}