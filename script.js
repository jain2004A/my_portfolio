// Example JS functionality (placeholder)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded");
  });

  document.querySelectorAll('.accordion-button').forEach(btn => {
    btn.addEventListener('click', () => {
      console.log(`Viewed: ${btn.textContent.trim()}`);
    });
  });
  