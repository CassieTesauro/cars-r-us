import { getWheels, setWheel } from "./database.js"; //import wheels state from database

//BIRDS EYE VIEW: this module's 2 main jobs:  display paint color options for user, and store their transient selection.



const wheels = getWheels() //put return of wheels state exporting function in instantiated variable



//make an event listener: when user selects a wheel from the wheel radio button html, selection is stored as transient data in orderBuilder object in database.js 
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.name))
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