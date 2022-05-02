import React from 'react';
import Footer from './components/Footer';
import Forms from './components/Forms';
import Header from './components/Header';
import ResultForm from './components/ResultForm';
import { BodyStyled } from './styles/Forms';
import Provider from './context/DesafioColetaProvider';

function App() {
  return (
    <Provider>
      <BodyStyled>
        <Header />
        <Forms />
        <ResultForm />
        <Footer />
      </BodyStyled>
    </Provider>
  );
}

export default App;
