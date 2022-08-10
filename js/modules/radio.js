export default function initRadio() {
  const radio = document.querySelectorAll("[data-radio] label")

  function handleRadio(e) {
    if (e.type === "touchstart")
      e.preventDefault()
    const ativoClass = "ativo";
    const classChecked = this.classList.contains(ativoClass);

    radio.forEach((itens) => {
      itens.classList.remove(ativoClass)
    })
    if (!classChecked) {
      this.classList.toggle(ativoClass)
    }
  }

  radio.forEach(itens => {
    itens.addEventListener("click", handleRadio)
    itens.addEventListener("touchstart", handleRadio)
  })
}