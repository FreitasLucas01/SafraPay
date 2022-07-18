export default function initCarousel() {
  const container = document.querySelector("[data-carousel='container']");
  const carousel = document.querySelector("[data-carousel='carousel']");
  const nextBtn = document.querySelector("[data-carousel='nxt']");

  if (window.matchMedia("(min-width: 600px)").matches) {

    let direction;

    function handleNext(e) {
      if (e.type === "touchstart")
        e.preventDefault()
      direction = -1;
      container.style.justifyContent = 'start';
      carousel.style.transform = 'translate(-25.2%)';
    }
    nextBtn.addEventListener('click', handleNext)
    nextBtn.addEventListener('touchstart', handleNext)

    function handleSlide() {

      if (direction === 1) {
        carousel.prepend(carousel.lastElementChild);
      } else {
        carousel.appendChild(carousel.firstElementChild);
      }

      carousel.style.transition = 'none';
      carousel.style.transform = 'translate(0)';
      setTimeout(() => {
        carousel.style.transition = '0.5s';
      })
    }
    carousel.addEventListener('transitionend', handleSlide);
  }
  
  if (window.matchMedia("(max-width: 600px)").matches) {
    let pressed = false;
    let startX = 0;

    function handleMouseDown(e) {
      pressed = true
      startX = e.clientX
    }
    function handleMouseMove(e) {
      if (!pressed)
        return
      this.scrollLeft += startX - e.clientX
    }
    container.addEventListener("touchmove", handleMouseMove)
  }
}