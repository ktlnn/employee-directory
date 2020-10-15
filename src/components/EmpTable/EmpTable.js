import React, { useContext } from 'react';
// import EmpData from '../EmpData/EmpData';
import EmpDataContext from '../../utils/EmpDataContext';

// this is how the employee table is generated

const EmpTable = () => {

    const context = useContext(EmpDataContext);

    return (
        <div className="emp-table">
            <table className="table table-striped">
               {context.searchResults.map((employee) => {
                   return(
                       <tr>
                           <td>
                               {employee.name.first}
                           </td>
                       </tr>
                   )
               })}
                {/* where EmpData would go */}
            </table>
        </div>
    )
}

export default EmpTable;

