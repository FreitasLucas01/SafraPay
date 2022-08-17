export default function initInputInnerText(){

  const inputNumber = document.querySelector("[data-number='max-length']");
  const inputResult = document.querySelector("[data-innerText='receber']");
  const span = document.querySelector("[data-innerText='span']");

  inputNumber.addEventListener("input", (e) => {
    inputResult.innerText = (e.target.value.replace(".",","))
    inputResult.appendChild(span)
  })
}
