import React, { useContext } from 'react';
// import EmpData from '../EmpData/EmpData';
import EmpDataContext from '../../utils/EmpDataContext';

// this is how the employee table is generated

const EmpTable = () => {

    const context = useContext(EmpDataContext);

    return (
        <div className="emp-table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        {context.empState.headings.map(({name}) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    // style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name);
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                {/* where EmpData would go */}
            </table>
        </div>
    )
}

export default EmpTable;

{/* <th scope="col">Image</th>  
                        <th 
                        scope="col"
                        onClick={(name) => {
                            context.handleSort(name)
                        }}
                        >
                        Name
                        <span className="pointer"></span>
                        </th>  
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>  
                        <th scope="col">DOB</th> */}