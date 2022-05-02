import React from 'react';
import Footer from './components/Footer';
import Forms from './components/Forms';
import Header from './components/Header';
import ResultForm from './components/ResultForm';
import { BodyStyled } from './styles/Forms';

function App() {
  return (
    <BodyStyled>
      <Header />
      <Forms />
      <ResultForm />
      <Footer />
    </BodyStyled>
  );
}

export default App;
