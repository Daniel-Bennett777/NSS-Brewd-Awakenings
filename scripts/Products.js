import { getProducts } from "./database.js"

const products = getProducts()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "product"){
        window.alert(`${itemClicked.dataset.name} costs $${parseFloat(itemClicked.dataset.price)}`)
    }});



export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-id = "${product.id}"
                     data-name = "${product.name}"
                     data-price = "${product.price}"
                     data-type = "product"
                    >${product.name}</li>`
    }

    html += "</ul>"

    return html
}

