import { getPaintColors } from "./database.js"; //import paint colors state from database

const paintColors = getPaintColors() //put return of paint colors state exporting function in instantiated variable

//make an event listener for when a user seelects a paint color from the paint color radio button html
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paintColor") {
            window.alert(`You R choosing the paint color ${event.target.value}`)
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