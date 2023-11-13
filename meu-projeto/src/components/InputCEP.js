import React, { useState } from 'react';

const InputCEP = ({ onCEPChange }) => {
  const [cep, setCEP] = useState('');

  const handleCEPChange = (e) => {
    setCEP(e.target.value);
  };

  return (
    <div>
      <h2>Digite o CEP</h2>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={handleCEPChange}
      />
      <button onClick={() => onCEPChange(cep)}>Gerar CEP</button>
    </div>
  );
};

export default InputCEP;
