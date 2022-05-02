export type FormType = {
  pergunta1: string,
  pergunta2: string,
  pergunta3: string,
  pergunta4: string,
};

export type ResultType = {
  quantidadePositiva: number,
  quantidadeNegativa: number,
  quantidadeNaoAvaliada: number,
  total: number;
};

export type FormResultType = FormType & ResultType;
