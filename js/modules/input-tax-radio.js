export default function initInputTaxRadio() {
  const inputValorVenda = document.querySelector("[name='valorVenda']");
  const inputResult = document.querySelectorAll("[data-inputRadio='receber']");
  const segundoRadio = document.querySelectorAll("[data-inputRadio='segundo'] label")
  const taxaElem = document.querySelector("[data-inputRadio='taxa']")
  const span = document.querySelector("[data-inputRadio='span']");
  const ativoClass = "ativo";

  // radio #pessoa tem o value "jur"
  // radio #fisica tem o value "fis"
  const LISTA_TAXAS = {
    jur: 1.68,
    fis: 1.88
  };

  /**
   * função que cria uma função para o handleKeyUp
   * @param {*} taxa 
   * @returns retorna uma arrow function que faz o calculo e atualiza o valor na tela
   * @example
   *   - handleKeyUpFn(1.68) retorna uma função que calcula usando 1.68 como taxa
   *   - handleKeyUpFn(1.88) retorna uma função que calcula usando 1.88 como taxa
   *   isto reduz a duplicação de código parametrizando o unico valor que altera no caso o valor da taxa sintetizando o handleKeyUp e handleKeyUp2
   */
  function handleKeyUpFn(taxa) {
    return () => {
      inputResult.forEach(itens => {
        itens.innerText = (inputValorVenda.value * (100 - taxa) / 100).toFixed(2).replace(".", ",");
        inputResult[0].appendChild(span);
      });
    };
  }

  /**
   * função para buscar um input basedo no atributo "name"
   * @param {*} inputName nome do input
   * @returns retorna o valor do input caso encontre e empty string caso não encontre
   */
  function getRadioValue(inputName) {
    // buscar usando o seletor baseado na propriedade name do input e.g: [name="taxa"]
    const input = document.querySelector('input[name="' + inputName + '"]:checked');
    if (!input) {
      return '';
    }
    return input.value;
  }

  /**
   * função para marcar um radio como checked
   * @param {*} inputName name do input
   * @param {*} value valor a selecionar
   */
  function setRadioValue(inputName, value) {
    // buscando todos inputs com o mesmo atributo "name"
    document.querySelectorAll('input[name="' + inputName + '"]').forEach(itens => {
      // buscando uma label que o atributo "for" que case com o id do radio
      const labelFor = document.querySelector('[for="' + itens.id + '"]');
      // se o valor do elemento for igual ao valor a ser setado ativa a flag checked;
      itens.checked = itens.value === value;

      // caso exista uma label relacionada
      if (labelFor) {
        if (itens.checked) {
          // se checked adiciona a classe ativa na label
          labelFor.classList.add(ativoClass);
        } else {
          // caso não checked remove a classe ativa da label
          labelFor.classList.remove(ativoClass);
        }
      }
    });
  }

  // exemplo de uso para pegar o valor do radio ativo com o name taxa
  let selectedTax = getRadioValue('taxa');
  // exemplo de uso para setar o valor no radio taxa correto.
  setRadioValue('taxa', selectedTax);

  function formatNumber(val) {
    if (val == '0') {
      return val;
    }
    return val.toLocaleString('pt-BR', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    });
  }

  /**
   * função para atualizar os valores na tela
   * @param {*} taxa valor da taxa para o calculo
   */
  function updateValuesOnUI(taxa) {
    const valorVenda = inputValorVenda.value;
    const valorRecebe = valorVenda * (1 - (taxa / 100));
    taxaElem.innerText = formatNumber(taxa) + '%';
    inputResult.forEach(itens => itens.innerHTML = formatNumber(valorRecebe));
    inputResult[0].appendChild(span)
  }

  /*
   selecionando todos os radios obs: não entendi pq os outros radios tbm tem o name = taxa.
   ele acaba selecionando 5 radios, mas utilizando apenas 2
  */
  const radios = document.querySelectorAll('[name="taxa"]');
  radios.forEach(itens => {
    itens.addEventListener('change', (e) => {
      // forcando o valor selecionar novamente para que a marcação seja atualizada na tela
      // o código do setRadioValue tbm marca a label como ativa então eu chamo de novo pra garantir
      // pra garantir que vai marcar o certo e desmarcar os outros
      setRadioValue('taxa', e.target.value);

      // atualiza os valores na tela selecionando a taxa baseado no valor do radio selecionado
      // botei as taxas em uma constante LISTA_TAXAS que tem o valor dos radios
      updateValuesOnUI(LISTA_TAXAS[e.target.value] || 0);
    });
  });

  // registrando evento que recebe atualizações no campo do valor
  inputValorVenda.addEventListener('input', (e) => {
    updateValuesOnUI(LISTA_TAXAS[getRadioValue('taxa')] || 0);
  })
  // inicializando o campo de valor
  inputValorVenda.value = (100).toFixed(2);

  function handleSegundoRadio(e) {
    if (e.type === "touchstart")
      e.preventDefault()
    segundoRadio.forEach((itens) => {
      itens.classList.remove(ativoClass)
    })
    this.classList.add(ativoClass)
  }

  segundoRadio.forEach(itens => {
    itens.addEventListener("click", handleSegundoRadio)
    itens.addEventListener("touchstart", handleSegundoRadio)
  })
}