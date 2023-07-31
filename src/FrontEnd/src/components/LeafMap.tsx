import React from 'react';
import '../styles/LeafMap.css'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {LotMarker} from "../data/LotMarker";
import L from 'leaflet';

const list: LotMarker[] = [
    {
        LotName:"C-1",
        Location:"(East Campus)",
        lat:34.67258669321612,
        lon:-82.82889763605976,
    },
    {
        LotName:"C-11",
        Location:"(Brooks Center)",
        lat:34.672611326669276,
        lon:-82.8361230429396,
    },
    {
        LotName:"C-12",
        Location:"(East C-02)",
        lat:34.67429536542697,
        lon:-82.84117910252314,
    },
    {
        LotName:"C-14",
        Location:"(Seneca River Basin)",
        lat:34.670718852864894,
        lon: -82.8433280795767,
    },
    {
        LotName:"C-02",
        Location:"(South Cemetary)",
        lat:34.674584601017095,
        lon: -82.84283190252312,
    },
    {
        LotName:"C-13",
        Location:"(Nu Street)",
        lat:34.67546732144291,
        lon: -82.84335649618133,
    },
    {
        LotName:"C-04",
        Location:"(Baseball Stadium)",
        lat:34.677926445170456,
        lon:-82.8481174389932,
    },
    {
        LotName:"C-07",
        Location:"(N Stadium)",
        lat:34.67995863112436,
        lon:-82.8444307093638,
    },
    {
        LotName:"Avenue of Champions",
        Location:"(N Stadium)",
        lat:34.68014052470723,
        lon:-82.84296271021243,
    },
    {
        LotName:"C-16",
        Location:"(East Beach Drive)",
        lat:34.67938830106861,
        lon:-82.85077063033938,
    },
    {
        LotName:"C-15",
        Location:"(Esso)",
        lat:34.68298829826037,
        lon:-82.84796450346225,
    },
    {
        LotName:"Ravenel Road",
        Location:"(Little John)",
        lat:34.68155904715596,
        lon:-82.84559879524804,
    },
    {
        LotName:"Little John",
        Location:"(North Lot)",
        lat:34.68114879459782,
        lon:-82.84651611068412,
    },
    {
        LotName:"C-09",
        Location:"(Centennial Blvd) Lot",
        lat:34.680570908494474,
        lon:-82.84491214971628,
    },
    {
        LotName:"C-2A",
        Location:"Upper Intramural Fields",
        lat:34.68237889580935,
        lon:-82.84374770000001,
    },
    {
        LotName:"P-05",
        Location:"Service Road",
        lat:34.67727347099683,
        lon:-82.81564145464765,
    },
    {
        LotName:"P-7",
        Location:"Perimiter Rd.",
        lat:34.67891013438444,
        lon:-82.81761019606728,
    },
    {
        LotName:"P-06",
        Location:"(Snow Lot)",
        lat:34.683542025345425,
        lon:-82.85949557204061,
    },
    {
        LotName:"P-09",
        Location:"(Soccer Complex)",
        lat:34.68057859736555,
        lon:-82.85052641921985,
    },
    {
        LotName:"P-07",
        Location:"(McFadden Lot)",
        lat:34.68070366681457,
        lon:-82.84867856651258,
    },
    {
        LotName:"E-31",
        Location:"(Tennis Center)",
        lat:34.682437666215215,
        lon:-82.84048742056808,
    },
    {
        LotName:"P-01 Extension",
        Location:"(Track)",
        lat:34.67317801454971,
        lon:-82.85012604886973,
    },
];
const icon: L.DivIcon = L.divIcon({
    className: "parking-icon",
    iconSize: [20,20],
    iconAnchor: [0,0],
    popupAnchor: [15,0],
});

const LeafMap = () => {
    return (
        <MapContainer center={[34.683437, -82.837364]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
           {
                list.map((item, index) => (
                    <Marker
                        icon={icon}
                        key={index}
                        position={[item.lat, item.lon]}
                        title={'${item.LotName} at ${item.Location}'}
                    >
                        <Popup>
                            <strong>
                            {item.LotName} at {item.Location}
                            </strong>
                        </Popup>
                    </Marker>
                ))
           }
            <Marker position={[34.683437, -82.837364]}>
                <Popup>
                    Clemson. <br /> Downtown.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default LeafMap;