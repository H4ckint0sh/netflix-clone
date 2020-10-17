import React from 'react';
import './App.css';

// components
import Row from './Row';
import requests from './requests';


function App() {
  return (
    <div className="app">
      <h1>frontend netflix</h1>
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row 
        title="Trending Now" 
        fetchUrl={requests.fetchTrending} 
      />
    </div>
  );
}

export default App;
