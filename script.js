// script.js
document.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card, .product');
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight * 0.8) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  });