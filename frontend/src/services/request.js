const URL_FETCH = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001/';
const APLICATION = 'application/json';

async function sendForm({
  pergunta1,
  pergunta2,
  pergunta3,
  pergunta4,
}) {
  try {
    const response = await fetch(`${URL_FETCH}form`, {
      method: 'POST',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
      body: JSON.stringify({
        pergunta1,
        pergunta2,
        pergunta3,
        pergunta4,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}

export default sendForm;
