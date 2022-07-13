export default function initCarousel() {
  const carrossel = [...document.querySelectorAll(".carrossel")]
  const nxtBtn = [...document.querySelectorAll("[data-carousel='nxt']")]
  const preBtn = [...document.querySelectorAll("[data-carousel='pre']")]
  const preBtnClass = document.querySelector("[data-carousel='pre']")
  const nxtBtnClass = document.querySelector("[data-carousel='nxt']")

  carrossel.forEach((itens, index) => {
    let containerDimensions = itens.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[index].addEventListener('click', () => {
      preBtnClass.classList.add("ativo")
      nxtBtnClass.classList.add("ativo")
      itens.scrollLeft += containerWidth;
    })

    preBtn[index].addEventListener('click', () => {
      nxtBtnClass.classList.remove("ativo")
      preBtnClass.classList.remove("ativo")
      itens.scrollLeft -= containerWidth;
    })
  })
}