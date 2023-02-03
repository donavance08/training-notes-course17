// import StarRating from './components/StarRating';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('Dan');
  useEffect(() => {
    fetch('http://api.github.com/users')
      .then((response) => response.json())
      .then((result) => console.log);
  });

  return (
    <>
      {/* <StarRating rating={10}/> */}
      <section>
        <p>Congratulations {name}!</p>
        <button onClick={() => setName('Will')}>Change winner</button>
      </section>
    </>
  );
}

export default App;

