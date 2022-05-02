import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import desafioColetaContext from './AppContext';

function DesafioColeta({ children }) {
  const [result, setResult] = useState(false);

  const contextValue = useMemo(() => ({
    result,
    setResult,
  }), [result]);

  return (
    <desafioColetaContext.Provider value={contextValue}>
      { children }
    </desafioColetaContext.Provider>
  );
}

DesafioColeta.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DesafioColeta;
