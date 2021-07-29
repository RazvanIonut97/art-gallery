import {useEffect,useState} from 'react';
import axios from 'axios';
import Gallery from './Gallery';
import { MdPlayArrow } from "react-icons/md";

function App() {
  const url="https://gist.githubusercontent.com/RazvanIonut97/114e102353b29415f039c758ade45cf7/raw/cb3ce4b83710be2215eaf50d2c8bd823c22ac6a5/paintings.json";

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
        <h1 className="Title">  galleria.</h1>
        <MdPlayArrow className="BtnPlay"/>
        <p className="TextPlay">START SLIDESHOW</p>
        </header>
    <Gallery paintings={paintings}/>
    </div>
  );
}

export default App;
