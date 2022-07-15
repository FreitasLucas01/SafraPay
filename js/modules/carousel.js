export default function initCarousel() {
  const carousel = document.querySelector('.beneficios-container');
  const slider = document.querySelector('.carrossel');

  const next = document.querySelector("[data-carousel='nxt']");

  let direction;

  if (window.matchMedia("(min-width: 600px)").matches) {

    function handleNext() {
      direction = -1;
      carousel.style.justifyContent = 'flex-start';
      slider.style.transform = 'translate(-25.2%)';
    }
    next.addEventListener('click', handleNext)

    function handleSlide() {

      if (direction === 1) {
        slider.prepend(slider.lastElementChild);
      } else {
        slider.appendChild(slider.firstElementChild);
      }

      slider.style.transition = 'none';
      slider.style.transform = 'translate(0)';
      setTimeout(() => {
        slider.style.transition = '0.5s';
      })
    }
    slider.addEventListener('transitionend', handleSlide);
  }
}