import { getWheels } from "./database.js"; //import wheels state from database

const wheels = getWheels() //put return of wheels state exporting function in instantiated variable

//make an event listener for when a user seelects a wheels from the wheels radio button html
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            window.alert(`You R choosing the wheel ${event.target.value}`)
        }
    }
)

//Define the function that will put the list of wheels options into the html.  This gets imported on the main.js to be called in our html layout 
export const Wheels = () => {
    let html = "<ul>"

    for (const wheel of wheels) {
        html += `<li>
                    <input type="radio" name="wheel" value="${wheel.id}"/> ${wheel.name}
                 </li>`
    }
    
    html += "</ul>"
    return html
}