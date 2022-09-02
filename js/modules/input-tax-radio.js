// export default function initInputTaxRadio() {
//   const inputValorVenda = document.querySelector("[name='valorVenda']");
//   const inputResult = document.querySelectorAll("[data-inputRadio='receber']");
//   const segundoRadio = document.querySelectorAll("[data-inputRadio='segundo'] label")
//   const taxaElem = document.querySelector("[data-inputRadio='taxa']")
//   const spanCifrao = document.querySelector("[data-inputRadio='cifrao']");
//   const spanPorcentagem = document.querySelector("[data-inputRadio='porcentagem']");
//   const ativoClass = "ativo";

//   segundoRadio[0].classList.add("ativo")

//   const LISTA_TAXAS = {
//     jur: 1.68,
//     fis: 1.88
//   };

//   function handleKeyUpFn(taxa) {
//     return () => {
//       inputResult.forEach(itens => {
//         itens.innerText = (inputValorVenda.value * (100 - taxa) / 100).toFixed(2).replace(".", ",");
//       });
//     };
//   }

//   function getRadioValue(inputName) {
//     const input = document.querySelector('input[name="' + inputName + '"]:checked');
//     if (!input) {
//       return '';
//     }
//     return input.value;
//   }

//   function setRadioValue(inputName, value) {
//     document.querySelectorAll('input[name="' + inputName + '"]').forEach(itens => {
//       const labelFor = document.querySelector('[for="' + itens.id + '"]');
//       itens.checked = itens.value === value;

//       if (labelFor) {
//         if (itens.checked) {
//           labelFor.classList.add(ativoClass);
//         } else {
//           labelFor.classList.remove(ativoClass);
//         }
//       }
//     });
//   }

//   let selectedTax = getRadioValue('taxa');
//   setRadioValue('taxa', selectedTax);

//   function formatNumber(val) {
//     if (val == '0') {
//       return val;
//     }
//     return val.toLocaleString('pt-BR', {
//       maximumFractionDigits: 2,
//       minimumFractionDigits: 2
//     });
//   }

//   function updateValuesOnUI(taxa) {
//     const valorVenda = inputValorVenda.value;
//     const valorRecebe = valorVenda * (1 - (taxa / 100));
//     taxaElem.innerText = formatNumber(taxa);
//     inputResult.forEach(itens => itens.innerHTML = formatNumber(valorRecebe));
//     inputResult[0].appendChild(spanCifrao);
//     taxaElem.appendChild(spanPorcentagem);
//   }

//   const radios = document.querySelectorAll('[name="taxa"]');
//   radios.forEach(itens => {
//     itens.addEventListener('change', (e) => {
//       setRadioValue('taxa', e.target.value);
//       updateValuesOnUI(LISTA_TAXAS[e.target.value] || 0);
//     });
//   });

//   inputValorVenda.addEventListener('input', (e) => {
//     updateValuesOnUI(LISTA_TAXAS[getRadioValue('taxa')] || 0);
//   })

//   inputValorVenda.value = (100).toFixed(2);


//   function handleSegundoRadio(e) {
//     if (e.type === "touchstart")
//       e.preventDefault()
//     segundoRadio.forEach((itens) => {
//       itens.classList.remove(ativoClass)
//     })
//     this.classList.add(ativoClass)
//   }

//   segundoRadio.forEach(itens => {
//     itens.addEventListener("click", handleSegundoRadio)
//     itens.addEventListener("touchstart", handleSegundoRadio)
//   })
// }