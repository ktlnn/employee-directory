import React, { useContext } from 'react';
import EmpDataContext from '../../utils/EmpDataContext';

// this is how the employee data is generated

const EmpData = () => {

    const context = useContext(EmpDataContext);

    function formatDOB(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDOB = [month, day, year].join("-");
        return formattedDOB;
    }

    return (
        <div className="emp-data">
            <table className="table table-striped">
               {context.searchResults.map((employee) => {
                   return(
                       <tr>
                           <td>
                               <img
                               src={employee.picture.medium}
                               alt={"profile picture for " + employee.name.first + " " + employee.name.last}
                               className="img-responsive"
                               />
                           </td>
                           <td>
                               {employee.name.first} {employee.name.last}
                           </td>
                           <td>
                               {employee.cell}
                           </td>
                           <td>
                               <a href={"mailto:" + employee.email} target="__blank">
                                   {employee.email}
                               </a>
                           </td>
                           <td>
                               {formatDOB(employee.dob.date)}
                           </td>
                       </tr>
                   )
               })}
                
            </table>
        </div>
    )
}

export default EmpData;