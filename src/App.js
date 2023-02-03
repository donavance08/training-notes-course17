import { useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState(true);

  return (
    <div>
      <h1>The package is: {status}</h1>
      <div style={{ display: 'inline block' }}>
        <input
          type="checkbox"
          value={false}
          defaultChecked={status}
          onClick={() => setStatus((s) => !s)}
        />
        <p>{status ? 'Checked' : 'Not Checked'}</p>
      </div>
    </div>
  );
}

export default App;

