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
  const novaColuna4 = document.createElement("td");
  const actionButton = document.createElement("button");

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

  // add text to button
  actionButton.innerHTML = "Delete";
  // add onclick to button
  actionButton.onclick = () => {
    console.log(index, chaveParaAdicionar);
  };

  // add button to column 4
  novaColuna4.appendChild(actionButton);

  //4ª passo -> add TD into TR | addd TR into TBody
  // add colunas -> linha
  novaLinha.appendChild(novaColuna1);
  novaLinha.appendChild(novaColuna2);
  novaLinha.appendChild(novaColuna3);
  novaLinha.appendChild(novaColuna4);

  // add linha -> tbody
  tableBody.appendChild(novaLinha);
};

const popularTabela = (numberSearched) => {
  // limpar o body da tabela
  const tableBody = tabela.tBodies[0];
  tableBody.innerHTML = "";
  if (numberSearched && numberSearched.length > 0) {
    //filter and populate table
    listaChaves
      .filter((item) => {
        console.log([...item.numeros, ...item.estrelas]);
        if (
          [...item.numeros, ...item.estrelas].includes(Number(numberSearched))
        ) {
          return true;
        } else {
          return false;
        }
      })
      .forEach((value, banana) => {
        addToTable(value, banana);
      });
  } else {
    // percorrer a lista de chaves, e adicionar cada uma delas ao body
    listaChaves.forEach((value, banana) => {
      addToTable(value, banana);
    });
  }
};
// jvPalma -> ersc-22-23-pw
const gerarChave = () => {
  const chave = {
    numeros: [], // [1, 2, 3, 4, 5]// tem de ter 5 numeros
    estrelas: [], // tem de ter 2 estrelas
  };
  chave.numeros = extrairNumerosAleatorios(5, 1, 50);
  chave.estrelas = extrairNumerosAleatorios(2, 1, 12);
  listaChaves.push(chave);
  popularTabela();
};

const handleSearch = (evento) => {
  popularTabela(evento.target.value);
};
