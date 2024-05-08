// =========== Hero Image Move =============
const hero = document.querySelector(".hero");
const images = document.querySelectorAll(".image-move");

hero.addEventListener("mousemove", (e) => {
  const { clientX: mouseX, clientY: mouseY } = e;

  const centerX = hero.clientWidth / 2;
  const centerY = hero.clientHeight / 2;

  const offsetX = (mouseX - centerX) / 70;
  const offsetY = (mouseY - centerY) / 70;

  images.forEach((image, index) => {
    const offset = index + 1;
    image.style.transform = `translate(${offsetX * offset}px, ${offsetY * offset}px)`;
  });
});