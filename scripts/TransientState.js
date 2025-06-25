const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const setEntreeId = (chosenEntree) => {
    transientState.entreeId = (chosenEntree)
    console.log(transientState)
}

export const setVeggieId = (chosenVeggie) => {
    transientState.vegetableId = (chosenVeggie)
    console.log(transientState)
}

export const setSideId = (chosenSide) => {
    transientState.sideId = (chosenSide)
    console.log(transientState)
}


export const Purchase = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/purchases", postOptions)
    const customEvent = new CustomEvent("orderDisplay")
    document.dispatchEvent(customEvent)
}
