import React, { useState, useEffect } from 'react';
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
  const [tableHeadings, setTableHeadings] = useState({
    headings: [
      { name: "Image", width: "10%" },
      { name: "Name", width: "10%" },
      { name: "Phone", width: "20%" },
      { name: "Email", width: "20%" },
      { name: "DOB", width: "10%" }
    ]
  });
  const [orderBy, setOrderBy] = useState("");
  const [asc, setAsc] = useState(true);


  useEffect(() => {
    API.getUsers()
      .then(data => {
        setEmpData(data.data.results)
      })

  }, [])

  useEffect(() => {
    const handleSort = () => {
      let filteredEmp = empData.filter(employee => {
        let name = employee.name.first + employee.name.last
        return name.toLowerCase().indexOf(search.toLowerCase()) >= 0
      });
      let sortedEmp = [];
      if (asc) {
        sortedEmp = filteredEmp.sort((a, b) => {
          switch(orderBy.toLowerCase()) {
            case 'name':
              return a.name.first.localeCompare(b.name.first);
            case 'phone':
              let numA = parseInt(a.cell.slice(1, 4));
              let numB = parseInt(b.cell.slice(1, 4));
              return numA - numB;
            case 'dob':
              return a.dob.age - b.dob.age
            default:
              return a.name.first.localeCompare(b.name.first);
          }          
        })
      } else {
        sortedEmp = filteredEmp.sort((a, b) => {
          switch(orderBy.toLowerCase()) {
            case 'name':
              return b.name.first.localeCompare(a.name.first);
            case 'phone':
              let numA = parseInt(a.cell.slice(1, 4));
              let numB = parseInt(b.cell.slice(1, 4));
              return numB - numA;
            case 'dob':
              return b.dob.age - a.dob.age   
            default:
              return b.name.first.localeCompare(a.name.first);
          }         
        })
      }
      return sortedEmp;
    }
    let sorted = handleSort();
    setSearchResults(sorted)
  }, [search, empData, orderBy, asc])


  return (
    <div className="App">
      <EmpDataContext.Provider value={{
        search, setSearch, 
        empData, setEmpData, 
        searchResults, setSearchResults, 
        tableHeadings, setTableHeadings, 
        orderBy, setOrderBy,
        asc, setAsc
      }}>
        <Header />
        <SearchBar />
        <EmpTable />
      </EmpDataContext.Provider>
    </div>
  );
}

export default App;
