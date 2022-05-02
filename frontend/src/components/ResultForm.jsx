import React from 'react';

// {
//   "pergunta1": "Sim",
//   "pergunta2": "Não",
//   "pergunta3": "Não Sei",
//   "pergunta4": "Ola eu sou uma banana11111111",
//   "quantidadePositiva": 7,
//   "quantidadeNegativa": 17,
//   "quantidadeNaoAvaliada": 21,
//   "total": 45
// }

function ResultForm({
  quantidadePositiva,
  quantidadeNegativa,
  quantidadeNaoAvaliada,
  total,
}) {
  return (
    <div>
      <div>
        <h3>Total</h3>
        <p>{total}</p>
      </div>
      <div>
        <div>
          <h3>Quantidade Positiva</h3>
          <p>{quantidadePositiva}</p>
        </div>
        <div>
          <h3>% Positiva</h3>
          <p>{(quantidadePositiva * 100) / total }</p>
        </div>
      </div>
      <div>
        <div>
          <h3>Quantidade Negativa</h3>
          <p>{quantidadeNegativa}</p>
        </div>
        <div>
          <h3>% Negativa</h3>
          <p>{(quantidadeNegativa * 100) / total }</p>
        </div>
      </div>
      <div>
        <div>
          <h3>Quantidade Nao Avaliada</h3>
          <p>{quantidadeNaoAvaliada}</p>
        </div>
        <div>
          <h3>% Nao Avaliada</h3>
          <p>{(quantidadeNaoAvaliada * 100) / total }</p>
        </div>
      </div>
    </div>
  );
}

export default ResultForm;
