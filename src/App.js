import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import EmpTable from './components/EmpTable/EmpTable';

function App() {
  return (
    <div className="App">
    <Header />
    <SearchBar />
    <EmpTable />
    </div>
  );
}

export default App;
