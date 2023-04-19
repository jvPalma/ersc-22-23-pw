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

const addToTable = (chaveParaAdicionar, index) => {
  //1º passo -> get table TBody
  //   const tableBody = tabela.getElementsByTagName("tbody")[0];
  const tableBody = tabela.tBodies[0];

  //2º passo -> create elements HTML (1x TR, 3x TD)
  const novaLinha = document.createElement("tr");
  const novaColuna1 = document.createElement("td");
  const novaColuna2 = document.createElement("td");
  const novaColuna3 = document.createElement("td");

  //3º passo -> add chave content to TD's
  const coluna1Content = document.createTextNode(
    chaveParaAdicionar.numeros.join(" - ")
  );
  novaColuna1.appendChild(coluna1Content);

  novaColuna2.innerText = chaveParaAdicionar.estrelas.join(" * ");
  //   novaColuna1.textContent = "coluna 1";

  const ordenaNumeros = (numeros) => {
    // res : -1 a  < b -> o A passa para o proximo index
    // res :  1 a  > b -> o B passa para o index anterior
    // res :  0 a == b - ficam como está
    return [...numeros].sort((a, b) => a - b);
  };

  const numerosOrdenados = ordenaNumeros(chaveParaAdicionar.numeros).join(
    " - "
  );
  const estrelasOrdenados = ordenaNumeros(chaveParaAdicionar.estrelas).join(
    " * "
  );

  novaColuna3.innerHTML =
    "<span style='color: red'>" +
    numerosOrdenados +
    " --- " +
    estrelasOrdenados +
    "</span>";

  //4ª passo -> add TD into TR | addd TR into TBody
  // add colunas -> linha
  novaLinha.appendChild(novaColuna1);
  novaLinha.appendChild(novaColuna2);
  novaLinha.appendChild(novaColuna3);

  // add linha -> tbody
  tableBody.appendChild(novaLinha);
};

// jvPalma -> ersc-22-23-pw
const gerarChave = () => {
  const chave = {
    numeros: [], // [1, 2, 3, 4, 5]// tem de ter 5 numeros
    estrelas: [], // tem de ter 2 estrelas
  };
  chave.numeros = extrairNumerosAleatorios(5, 1, 50);
  chave.estrelas = extrairNumerosAleatorios(2, 1, 12);
  addToTable(chave);
};
