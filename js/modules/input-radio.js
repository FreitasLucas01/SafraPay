export default function initInputRadio() {
  const inputNumber = document.querySelector("[data-inputRadio='input']");
  const inputResult = document.querySelectorAll("[data-inputRadio='receber']");
  const span = document.querySelector("[data-inputRadio='span']");
  const taxa = document.querySelector("[data-inputRadio='taxa']")
  const primeiroRadio = document.querySelectorAll("[data-inputRadio='primeiro'] label")
  const segundoRadio = document.querySelectorAll("[data-inputRadio='segundo'] label")

  const ativoClass = "ativo";

  primeiroRadio[0].classList.add(ativoClass)
  segundoRadio[0].classList.add(ativoClass)


  function handleKeyUp() {
    inputResult.forEach(itens => {
      itens.innerText = (inputNumber.value * (100 - 1.68) / 100).toFixed(2).replace(".", ",")
      inputResult[0].appendChild(span)
    })
  }

  function handleKeyUp2() {
    inputResult.forEach(itens => {
      itens.innerText = (inputNumber.value * (100 - 1.88) / 100).toFixed(2).replace(".", ",")
      inputResult[0].appendChild(span)
    })
  }

  function handlePrimeiroRadio(e) {
    if (e.type === "touchstart")
      e.preventDefault()
    primeiroRadio.forEach((itens) => {
      itens.classList.remove(ativoClass)
    })
    this.classList.add(ativoClass)
    if (primeiroRadio[0].classList.contains(ativoClass)) {
      inputNumber.value = ""
      inputNumber.addEventListener("keyup", handleKeyUp)
      inputResult.forEach(itens => {itens.innerHTML = "98,32"})
      taxa.innerHTML = "1,68"
      inputResult[0].appendChild(span)
    } else {
      inputNumber.value = ""
      inputNumber.addEventListener("keyup", handleKeyUp2)
      inputResult.forEach(itens => {itens.innerHTML = "98,12"})
      taxa.innerHTML = "1,88"
      inputResult[0].appendChild(span)
    }
  }

  primeiroRadio.forEach(itens => {
    itens.addEventListener("click", handlePrimeiroRadio)
    itens.addEventListener("touchstart", handlePrimeiroRadio)
  })















  function handleSegundoRadio(e) {
    if (e.type === "touchstart")
      e.preventDefault()
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