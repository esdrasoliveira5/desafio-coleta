import React from 'react';
import Footer from './components/Footer';
import Forms from './components/Forms';
import Header from './components/Header';
import { BodyStyled } from './styles/Forms';

function App() {
  return (
    <BodyStyled>
      <Header />
      <Forms />
      <Footer />
    </BodyStyled>
  );
}

export default App;
