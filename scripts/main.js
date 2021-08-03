import { carsRUs } from "./carsRUs.js"  //1. getting database.js state


//BIRDS EYE VIEW: set up html/js connection so html can be written in js to be dynamic; define function to render html; define event listener for state change and rerendering html (AKA customer submits order, display order info.)





const mainContainer = document.querySelector("#container")   //4. Sees that mainContainer ref. the selection of html #container with .querySelector, which allows javascript to modify the html element with the id of container.



const renderAllHTML = () => {      //3. Finds function definition.  renderAllHTML() ref. variable 'mainContainer'.  Needs to find 'mainContainer' instantiation
    mainContainer.innerHTML = carsRUs()    //5. mainContainer ref. the ability to impact #container in html module. .innerHTML method puts the return of carsRUs() function into the html #container element.  Now it needs to find definition for function carsRUs(). {hint- module carsRUs.js}
}


renderAllHTML() //2. Calling function renderAllHTML().  Needs to find function definition.


document.addEventListener("stateChanged", event => { //Re-renders html with updated orders list
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})