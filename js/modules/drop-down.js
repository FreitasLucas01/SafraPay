export default function initDropDown() {
  const input = document.querySelectorAll("[data-input] p")
  // const paragrafo = document.querySelectorAll("[data-input] p")

  function handleClick(e) {
    input.forEach((itens) => {
      itens.classList.remove("ativo")
    })
    if(e.target !== "ativo")
    this.classList.toggle("ativo")
  }

  input.forEach((itens) => {
    itens.addEventListener("click", handleClick)
  })
}