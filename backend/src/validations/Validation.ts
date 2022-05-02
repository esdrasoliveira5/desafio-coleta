import { FormType } from '../types/FormType';

class Validation {
  yesOrNo = (resposta: string) => {
    if (resposta === 'Sim' || resposta === 'Não') {
      return true;
    }
  };

  nowOrMaybe = (resposta: string) => {
    if (resposta === 'Sim' 
    || resposta === 'Não' 
    || resposta === 'Não Sei' 
    || resposta === 'Agora!!') {
      return true;
    }
  };

  textBox = (resposta: string) => {
    if (typeof (resposta) !== 'string'
    || resposta.length < 15 
    || resposta.length > 200
    ) {
      return false;
    }
    return true;
  };

  form = (data: FormType) => {
    const { pergunta1, pergunta2, pergunta3, pergunta4 } = data;

    if (!this.yesOrNo(pergunta1)) {
      return { error: 'answer1 must be Sim or Não' };
    }
    if (!this.yesOrNo(pergunta2)) {
      return { error: 'answer2 must be Sim or Não' };
    }
    if (!this.nowOrMaybe(pergunta3)) {
      return { error: 'answer3 invalid' };
    }
    if (!this.textBox(pergunta4)) {
      return { error: 'answer1 must be greater than 15 and less than 200' };
    }

    return true;
  };
}

export default Validation;