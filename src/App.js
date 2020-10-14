import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar'

function App() {
  return (
    <div className="App">
    <Header />
    <SearchBar />
    </div>
  );
}

export default App;
