import React, { useState } from 'react';
import InputCEP from './components/InputCEP';
import DisplayCEP from './components/DisplayCEP';

function App() {
  const [generatedCEP, setGeneratedCEP] = useState('');

  const handleCEPChange = (cep) => {
    // Aqui você pode implementar a lógica para gerar o CEP ou fazer uma chamada API
    setGeneratedCEP(cep);
  };

  return (
    <div>
      <InputCEP onCEPChange={handleCEPChange} />
      <DisplayCEP generatedCEP={generatedCEP} />
    </div>
  );
}

export default App;
