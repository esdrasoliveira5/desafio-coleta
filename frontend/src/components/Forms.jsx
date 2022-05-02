/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Button } from '../styles/Forms';

function Forms() {
  return (
    <form>
      <h1>Desafio Coleta - GRX</h1>
      <Button>
        <h3>Voce se considera bom em logica?</h3>
        <div className="button">
          <input type="radio" id="yes" name="pergunta1" />
          <label htmlFor="yes">Sim</label>
        </div>
        <div className="button">
          <input type="radio" id="no" name="pergunta1" />
          <label htmlFor="no">Nao</label>
        </div>
      </Button>
      <Button>
        <h3>Gosta de aprender com desafios?</h3>
        <div className="button">
          <input type="radio" id="answer2-yes" name="pergunta2" />
          <label htmlFor="answer2-yes">Sim</label>
        </div>
        <div className="button">
          <input type="radio" id="answer2-no" name="pergunta2" />
          <label htmlFor="answer2-no">Nao</label>
        </div>
      </Button>
    </form>
  );
}

export default Forms;
