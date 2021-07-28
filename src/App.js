import {useEffect,useState} from 'react';
import axios from 'axios';
import Gallery from './Gallery';

function App() {
  const [paintings,setPaintings]=useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/paintings").then(res=>setPaintings(res.data))
    return () => {
      setPaintings([])
    }
    
  }, [])
  
  return (
    <div className="App">
      <header className="Header">
        <h1 className="Title">galleria.</h1>
        <p>START SLIDESHOW</p>
        </header>
    <Gallery paintings={paintings}/>
    </div>
  );
}

export default App;
