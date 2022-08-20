export default function initInputInnerText() {
  const inputNumber = document.querySelector("[data-innerText]");
  const inputResult = document.querySelectorAll("[data-innerText='receber']");
  const span = document.querySelector("[data-innerText='span']");


  function handleKeyUp() {
    inputResult.forEach(itens => {
      itens.innerText = (inputNumber.value * (100 - 1.68) / 100).toFixed(2).replace(".", ",")
      inputResult[0].appendChild(span)
      teste.innerHTML = "1,68"
    })
  }

  function handleKeyUp2() {
    inputResult.forEach(itens => {
      itens.innerText = (inputNumber.value * (100 - 1.88) / 100).toFixed(2).replace(".", ",")
      inputResult[0].appendChild(span)
      teste.innerHTML = "1,88"
    })
  }

    inputNumber.addEventListener("keyup", handleKeyUp)
}