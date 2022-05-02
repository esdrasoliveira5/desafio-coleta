import fs from 'fs';
import * as path from 'path';
import { FormResultType, FormType, ResultType } from '../types/FormType';

class FormResult {
  constructor(
    public quantidadePositiva = 0,
    public quantidadeNegativa = 0,
    public quantidadeNaoAvaliada = 0,
  ) {}

  getDatabase = () => {
    const rawdata = fs.readFileSync(
      path.resolve('./src/db/formsData.json'),
      'utf8',
    );
    const data: FormResultType = JSON.parse(rawdata);
    this.quantidadeNaoAvaliada = data.quantidadeNaoAvaliada;
    this.quantidadePositiva = data.quantidadePositiva;
    this.quantidadeNegativa = data.quantidadeNegativa;
  };

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

  total = () => {
    const total = this.quantidadePositiva 
    + this.quantidadeNegativa + this.quantidadeNaoAvaliada;
    return total;
  };

  result = (obj: FormType): ResultType => {
    this.getDatabase();
    this.questionOneAndTwo(obj.pergunta1);
    this.questionOneAndTwo(obj.pergunta2);
    this.questionThree(obj.pergunta3);
    return {
      quantidadePositiva: this.quantidadePositiva,
      quantidadeNegativa: this.quantidadeNegativa,
      quantidadeNaoAvaliada: this.quantidadeNaoAvaliada,
      total: this.total(),
    };
  };
}

export default FormResult;