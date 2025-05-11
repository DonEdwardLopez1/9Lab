import React, { useState } from 'react';
import './App.css';

function App() {
  const [englishWord, setEnglishWord] = useState('');
  const [tagalogTranslation, setTagalogTranslation] = useState('');

  const translateWord = () => {
    // Simulated translation mapping
    const translations = {
      hello: 'kumusta',
      world: 'Mundo',
      example: 'halimbawa',
      love: 'pag-ibig',
      friend: 'kaibigan',
      food: 'pagkain',
      water: 'tubig',
      house: 'bahay',
      family: 'pamilya',
      school: 'paaralan',
      work: 'trabaho',
      happy: 'masaya',
      sad: 'malungkot',
      beautiful: 'maganda',
      strong: 'malakas',
      fast: 'mabilis',
      slow: 'mabagal',
      light: 'liwanag',
      dark: 'dilim',
      good: 'mabuti',
      bad: 'masama',
      morning: 'umaga',
      night: 'gabi',
      thank: 'salamat',
      sorry: 'paumanhin',
      yes: 'oo',
      no: 'hindi',
    };

    const translation = translations[englishWord.toLowerCase()];
    setTagalogTranslation(translation || 'Translation not found');
  };

  return (
    <div className="app">
      <div className="container">
      <h1>ENGLISH TO TAGALOG TRANSLATOR</h1>
      <div className="input-group">
        <label htmlFor="english-word">English Word: </label>
        <input id="english-word" type="text" value={englishWord} onChange={(e) => setEnglishWord(e.target.value)} />
      </div>
      <button onClick={translateWord}>Translate</button>
      {tagalogTranslation && (
        <div>
          <h2>Tagalog Translation:</h2>
          <p>{tagalogTranslation}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;