// 8. (3p) Använd filter för att filtrera bort alla produkter som har priset över 100 kr.
// shoppingcarten är: 

const shoppingCart = [
    {product: "T-shirt", price: 10},
    {product: "Trousers", price: 20},
    {product: "Jacket", price: 30},
    {product: "Shoes", price: 40},
    {product: "Hat", price: 50},
    {product: "Socks", price: 60},
    {product: "Scarf", price: 110},
    {product: "Gloves", price: 120}
]

function filterProducts(shoppingCart) {
    // Din kod här
    return shoppingCart.filter(product => product.price <= 100)
}

console.log(filterProducts(shoppingCart)); // Ska logga [{product: "T-shirt", price: 10}, {product: "Trousers", price: 20}, {product: "Jacket", price: 30}, {product: "Shoes", price: 40}, {product: "Hat", price: 50}, {product: "Socks", price: 60}]