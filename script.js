// ✅ Log when portfolio loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded");

  // ✅ Scroll to top on page load (even if there's a # in the URL)
  if (window.location.hash) {
    history.replaceState(null, null, ' ');
    window.scrollTo(0, 0);
  }

  // ✅ Optional: Log which experience card is hovered (for future enhancements)
  document.querySelectorAll('.exp-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const title = card.querySelector('.exp-title')?.textContent.trim();
      console.log(`Hovered on: ${title}`);
    });
  });
});
