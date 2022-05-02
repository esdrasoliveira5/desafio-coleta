import React from 'react';
import { HeaderStyled } from '../styles/Forms';
import GRX from '../images/grx.png';

function Header() {
  return (
    <HeaderStyled>
      <a href="http://www.grtsolucoes.com.br/" target="_blank" rel="noreferrer">
        <img src={GRX} alt="grx logo" />
      </a>
    </HeaderStyled>
  );
}

export default Header;
