const database = {
    paintColors: [
        {id: 1, name: "Silver", price: 2000},
        {id: 2, name: "Midnight Blue", price: 4000},
        {id: 3, name: "Firebrick Red", price: 4500},
        {id: 4, name: "Spring Green", price: 3000}
    ],
    interiors: [
        {id: 1, name: "Beige Fabric", price: 300},
        {id: 2, name: "Charcoal Fabric", price: 400},
        {id: 3, name: "White Leather", price: 1900},
        {id: 4, name: "Black Leather", price: 1000}
    ],
    technologies: [
        {id: 1, name: "Basic Package", price: 200},
        {id: 2, name: "Navigation Package", price: 500},
        {id: 3, name: "Visibility Package", price: 800},
        {id: 4, name: "Ultra Package", price: 1200}
    ],
    wheels: [
        {id: 1, name: "17-inch Pair Radial", price: 100},
        {id: 2, name: "17-inch Pair Radial Black", price: 200},
        {id: 3, name: "V18-inch Pair Spoke Silver", price: 450},
        {id: 4, name: "18-inch Pair Spoke Black", price: 500}
    ],
    orders: [
        {
            id: 1,
            paintColorId: 2,
            interiorId: 3,
            technologyId: 4,
            wheelId: 2,
            timestamp: 2807202110118
        }
    ],

}

export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({ ...paintColor }))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({ ...technology }))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}
export const getOrders = () => {
    return database.orders.map(order => ({ ...order }))
}