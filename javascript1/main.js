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

const gerarChave = () => {
  const chave = {
    numeros: [], // [1, 2, 3, 4, 5]// tem de ter 5 numeros
    estrelas: [], // tem de ter 2 estrelas
  };
  chave.numeros = extrairNumerosAleatorios(5, 1, 50);
  chave.estrelas = extrairNumerosAleatorios(2, 1, 12);
  console.log(chave);
};
