import { getOrders } from "./database.js"  //bring in customOrders state 
import { getPaintColors} from "./database.js"  //bring in customOrders state 
import { getInteriors } from "./database.js"  //bring in customOrders state 
import { getWheels} from "./database.js"  //bring in customOrders state 
import { getTechnologies } from "./database.js"  //bring in customOrders state 


const buildOrderListItem = (order) => {  //creates html li for the new customOrder object 

    const paintColors = getPaintColors()
        const foundPaintColor = paintColors.find(
            (paintColor) => {
                return paintColor.id === order.paintColorId
            }
        )

    const interiors = getInteriors()
        const foundInterior = interiors.find(
            (interior) => {
                return interior.id === order.interiorId
            }
        )

    const wheels = getWheels()
        const foundWheel = wheels.find(
            (wheel) => {
                return wheel.id === order.wheelId
            }
        )

    const technologies = getTechnologies()
        const foundTechnology = technologies.find(
            (technology) => {
                return technology.id === order.technologyId
            }
        )
    
    
    const totalCost = foundPaintColor.price + foundInterior.price + foundWheel.price + foundTechnology.price
   

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
   

    return `<li>
                Order #${order.id} costs ${costString}
            </li>`
}




export const Orders = () => { //adds new li above to existing ul and returns updated html ul
    
    const orders = getOrders() //stores existing ul data
    let html = "<ul>" 
    const listItems = orders.map(buildOrderListItem) // new li added to existing ul in copied string array
    html += listItems.join("") // array strings joined into one string with nothing between them
    html += "</ul>"
    return html  //updated html ul returned amd ready for export
}


//next step: Orders() gets imported to carsRUs.js and is interpolated in the html in article .customOrders, under heading 'Completed Car Orders'