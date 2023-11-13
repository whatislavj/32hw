


const Keys = ({ keys, onShowValue }) => {
  return (
    <div>
      <h3>Cheile din Local Storage:</h3>
      <ul>
        {keys.map((key) => (
          <li key={key}>
            {key}
            <button onClick={() => onShowValue(key)}>Afișează Valoarea</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Keys;
