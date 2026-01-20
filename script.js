// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
// Disable heavy animation on small screens
if (window.innerWidth < 768) {
  document.querySelectorAll(".reveal").forEach(el => {
    el.classList.add("active");
  });
}
