import {getSpots, LotType} from "./LotType";

const employeeData: LotType[] = [
    {
        name: 'E-1',
        address: '6661 dog street',
        open: 100,
        capacity: 500,
        spots: getSpots(100)
    },
]

export default employeeData;