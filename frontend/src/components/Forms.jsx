/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  ButtonGreen,
  ButtonRed,
  ButtonStyled,
  FormStyled,
} from '../styles/Forms';

function Forms() {
  const [form, setForm] = useState({
    pergunta1: '',
    pergunta2: '',
    pergunta3: '',
    pergunta4: '',
  });

  const handleForm = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <FormStyled>
      <h1>Desafio Coleta - GRX</h1>
      <ButtonStyled>
        <h3>1 - Voce se considera bom em logica?</h3>
        <div className="button">
          <input
            type="radio"
            id="yes"
            name="pergunta1"
            value="Sim"
            onChange={(event) => handleForm(event)}
          />
          <label htmlFor="yes">Sim</label>
        </div>
        <div className="button">
          <input
            type="radio"
            id="no"
            value="Não"
            name="pergunta1"
            onChange={(event) => handleForm(event)}
          />
          <label htmlFor="no">Não</label>
        </div>
      </ButtonStyled>
      <ButtonStyled>
        <h3>2 - Gosta de aprender com desafios?</h3>
        <div className="button">
          <input
            type="radio"
            id="answer2-yes"
            name="pergunta2"
            value="Sim"
            onChange={(event) => handleForm(event)}
          />
          <label htmlFor="answer2-yes">Sim</label>
        </div>
        <div className="button">
          <input
            type="radio"
            id="answer2-no"
            name="pergunta2"
            value="Não"
            onChange={(event) => handleForm(event)}
          />
          <label htmlFor="answer2-no">Não</label>
        </div>
      </ButtonStyled>
      <div>
        <h3>3 - Gostria de fazer parte da GRX?</h3>
        <div>
          <select
            name="pergunta3"
            value={form.pergunta3}
            onChange={(event) => handleForm(event)}
          >
            <option value="Sim">Sim</option>
            <option value="Não">Nao</option>
            <option value="Não Sei">Nao Sei</option>
            <option value="Agora!!">Agora!!</option>
          </select>
        </div>
      </div>
      <div>
        <h3>4 - Por favor, justifique a resposta anterior</h3>
        <div
          name="pergunta4"
          value={form.pergunta4}
          onChange={(event) => handleForm(event)}
        >
          <textarea />
        </div>
        <ButtonGreen>
          <button
            type="button"
          >
            Submit
          </button>
        </ButtonGreen>
        <ButtonRed>
          <button
            type="button"
          >
            Cancelar
          </button>
        </ButtonRed>
      </div>
    </FormStyled>
  );
}

export default Forms;
