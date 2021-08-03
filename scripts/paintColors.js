import { getPaintColors, setPaintColor } from "./database.js"; //import paint colors state from database


//BIRDS EYE VIEW: this module's 2 main jobs:  display paint color options for user, and store their transient selection.




const paintColors = getPaintColors() //put return of paint colors state exporting function in instantiated variable



//make an event listener: when user selects a paint color from the paint color radio button html, selection is stored as transient data in orderBuilder object in database.js 
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paintColor") {
            setPaintColor(parseInt(event.target.value))  
        }
    }
)



//Define the function that will put the list of paint color options into the html.  This gets imported on the main.js to be called in our html layout 
export const PaintColors = () => {
    let html = "<ul>"

    for (const paintColor of paintColors) {
        html += `<li>
                    <input type="radio" name="paintColor" value="${paintColor.id}"/> ${paintColor.name}
                 </li>`
    }
    
    html += "</ul>"
    return html
}