export default function initTempo() {
  const tempo = document.querySelectorAll("[data-tempo] li")

  tempo[0].classList.add("ativo")

  function handleTempo(e) {
    if (e.type === "touchstart")
      e.preventDefault()
      tempo.forEach(itens => {
        itens.classList.remove("ativo")
      })
    this.classList.add("ativo")
  }

  tempo.forEach(itens => {
    itens.addEventListener("click", handleTempo)
    itens.addEventListener("touchstart" , handleTempo)
  })
}