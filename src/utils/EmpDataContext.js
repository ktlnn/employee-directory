import React from "react";

const EmpDataContext = React.createContext({
    search: "",
    setSearch: () => {},
    empData: [],
    setEmpData: () => {},
    searchResults: [],
    setSearchResults: () => {},
    tableHeadings: {
        headings: [
            {name: "Image", width: "10%"},
            {name: "Name", width: "10%"},
            {name: "Phone", width: "20%"},
            {name: "Email", width: "20%"},
            {name: "DOB", width: "10%"}
          ]
    },
    setTableHeadings: () => {},
    orderBy: "",
    setOrderBy: () => {},
    asc: true,
    setAsc: () => {}
});

export default EmpDataContext;