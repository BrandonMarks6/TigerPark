import React, { useContext, useEffect } from 'react';
import Header from "../components/Header";
import Background from "../assets/clemson-bck.png";
import '../styles/Home.css'
import ClockIcon from "../assets/ClockIcon";
import SearchIcon from "../assets/SearchIcon";
import { Link } from "react-router-dom";
import { UserContext } from '../App'

const Home = () => {
    const [userContext, setUserContext] = useContext<any>(UserContext)

    useEffect(() => {
        if (!userContext.username) {

        }
    }, [userContext])

    return (
        <section className="home">
            <Header />
            <div className="hero-container">
                <h1>TigerPark</h1>
                {Object.keys(userContext).length == 0 && <Link to='login' className="button">Login</Link>}
                {Object.keys(userContext).length > 0 && <div className="time-fields">
                    <div className="start-field">
                        <input placeholder="Start" onChange={(event) => {
                            setUserContext((prevState:any) => ({
                                ...prevState,
                                "startTime": event.target.value
                            }));
                        }}/>
                        <ClockIcon />
                    </div>
                    <div className="end-field">
                        <input placeholder="End" onChange={(event) => {
                            setUserContext((prevState: any) => ({
                                ...prevState,
                                "endTime": event.target.value
                            }));
                        }}/>
                        <ClockIcon />
                    </div>
                </div>}
                {Object.keys(userContext).length > 0 && <div className="buttons">
                    <Link to='/parking' className="button">Find Spot <SearchIcon/></Link>
                    <button className='button' onClick={() => setUserContext({})}>Logout</button>
                </div>}
            </div>
            <img src={Background} alt="bg"/>
        </section>
    );
};

export default Home;