const cartItems = [];
let total = 0;

function addToCart(item, price) {
  cartItems.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cart = document.getElementById('cart');
  const totalDisplay = document.getElementById('total');
  
  cart.innerHTML = '';
  cartItems.forEach((entry) => {
    const li = document.createElement('li');
    li.textContent = `${entry.item} - $${entry.price}`;
    cart.appendChild(li);
  });

  totalDisplay.textContent = `Total: $${total}`;
}

function checkout() {
  if (cartItems.length === 0) {
    alert('Your cart is empty! Add to your oder a delish meal!'); 
  } else {
    alert(`Thank you for your purchase at the Unicorn Burger Delish, come back soon! Total: $${total}`);
    cartItems.length = 0;
    total = 0;
    updateCart();
  }
}
