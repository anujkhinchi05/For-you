const sections = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.style.opacity = 1;
    }
  });
});
