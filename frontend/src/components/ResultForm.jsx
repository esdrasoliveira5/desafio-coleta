import React, { useContext } from 'react';
import desafioColetaContext from '../context/AppContext';
import { ResultFormStyled } from '../styles/Forms';

function ResultForm() {
  const { result } = useContext(desafioColetaContext);

  if (result === false) {
    return ('');
  }
  const {
    quantidadePositiva,
    quantidadeNegativa,
    quantidadeNaoAvaliada,
    total,
  } = result;
  return (
    <ResultFormStyled>
      <div>
        <div>
          <h3>Total</h3>
          <p>{total}</p>
        </div>
      </div>
      <div>
        <div>
          <h3>Quantidade Positiva</h3>
          <p>{quantidadePositiva}</p>
        </div>
        <div>
          <h3>% Positiva</h3>
          <p>{((quantidadePositiva * 100) / total).toFixed(2)}</p>
        </div>
      </div>
      <div>
        <div>
          <h3>Quantidade Negativa</h3>
          <p>{quantidadeNegativa}</p>
        </div>
        <div>
          <h3>% Negativa</h3>
          <p>{((quantidadeNegativa * 100) / total).toFixed(2)}</p>
        </div>
      </div>
      <div>
        <div>
          <h3>Quantidade Não Avaliada</h3>
          <p>{quantidadeNaoAvaliada}</p>
        </div>
        <div>
          <h3>% Não Avaliada</h3>
          <p>{((quantidadeNaoAvaliada * 100) / total).toFixed(2)}</p>
        </div>
      </div>
    </ResultFormStyled>
  );
}

export default ResultForm;
