import { useState, useEffect } from 'react';
import Input from './Input';
import Keys from './Keys';

const LocalStorage = () => {
  const [keys, setKeys] = useState([]);

  const addToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
    updateKeysList();
  };

  const updateKeysList = () => {
    const localStorageKeys = Object.keys(localStorage);
    setKeys(localStorageKeys);
  };

  const showValue = (key) => {
    const value = localStorage.getItem(key);
    console.log(`Valoarea pentru cheia ${key}: ${value}`);
  };

  useEffect(() => {
    updateKeysList();
  }, []);

  return (
    <div>
      <Input onAddToLocalStorage={addToLocalStorage} />
      <Keys keys={keys} onShowValue={showValue} />
    </div>
  );
};

export default LocalStorage;
