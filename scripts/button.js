import { Purchase } from "./TransientState.js"

const handleSubmission = async (clickEvent) => {
    if ( clickEvent.target.id === "submission-button") {
        console.log("button clicked!")
         await Purchase()
        
    }
}

export const button = async () => {
    document.addEventListener("click", handleSubmission)

    return `<button id = "submission-button">Place Order</button>`
}