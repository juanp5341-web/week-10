// Open/close dialog + log which image format the browser used.
const dialogEl = document.getElementById("productDialog");
const learnMore = document.getElementById("learnMoreBtn");

learnMore?.addEventListener("click", () => {
  if (typeof dialogEl?.showModal === "function") dialogEl.showModal();
  else alert("Civic Type R — Highlights:\n• 2.0L turbo I4\n• 6MT + LSD\n• Wing + diffuser");
});

window.addEventListener("load", () => {
  const img = document.querySelector(".product-img");
  if (!img) return;
  const usingWebP = (img.currentSrc || img.src || "").toLowerCase().endsWith(".webp");
  console.log("Image used:", usingWebP ? "WebP" : "Optimized JPG/PNG");
});
