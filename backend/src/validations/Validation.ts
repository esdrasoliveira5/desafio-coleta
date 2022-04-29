import { FormType } from '../types/FormType';

class Validation {
  yesOrNo = (resposta: string) => {
    if (resposta === 'Sim' || resposta === 'Não') {
      return true;
    }
  };

  nowOrMaybe = (resposta: string) => {
    if (resposta === 'Sim' || resposta === 'Não') {
      return true;
    }
    
    if (resposta === 'Não Sei' || resposta === 'Agora') {
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
    if (!this.yesOrNo(pergunta1)) return false;
    if (!this.yesOrNo(pergunta2)) return false;
    if (!this.nowOrMaybe(pergunta3)) return false;
    if (!this.textBox(pergunta4)) return false;
  };
}

export default Validation;