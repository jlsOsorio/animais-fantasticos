import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // Criar a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Preencher cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Animar os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros(
      "[data-numero]",
      ".numeros",
      "ativo"
    );
    animaNumeros.init();
  }

  // Puxar os animais através de um arquivo json e criar cada animal utilizando createAnimal()
  async function criarAnimais() {
    try {
      // Fetch, esperar resposta e transformar em json
      const animaisResponse = await fetch(url);
 
      // Após a transformação de json, activar as funções para preencher e animar os números
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
