export default function initRadio() {
  const primeiroRadio = document.querySelectorAll("[data-radio='primeiro'] label")
  const segundoRadio = document.querySelectorAll("[data-radio='segundo'] label")

  primeiroRadio[0].classList.add("ativo")
  segundoRadio[0].classList.add("ativo")

  function handlePrimeiroRadio(e) {
    if (e.type === "touchstart")
      e.preventDefault()
    const ativoClass = "ativo";
    const classChecked = this.classList.contains(ativoClass);

    primeiroRadio.forEach((itens) => {
      itens.classList.remove(ativoClass)
    })
    this.classList.add(ativoClass)
  }

  primeiroRadio.forEach(itens => {
    itens.addEventListener("click", handlePrimeiroRadio)
    itens.addEventListener("touchstart", handlePrimeiroRadio)
  })


  function handleSegundoRadio(e) {
    if (e.type === "touchstart")
      e.preventDefault()
    const ativoClass = "ativo";
    const classChecked = this.classList.contains(ativoClass);

    segundoRadio.forEach((itens) => {
      itens.classList.remove(ativoClass)
    })
    this.classList.add(ativoClass)
  }

  segundoRadio.forEach(itens => {
    itens.addEventListener("click", handleSegundoRadio)
    itens.addEventListener("touchstart", handleSegundoRadio)
  })
}