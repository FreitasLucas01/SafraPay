export default function initDropDown() {

  const dropdown = document.querySelectorAll("[data-input] p");
  const label = document.querySelectorAll("[data-input] label");

  function handleDropDown(e) {
    if (e.type === "touchstart")
      e.preventDefault()
    const ativoClass = "ativo";
    const classChecked = this.classList.contains(ativoClass);

    dropdown.forEach((itens) => {
      itens.classList.remove(ativoClass)
    })
    label.forEach((itens) => {
      itens.classList.remove(ativoClass)
    })
    if (!classChecked) {
      this.classList.toggle(ativoClass)
      this.nextElementSibling.classList.toggle(ativoClass)
    }
  }

  dropdown.forEach(itens => {
    itens.addEventListener("click", handleDropDown)
    itens.addEventListener("touchstart", handleDropDown)
  })

  function handleLabel(e) {
    if (e.type === "touchstart")
      e.preventDefault()
    this.classList.remove("ativo")
    this.previousElementSibling.classList.remove("ativo")
  }

  label.forEach(itens => {
    itens.addEventListener("click", handleLabel)
    itens.addEventListener("touchstart", handleLabel)
  })
}