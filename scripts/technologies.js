import { getTechnologies, setTechnology } from "./database.js"; //import technologies state from database

//BIRDS EYE VIEW: this module's 2 main jobs:  display paint color options for user, and store their transient selection.



const technologies = getTechnologies() //put return of technologies state exporting function in instantiated variable



//make an event listener: when user selects a technology from the technology radio button html, selection is stored as transient data in orderBuilder object in database.js 
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "techology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)



//Define the function that will put the list of technologies options into the html.  This gets imported on the main.js to be called in our html layout 
export const Technologies = () => {
    let html = "<ul>"

    for (const technology of technologies) {
        html += `<li>
                    <input type="radio" name="technology" value="${technology.id}"/> ${technology.name}
                 </li>`
    }
    
    html += "</ul>"
    return html
}