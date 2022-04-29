export type FormType = {
  pergunta1: string,
  pergunta2: string,
  pergunta3: string,
  pergunta4: string,
}

export type ResultType = {
  quantidadePositiva: string,
  quantidadeNegativa: string,
  quantidadeNaoAvaliada: string,
}

export type FormResultType = FormType & ResultType;
