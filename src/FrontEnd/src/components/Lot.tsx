import React, {HTMLAttributes} from 'react';
import '../styles/Lot.css'
import {LotType} from "../data/LotType";



export interface LotProp extends HTMLAttributes<HTMLDivElement>{
    lot: LotType
}

const Lot = ( { lot, ...props }: LotProp) => {
    return (
        <div className="lot-container" {...props}>
            <h3>{ lot.name }</h3>
            <p>{ lot.address }</p>
            <h5>{ lot.open } / { lot.capacity } available</h5>
        </div>
    );
};

export default Lot;