export default function initMenuMobile() {
  const menuBtn = document.querySelector("[data-menu='button']")
  const menuList = document.querySelector("[data-menu='list']")
  const eventos = ["touchstart", "click"]

  function handleButton(e) {
    if (e.type === "touchstart")
      e.preventDefault()
    const nav = document.querySelector("[data-menu='nav']")
    nav.classList.toggle("ativo")
    menuList.classList.toggle("ativo")
    menuBtn.classList.toggle("ativo")
    // document.body.classList.toggle("ativo")
    const ativo = nav.classList.contains("ativo")
    e.currentTarget.setAttribute("aria-expanded", ativo)
    if (ativo)
      e.currentTarget.setAttribute("aria-label", "Fechar Menu")
    else
      e.currentTarget.setAttribute("aria-label", "Abrir Menu")
  }

  eventos.forEach(allEvents => {
    menuBtn.addEventListener(allEvents, handleButton)
  })
}