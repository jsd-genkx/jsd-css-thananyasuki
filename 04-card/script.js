const iconBox = document.getElementById("iconBox");

window.addEventListener("scroll", () => {
  const offset = window.scrollY * 0.25; // ปรับความเร็วได้
  iconBox.style.transform = `translateY(${offset}px)`;
});
