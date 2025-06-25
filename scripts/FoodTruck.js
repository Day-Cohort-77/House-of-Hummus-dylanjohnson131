import { entreesHTML } from "./Entrees.js"
import { veggiesHTML } from "./Vegetables.js"
import { sidesHTML } from "./Sides.js"
import { purchasesHTML } from "./Sales.js"
import { button } from "./button.js"


export const FoodTruck = async () => {
    const entrees = await entreesHTML()
    const veggies = await veggiesHTML()     
    const sides = await sidesHTML()
    const purchase = await purchasesHTML()
    const buttonHTML = await button()
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="foodOptions">
        <section class="entrees">
        <h2>Entrees</h2>
        ${entrees}
        </section>
        
        <section class="veggies">
        <h2>Veggies</h2>
        ${veggies}
        </section>
        
        <section class="sides">
        <h2>Sides</h2>
        ${sides}
        </section>
        <article>
            ${buttonHTML}
        </article>
        <article class="customerOrders">
        <h2>Monthly Sales</h2>
            ${purchase}
        </article>
        `

}
