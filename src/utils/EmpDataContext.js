import React from "react";

const EmpDataContext = React.createContext({
    search: "",
    setSearch: () => {},
    empData: [],
    setEmpData: () => {},
    searchResults: [],
    setSearchResults: () => {}
});

export default EmpDataContext;