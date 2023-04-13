const extrairNumerosAleatorios = (tamanho, min, max) => {
  const numerosGerados = [];

  while (numerosGerados.length < tamanho) {
    // correr o loop while, parar 1 numero aleatorio
    // de cada vez ate termos o tamanho indicado
    const numAux = Math.floor(Math.random() * (max - min + 1)) + min;
    // se numero gerado ainda nao existir na lista
    if (numerosGerados.indexOf(numAux) < 0) {
      // adicionar numero gerado à lista
      numerosGerados.push(numAux);
    }
  }

  return numerosGerados;
};

const ordenaNumeros = (numeros) => {
  // res : -1 a  < b -> o A passa para o proximo index
  // res :  1 a  > b -> o B passa para o index anterior
  // res :  0 a == b - ficam como está
  return numeros.sort((a, b) => a - b);
};

const addToTable = (chave) => {
  const tableBody = tabela.tBodies[0];
  // criar um novo elemento, que é a linha para a tabela
  const novaLinha = document.createElement("tr");
  const novaColuna1 = document.createElement("td");
  const novaColuna2 = document.createElement("td");
  const novaColuna3 = document.createElement("td");

  // add columns content
  const coluna1Content = document.createTextNode(chave.numeros.join(" - "));
  novaColuna1.appendChild(coluna1Content);

  novaColuna2.innerText = chave.estrelas.join(" * ");

  const numerosOrdenados = ordenaNumeros(chave.numeros);
  const estrelasOrdenados = ordenaNumeros(chave.estrelas);

  novaColuna3.innerHTML =
    "<span style='color: red'>" +
    numerosOrdenados.join(" - ") +
    " --- " +
    estrelasOrdenados.join(" - ") +
    "</span>";

  // add colunas -> linha
  novaLinha.appendChild(novaColuna1);
  novaLinha.appendChild(novaColuna2);
  novaLinha.appendChild(novaColuna3);

  // add linha -> tbody
  tableBody.appendChild(novaLinha);
};
const gerarChave = () => {
  const chave = {
    numeros: [], // [1, 2, 3, 4, 5]// tem de ter 5 numeros
    estrelas: [], // tem de ter 2 estrelas
  };
  chave.numeros = extrairNumerosAleatorios(5, 1, 50);
  chave.estrelas = extrairNumerosAleatorios(2, 1, 12);
  addToTable(chave);
};
