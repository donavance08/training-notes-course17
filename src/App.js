import { useState } from 'react';
import StarRating from './components/StarRating';
import './App.css';

function App() {
  const [status, setStatus] = useState(true);

  return (
    <>
      <StarRating rating={10}/>
    </>
  );
}

export default App;

