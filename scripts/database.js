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
    customOrders: [ //for permantent completed orders
        {
            id: 1,
            paintColorId: 2,
            interiorId: 3,
            technologyId: 4,
            wheelId: 2,
            timestamp: 1627677543583
        }
    ],
    orderBuilder: {} //for transient orders-in-progress

}
//get functions
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
    return database.customOrders.map(customOrder => ({ ...customOrder }))
}

//set functions
export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

//function for orderBuilder --> orders, AKA transient --> permanent order state

export const addCustomOrder = () => {

    const newOrder = {...database.orderBuilder}  //clone the orderBuilder values 

    const lastIndex = database.customOrders.length - 1  //will equal current last index/id value
    newOrder.id = database.customOrders[lastIndex].id + 1 //will equal the index/id value to cloned orderBuilder data (in newOrder)

    newOrder.timestamp = Date.now()  //adds timestamp value to cloned orderBuilder data (in newOrder)

    database.customOrders.push(newOrder) //pushes the newOrder data collected above in this function to the end of customOrders

    database.orderBuilder= {}  //resets orderBuilder object to empty object

    document.dispatchEvent(new CustomEvent("stateChanged")) //triggers event listener for "stateChanged" on main.js
}