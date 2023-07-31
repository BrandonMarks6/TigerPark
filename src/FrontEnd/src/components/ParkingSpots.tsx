import React, { useContext } from 'react';
import {Grid} from "@mui/material";
import '../styles/ParkingSpots.css'
import {Spot} from "../data/LotType";
import axios from "axios";
import { domain } from "../App";
import { UserContext } from '../App';

interface ParkingSpotsProp {
    name: string
    spots: Spot[]
    fetchData: () => any
}

const ParkingSpots = ({ name, spots, fetchData } : ParkingSpotsProp) => {
    const [userContext, setUserContext] = useContext<any>(UserContext)

    async function reserveSpot(name: string, spot: number) {
        if (!userContext.reserved) {
            setUserContext((prevState: any) => ({
                ...prevState,
                "reserved": {name, spot}
            }));
        } else {
            delete userContext.reserved
            setUserContext(userContext)
        }

        await axios.post(`${domain}/lots/reserve`, {
            username: userContext.username,
            startTime: userContext.startTime,
            endTime: userContext.endTime,
            name: name,
            spot: spot
        })
        await fetchData()
    }
    return (
        <div className='parking-spots'>
            <h3>{name}</h3>
            {!userContext.reserved &&
            <Grid container columns={10} >
                {spots.map((spot) =>
                    <Grid item xs={1}>
                        <div
                            className="parking-spot"
                            onClick={() => reserveSpot(name, spot.id)}>
                            spot {spot.id} </div>
                    </Grid>
                )}
            </Grid>}
            {userContext.reserved && 
            <button className='button' onClick={() => {
                reserveSpot(userContext.reserved.name, userContext.reserved.spot)
            }}>Unreserve {userContext.reserved.name} Spot: {userContext.reserved.spot}</button>}
        </div>
    );
};

export default ParkingSpots;
