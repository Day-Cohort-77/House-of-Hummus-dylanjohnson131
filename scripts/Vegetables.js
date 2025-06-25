import { setVeggieId } from "./TransientState.js"

const chooseVeggies = (event) => {
    if(event.target.name === "veggie"){
        const chosenVeggie = parseInt(event.target.id)
            setVeggieId(chosenVeggie)
    }
}

export const veggiesHTML = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const veggies = await response.json()
    let veggiesHTML = ""

    document.addEventListener("change", chooseVeggies)

    const veggiesArray = veggies.map(
        (veggies) => {
            if(veggies) {

                return `
                
                <input type="radio" name="veggie" id="${veggies.id}" />
                ${veggies.type}                
                `
            }
        })
    veggiesHTML += veggiesArray.join("")
    
    return veggiesHTML
}