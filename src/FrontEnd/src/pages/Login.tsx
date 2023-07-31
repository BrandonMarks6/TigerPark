import React, {useContext, useState} from 'react';
import Header from "../components/Header";
import Background from "../assets/clemson-bck.png";
import '../styles/Home.css'
import '../styles/Login.css'
import {useCookies} from "react-cookie";
import {Link} from "react-router-dom";
import { domain, UserContext } from "../App";
import axios from "axios";


const Login = () => {
    const [userContext, setUserContext] = useContext<any>(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <section className="home">
            <Header />
            <div className="Login">
                <div className="LoginBox">

                    <div className="LoginHeader">
                        Login
                    </div>
                    <div className="inputs">
                        <input onChange={e => setUsername(e.target.value)} className="email" placeholder="Username"/>
                        <input onChange={e => setPassword(e.target.value)} className="password" placeholder="Password" type="password"/>
                    </div>

                    <div style={{display:"flex", justifyContent: "center"}}>
                        <Link to='/'>
                            <button onClick={() => {
                                axios.post(`${domain}/auth`, {
                                    username,
                                    password
                                }).then(() => {
                                    setUserContext((prevState: any) => ({
                                        ...prevState,
                                        username,
                                    }));
                                })
                            }} className="submitButton">Login</button>
                        </Link>
                    </div>

                </div>

            </div>
            <img src={Background} alt="bg"/>
        </section>
    );
};

export default Login;