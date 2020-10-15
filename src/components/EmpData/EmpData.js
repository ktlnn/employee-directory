import React, { useContext } from 'react';
import EmpDataContext from '../../utils/EmpDataContext';

// this is how the employee data is generated

const EmpData = () => {

    const context = useContext(EmpDataContext);

    return (
        <div className="emp-data">
            <table className="table table-striped">
               {context.searchResults.map((employee) => {
                   return(
                       <tr>
                           <td>
                               {employee.name.first} {employee.name.last}
                           </td>
                           <td>
                               {employee.cell}
                           </td>
                           <td>
                               {employee.email}
                           </td>
                           <td>
                               {employee.dob.date}
                           </td>
                       </tr>
                   )
               })}
                
            </table>
        </div>
    )
}

export default EmpData;