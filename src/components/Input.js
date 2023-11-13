import { useState } from 'react';

const Input = ({ onAddToLocalStorage }) => {
  const [keyInput, setKeyInput] = useState('');
  const [valueInput, setValueInput] = useState('');

  const handleAddClick = () => {
    onAddToLocalStorage(keyInput, valueInput);
    setKeyInput('');
    setValueInput('');
  };

  return (
    <div>
      <label>Cheie:</label>
      <input type="text" value={keyInput} onChange={(e) => setKeyInput(e.target.value)} />
      <label>Valoare:</label>
      <input type="text" value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
      <button onClick={handleAddClick}>Adaugă în Local Storage</button>
    </div>
  );
};

export default Input;
