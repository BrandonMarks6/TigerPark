export const getSpots = (amount: number) => {
    const spots: Spot[] = [];
    for(let i = 0; i < amount; i++) {
        spots.push({
            id: i,
            isAvailable: true
        })
    }
    return spots
}

export type Spot = {
    id: number
    isAvailable: boolean
}

export type LotType = {
    name: string
    address: string
    open: 100
    capacity: 500
    spots?: Spot[]
}

