import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Allcontent from './components/allcontent/Allcontent'
import {BrowserRouter} from 'react-router-dom'
import {AuthContext} from "./context/authContext";
import {useAuth} from "./hooks/auth";

function App() {
    const {login, logout, token, usName, usId} = useAuth()
    const isAuthenticated = !!token

    return (
        <AuthContext.Provider value={{token, login, logout, isAuthenticated, userName: usName, userId: usId}}>
            <BrowserRouter>
                <div className="wraper">
                    <Header/>
                    <Allcontent/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
