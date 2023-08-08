import { getEmployees, getOrders, getProducts} from "./database.js"

const employees = getEmployees()
const orders = getOrders()
const products = getProducts();


const employeeOrders = (employeeId) => {
    let fulfilledOrders = 0


    for (const order of orders) {
        if (order.employeeId === employeeId) {
            fulfilledOrders++;
        }
    }
return fulfilledOrders;
    
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "employee") {
            const employeeId = parseInt(itemClicked.dataset.id)

            for (const employee of employees) {
                if (employee.id === employeeId) {

                    const orderCount = employeeOrders(employeeId)

                    window.alert(` ${employee.name} sold ${orderCount} products `)
                }
            }
        }
    }
)



  




export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-id = "${employee.id}"
                      data-type="employee"
                     >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

