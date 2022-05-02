/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ButtonStyled, FormStyled } from '../styles/Forms';

function Forms() {
  return (
    <FormStyled>
      <h1>Desafio Coleta - GRX</h1>
      <ButtonStyled>
        <h3>1 - Voce se considera bom em logica?</h3>
        <div className="button">
          <input type="radio" id="yes" name="pergunta1" />
          <label htmlFor="yes">Sim</label>
        </div>
        <div className="button">
          <input type="radio" id="no" name="pergunta1" />
          <label htmlFor="no">Nao</label>
        </div>
      </ButtonStyled>
      <ButtonStyled>
        <h3>2 - Gosta de aprender com desafios?</h3>
        <div className="button">
          <input type="radio" id="answer2-yes" name="pergunta2" />
          <label htmlFor="answer2-yes">Sim</label>
        </div>
        <div className="button">
          <input type="radio" id="answer2-no" name="pergunta2" />
          <label htmlFor="answer2-no">Nao</label>
        </div>
      </ButtonStyled>
      <div>
        <h3>3 - Gostria de fazer parte da GRX?</h3>
        <div>
          <select>
            <option>Sim</option>
            <option>Nao</option>
            <option>Nao Sei</option>
            <option>Agora</option>
          </select>
        </div>
      </div>
      <div>
        <h3>4 - Por favor, justifique a resposta anterior</h3>
        <div>
          <textarea />
        </div>
      </div>
    </FormStyled>
  );
}

export default Forms;
