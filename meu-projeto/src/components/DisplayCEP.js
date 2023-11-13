import React from 'react';

const DisplayCEP = ({ generatedCEP }) => {
  return (
    <div>
      <h2>CEP Gerado</h2>
      <p>{generatedCEP}</p>
    </div>
  );
};

export default DisplayCEP;
