import { getInteriors, setInterior } from "./database.js"; //import interiors state from database

const interiors = getInteriors() //put return of interiors state exporting function in instantiated variable

//make an event listener for when a user seelects a paint color from the interior radio button html
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(psreseInt(event.target.value))
        }
    }
)

//Define the function that will put the list of interior options into the html.  This gets imported on the main.js to be called in our html layout 
export const Interiors = () => {
    let html = "<ul>"

    for (const interior of interiors) {
        html += `<li>
                    <input type="radio" name="interior" value="${interior.id}"/> ${interior.name}
                 </li>`
    }
    
    html += "</ul>"
    return html
}