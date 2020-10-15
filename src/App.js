import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import API from './utils/API';
import EmpTable from './components/EmpTable/EmpTable';
import EmpDataContext from './utils/EmpDataContext';

function App() {

  const [search, setSearch] = useState("");
  const [empData, setEmpData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    API.getUsers()
    .then(data => {
      setEmpData(data.data.results)
    })

  }, [])

  useEffect( () => {
    setSearchResults(empData.filter( employee => {
      // filters have to return true or false or a condition
      // anything true will stay
      // anything false will get removed
      // what if/else-if/else goes here
      return employee.name.first.toLowerCase().indexOf(search.toLowerCase()) >= 0 
    }))
  }, [search, empData])


  return (
    <div className="App">
    <EmpDataContext.Provider value={{search, setSearch, empData, setEmpData, searchResults, setSearchResults}}>
      <Header />
      <SearchBar />
      <EmpTable />
    </EmpDataContext.Provider>
    </div>
  );
}

export default App;
