import { carsRUs } from "./carsRUs.js"  //1. getting database.js state

const mainContainer = document.querySelector("#container") //4. Sees that mainContainer ref. the selection of html #container with .querySelector, which allows javascript to modify the html element with the id of container.

const renderAllHTML = () => { //3. Finds function definition.  renderAllHTML() ref. variable 'mainContainer'.  Needs to find 'mainContainer' instantiation
    mainContainer.innerHTML = carsRUs() //5. mainContainer ref. the ability to impact #container in html module. .innerHTML method puts the return of carsRUs() function into the html #container element.  Now it needs to find definition for function carsRUs(). {hint- module carsRUs.js}
}

renderAllHTML() //2. Calling function renderAllHTML().  Needs to find function definition.

