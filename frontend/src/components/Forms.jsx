/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import desafioColetaContext from '../context/AppContext';
import sendForm from '../services/request';
import {
  ButtonGreen,
  ButtonRed,
  ButtonStyled,
  FormStyled,
} from '../styles/Forms';

function Forms() {
  const { result, setResult } = useContext(desafioColetaContext);
  const [form, setForm] = useState({
    pergunta1: '',
    pergunta2: '',
    pergunta3: 'Sim',
    pergunta4: '',
    counter: 0,
  });

  const handleForm = ({ target }) => {
    const { name, value } = target;
    if (name === 'pergunta4') {
      setForm({
        ...form,
        [name]: value,
        counter: value.length,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = async () => {
    if (form.pergunta4.length < 15 || form.pergunta4.length > 200) {
      global.alert('Pergunta 4 minimo 15 caracteres e maximo 200');
    }
    const response = await sendForm(form);
    if (!response.error) {
      global.alert('Obrigado pela Resposta!');
      setResult(response);
      setForm({
        pergunta1: '',
        pergunta2: '',
        pergunta3: 'Sim',
        pergunta4: '',
      });
    }
  };

  const handleCancel = () => {
    const response = global.confirm('Tem certeza?');
    if (response === true) {
      setForm({
        pergunta1: '',
        pergunta2: '',
        pergunta3: 'Sim',
        pergunta4: '',
      });
      setResult(false);
    }
  };

  return (
    <FormStyled>
      <h1>Desafio Coleta - GRX</h1>
      <ButtonStyled>
        <h3>1 - Você se considera bom em logica?</h3>
        <div className="button">
          <input
            type="radio"
            id="yes"
            name="pergunta1"
            value="Sim"
            checked={form.pergunta1 === 'Sim'}
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
            checked={form.pergunta1 === 'Não'}
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
            checked={form.pergunta2 === 'Sim'}
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
            checked={form.pergunta2 === 'Não'}
            onChange={(event) => handleForm(event)}
          />
          <label htmlFor="answer2-no">Não</label>
        </div>
      </ButtonStyled>
      <div>
        <h3>3 - Gostaria de fazer parte da GRX?</h3>
        <div>
          <select
            name="pergunta3"
            value={form.pergunta3}
            onChange={(event) => handleForm(event)}
          >
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
            <option value="Não Sei">Não Sei</option>
            <option value="Agora!!">Agora!!</option>
          </select>
        </div>
      </div>
      <div>
        <h3>4 - Por favor, justifique a resposta anterior</h3>
        <div>
          <textarea
            name="pergunta4"
            value={form.pergunta4}
            onChange={(event) => handleForm(event)}
            maxLength="200"
          />
          <span>{`${form.counter ? form.counter : 0}/200`}</span>
        </div>
        {
          result !== false
            ? (
              <div>
                <ButtonRed>
                  <button
                    type="button"
                    onClick={handleCancel}
                  >
                    Responder de novo
                  </button>
                </ButtonRed>
              </div>
            )
            : (
              <div>
                <ButtonGreen>
                  <button
                    type="button"
                    onClick={handleSubmit}
                  >
                    Enviar
                  </button>
                </ButtonGreen>
                <ButtonRed>
                  <button
                    type="button"
                    onClick={handleCancel}
                  >
                    Limpar Campos
                  </button>
                </ButtonRed>
              </div>
            )
        }

      </div>
    </FormStyled>
  );
}

export default Forms;
