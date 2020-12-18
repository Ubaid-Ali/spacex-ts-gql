import React, { useState } from 'react';
import './App.css';
import Launch from './components/Launch'
import LaunchDetails from './components/LaunchDetails'

function App() {

  const [id, setId] = useState(11);

  const handleIdChange = React.useCallback((newID) => {
    setId(newID)
  }, [])

  return (
    <div className="App">
      <Launch handleIdChange={handleIdChange} />
      <LaunchDetails id={id} />
    </div>
  );
}

export default App;
