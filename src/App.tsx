import React, { useState } from 'react';
import './App.css';
import Launch from './components/Launch'
import LaunchDetails from './components/LaunchDetails'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [id, setId] = useState(0);
  const [showlist, setShowList] = useState(true)

  const handleIdChange = React.useCallback((newID) => {
    setId(newID)
    setShowList(false)
  }, [])

  const handleshow = React.useCallback(() => {
    setShowList(true)
    setId(0)
  }, [])

  return (
    <div className="App">
      <Header handleshow={handleshow}/>

      {showlist === true && id === 0?
        <Launch handleIdChange={handleIdChange} /> :
        null
      }
      {showlist === false ?
        <LaunchDetails id={id} /> :
        null
      }
      <Footer />
    </div>
  );
}

export default App;
