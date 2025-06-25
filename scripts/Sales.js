
 
export const purchasesHTML = async () => {
        const response = await fetch("http://localhost:8088/purchases?_expand=side&_expand=entree&_expand=vegetable")
        const purchases = await response.json()
      
        let purchaseHTML = "<article>"
        
        const purchaseArray = purchases.map(
            (purchase) => {
                const purchasePrice = purchase.entree.price + purchase.vegetable.price + purchase.side.price
                
                  return    `<div>Order #${purchase.id} costs $${purchasePrice}</div>`
   

        })
   purchaseHTML += purchaseArray.join("")
    purchaseHTML += "</article>"

    return purchaseHTML
}
