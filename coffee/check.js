const quantityInput = document.getElementById('quantity');
const priceSpan = document.getElementById('price');

quantityInput.addEventListener('input', updatePrice);

function updatePrice() {
    const quantity = parseInt(quantityInput.value);
    const totalPrice = quantity * 12 ;
    priceSpan.textContent = totalPrice;
}
