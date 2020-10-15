import React, {useState, useEffect} from 'react';
import EmpData from '../EmpData/EmpData';
import API from '../../utils/API';
import EmpDataContext from '../../utils/EmpDataContext';

const EmpDir = () => {
    // const [empState, setEmpState] = useState({
    //     emp: [],
    //     filteredEmp: [],
    //     headings: [
    //         { name: "Image", width: "10%"},
    //         { name: "name", width: "10%"},
    //         { name: "phone", width: "20%"},
    //         { name: "email", width: "20%"},
    //         { name: "dob", width: "10%"}
    //       ]
    // });

    // make handleSearch function -> allows user to use search bar to narrow down results

    // make handleSort function -> allows user to sort header of table asec/desec

    // useEffect for API 

    return (
        // to make context available to react components, must use Provider
        // every context object comes with a Provider React component
        // provider allows the context to be consumed by other components
        // the provider prop "value" contains the data wanted to be made available
            <div className="emp-data-area">

            </div>
       
    )
}

export default EmpDir;