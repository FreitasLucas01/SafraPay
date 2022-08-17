export default function initNumberMaxLength() {
  const inputNumber = document.querySelector("[data-number='max-length']")

  inputNumber.oninput = () => {
    if (inputNumber.value.length > inputNumber.maxLength)
      inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength)
  }
}