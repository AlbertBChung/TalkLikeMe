import React from 'react';
import logo from './img/icon.png';
import './App.css';
import Dropzone from './components/dropzone'
import VocabListContainer from './components/vocablistContainer'
import InfoPanel from './components/infoPanel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: 'flex'}}>
          <img src={logo} style={{margin:'auto', height: 80}} />
          <h1 style={{color: '#A9A9A9', margin: 20}}>Talk Like Me</h1>
        </div>
        <div style={{width: '90%'}}>
          <InfoPanel/>
        </div>

        <div style={{display: 'flex'}}>
        </div>
        <Dropzone/>
        <VocabListContainer/>
      </header>
    </div>
  );
}

export default App;
