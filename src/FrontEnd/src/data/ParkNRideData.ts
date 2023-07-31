import {getSpots, LotType} from "./LotType";

const parkNRideData: LotType[] = [
    {
        name: 'P-1',
        address: '6661 dog street',
        open: 100,
        capacity: 500,
        spots: getSpots(100)
    },
]

export default parkNRideData;