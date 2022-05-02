import { FormType, ResultType } from '../types/FormType';

class FormResult {
  constructor(
    public quantidadePositiva = 0,
    public quantidadeNegativa = 0,
    public quantidadeNaoAvaliada = 0,
  ) {}

  questionOneAndTwo = (answer: string) => {
    if (answer === 'Sim') {
      this.quantidadePositiva += 1;
    } else {
      this.quantidadeNegativa += 1;
    }
  };

  questionThree = (answer: string) => {
    if (answer === 'Sim') {
      this.quantidadePositiva += 1;
    } else if (answer === 'Não') {
      this.quantidadeNegativa += 1;
    } else if (answer === 'Não Sei') {
      this.quantidadeNaoAvaliada += 1;
    } else {
      this.quantidadePositiva += 2;
    }
  };

  result = (obj: FormType): ResultType => {
    this.questionOneAndTwo(obj.pergunta1);
    this.questionOneAndTwo(obj.pergunta2);
    this.questionThree(obj.pergunta3);
    return {
      quantidadePositiva: this.quantidadePositiva,
      quantidadeNegativa: this.quantidadeNegativa,
      quantidadeNaoAvaliada: this.quantidadeNaoAvaliada,
    };
  };
}

export default FormResult;