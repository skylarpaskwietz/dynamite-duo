// Import the function references that generate the HTML lists
import { HeroList } from "./heroes.js"
import { VillainList } from "./villains.js"

// Capture the return values of the HTML list generators
const heroListHTML = HeroList()
const villainListHTML = VillainList()

// Build up a single string containing both chunks of HTM
const theWholeEnchilada = `
    <h1>Heros</h1>
    ${heroListHTML}
    
    <h1>Villains</h1>
    ${villainListHTML}
    `
   

const theExistingMainElement = document.querySelector("#container")

theExistingMainElement.innerHTML = theWholeEnchilada
