const sizeSelector = document.getElementById('sizeSelector');
const priceDisplay = document.getElementById('price');

sizeSelector.addEventListener('change', updatePrice);

function updatePrice() {
  const selectedSize = sizeSelector.value;
  let price = 0;

  switch (selectedSize) {
    case 'm':
      price = 12;
      break;
    case 'l':
      price = 15;
      break;
    case 'x':
      price = 17;
      break;
    default:
      price = 0;
  }

  priceDisplay.textContent = `$ ${price}`;
}