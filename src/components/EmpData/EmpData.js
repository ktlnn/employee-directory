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
     
            <tbody>
               {context.searchResults.map((employee) => {
                   return(
                       <tr key={employee.login.uuid}>
                           <td>
                               <img
                               src={employee.picture.medium}
                               alt={"profile picture for " + employee.name.first + " " + employee.name.last}
                               className="img-responsive"
                               />
                           </td>
                           <td className="align-middle">
                               {employee.name.first} {employee.name.last}
                           </td>
                           <td className="align-middle">
                               {employee.cell}
                           </td>
                           <td className="align-middle">
                               <a href={"mailto:" + employee.email} target="__blank">
                                   {employee.email}
                               </a>
                           </td>
                           <td className="align-middle">
                               {formatDOB(employee.dob.date)}
                           </td>
                       </tr>
                   )
               })}
                
            </tbody>
     
    )
}

export default EmpData;