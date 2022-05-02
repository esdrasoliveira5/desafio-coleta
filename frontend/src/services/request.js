const URL_FETCH = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001/';
const APLICATION = 'application/json';

async function sendForm(obj) {
  try {
    const response = await fetch(`${URL_FETCH}form`, {
      method: 'POST',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
      body: JSON.stringify(obj),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}

export default sendForm;
