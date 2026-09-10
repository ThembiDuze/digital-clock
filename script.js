document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.price-col button');
  let cart = [];

  // Create a cart summary bar and insert it above the price rows
  const cartBar = document.createElement('div');
  cartBar.classList.add('cart-bar');
  cartBar.innerHTML = `<span id="cart-text">Cart is empty</span>`;
  document.querySelector('.container').insertBefore(
    cartBar,
    document.querySelector('.price-row')
  );

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const col = button.closest('.price-col');
      const planName = col.querySelector('p').textContent.trim();
      const priceText = col.querySelector('h3').firstChild.textContent.trim();

      // Add the plan to the cart
      cart.push({ name: planName, price: priceText });

      updateCartDisplay();
      showAddedFeedback(button);
    });
  });

  function updateCartDisplay() {
    const cartText = document.getElementById('cart-text');
    if (cart.length === 0) {
      cartText.textContent = 'Cart is empty';
      return;
    }
    const summary = cart.map(item => `${item.name} (${item.price})`).join(', ');
    cartText.textContent = `Cart (${cart.length}): ${summary}`;
  }

  function showAddedFeedback(button) {
    const originalText = button.textContent;
    button.textContent = 'Added ✓';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 1200);
  }
});