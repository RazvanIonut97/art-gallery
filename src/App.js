import {useEffect,useState} from 'react';
import axios from 'axios';
import Gallery from './Gallery';

function App() {
  const url="https://gist.githubusercontent.com/RazvanIonut97/114e102353b29415f039c758ade45cf7/raw/144d3144ac0065f5f4eb06c2e23afdbdbb6c36cc/paintings.json";
  const [paintings,setPaintings]=useState([]);
  useEffect(() => {
    axios.get(url).then(res=>setPaintings(res.data))
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
