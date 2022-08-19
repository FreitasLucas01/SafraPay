export default function initInputInnerText() {

  const inputNumber = document.querySelector("[data-innerText]");
  const inputResult = document.querySelectorAll("[data-innerText='receber']");
  const span = document.querySelector("[data-innerText='span']");


  inputNumber.addEventListener("input", () => {
    inputResult.forEach(itens => {
      itens.innerText = (inputNumber.value * (100 - 1.68) / 100).toFixed(2).replace(".", ",")
    })
    inputResult.appendChild(span)
  })
}