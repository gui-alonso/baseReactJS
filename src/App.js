import React, {useState} from 'react';
import './App.css';
import MyBody from './MyBody';

function App() {

  const [str, setStr] = useState('Olá mundo');

  function handleClick(){
    setStr('Olá DankiCode');
  }

  return (
    <div className="App">
      <h2>{str}</h2>
      <button onClick={()=>handleClick()}>Clique aqui</button>
      <MyBody></MyBody>
    </div>
  );
}

export default App;
