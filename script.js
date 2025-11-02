
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const cards = Array.from(carousel.querySelectorAll('.card'));
  const cardCount = cards.length;

  // set --card-count on the carousel so CSS can use it
  carousel.style.setProperty('--card-count', cardCount);

  // set an index variable --i for each card (1-based like in your CSS)
  cards.forEach((card, idx) => {
    card.style.setProperty('--i', idx + 1);
  });

  // hide the fallback message if present
  const msg = document.querySelector('.msg-supports');
  if (msg) msg.style.display = 'none';
});
