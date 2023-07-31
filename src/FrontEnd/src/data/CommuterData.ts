import {getSpots, LotType} from "./LotType";

const commuterData: LotType[] = [
    {
        name: 'C-1',
        address: '6661 dog street',
        open: 100,
        capacity: 500,
        spots: getSpots(100)
    },
    {
        name: 'C-2',
        address: '6661 dog street',
        open: 100,
        capacity: 500,
        spots: getSpots(10)
    },

]

export default commuterData;