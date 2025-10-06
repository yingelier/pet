// 页面加载动画
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach(el => {
    el.classList.add("visible");
  });
  console.log("✨ Portfolio loaded successfully");
});



