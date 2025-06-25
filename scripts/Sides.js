import {setSideId } from "./TransientState.js"

const chooseSides = (event) => {
    if (event.target.name === "side"){
        const chosenSide = parseInt(event.target.id)
            setSideId(chosenSide)
    }
}

export const sidesHTML = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()
    let sidesHTML = ""

    document.addEventListener("change",chooseSides)

    const sidesArray = sides.map(
        (sides) => {
            if(sides) {

                return`
            
                <input type="radio" name="side" id="${sides.id}" />
                ${sides.title}
                `
            }
        })
    sidesHTML += sidesArray.join("")

    return sidesHTML
}