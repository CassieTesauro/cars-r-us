//This module is responsible for the basic html layout.  It's in a js module so the html can be dynamic

//The state from other js modules where we specified what to do with the data from our different ERD tables/database object arrays needs to be imported to this page.

import { PaintColors } from "./paintColors.js"
import { Interiors } from "./interiors.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"
import { Orders } from "./orders.js"
import { addCustomOrder } from "./database.js"


document.addEventListener("click", clickEvent => {  //function - when user clicks on the order button, trigger ddCustomOrder() on database.js (changes transient order --> permanent order)
    if (clickEvent.target.id === "orderButton") {
        addCustomOrder() 
    }
})

//We need an exportable function that will return our basic html.  Within the html, we'll interpolate a function from each of the modules imported above.  Those inner functions are responsible for getting the data we need from the database and making an html list with it to be plugged in to the html on this page.

export const carsRUs = () => {

    return `
    <h1>You R Welcome At Cars R Us</h1>  

    <article class="choices">
        <section class="choices__paintColors options">
            <h2>Paint Colors</h2>
            ${PaintColors()} 
        </section>
        <section class="choices__interiors options">
            <h2>Interiors</h2>
            ${Interiors()}
        </section>
        <section class="choices__technologies options">
            <h2>Technologies</h2>
            ${Technologies()}
        </section>
        <section class="choices__wheels options">
            <h2>Wheels</h2>
            ${Wheels()}
        </section>
    </article>

    <article>
        <button id="orderButton">Build My Car</button>
    </article>

    <article class="customOrders">
        <h2>Completed Car Orders</h2>
        ${Orders()} 
    </article>
`

}