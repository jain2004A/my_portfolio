document.querySelectorAll('.exp-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    console.log(`Hovered on: ${card.querySelector('.exp-title')?.textContent}`);
  });
});
