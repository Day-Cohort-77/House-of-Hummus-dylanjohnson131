import { setEntreeId } from "./TransientState.js"

const chooseEntree = (event) => {
    if (event.target.name === "entree"){
    const chosenEnt = parseInt(event.target.id)
        setEntreeId(chosenEnt)
    }
}

export const entreesHTML = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()
    
    let entreeHTML = "<h2>entree</h2>"

    document.addEventListener("change", chooseEntree)

    const entreeArray = entrees.map(
        (entree) => {
            if(entree) {

                return `
                
                
                <input type="radio" name="entree" id="${entree.id}" />
                ${entree.name}
                `
            }
            
        })
    entreeHTML += entreeArray.join("")

    return entreeHTML
}

