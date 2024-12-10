// 9. (3p) Använd reduce för att räkna ut totala priset för shoppingcarten.


const shoppingCart = [
  {product: "T-shirt", price: 10},
  {product: "Trousers", price: 20},
  {product: "Jacket", price: 30},
  {product: "Shoes", price: 40},
  {product: "Hat", price: 50},
  {product: "Socks", price: 60},

]


function calculateTotalPrice(shoppingCart) {
  // Din kod här
  return shoppingCart.reduce((total, product) => total + product.price, 0);

}

console.log(calculateTotalPrice(shoppingCart)); // Ska logga 210