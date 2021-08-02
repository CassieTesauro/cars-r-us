import { getOrders } from "./database.js"  //bring in customOrders state 


const buildOrderListItem = (order) => {  //creates html li for the new customOrder object
    return `<li>
                Order #${order.id} was placed on ${order.timestamp}
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