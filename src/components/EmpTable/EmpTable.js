import React, {useContext} from 'react';
import EmpDataContext from '../../utils/EmpDataContext';
import EmpData from '../EmpData/EmpData';

const EmpTable = () => {

    const context = useContext(EmpDataContext)

    return (
        <div className="emp-table">
            <table className="table table-striped">
                <thead>
                 <tr>
                     {context.tableHeadings.headings.map(({name, width}) => {
                        return (
                            <th
                            className="col"
                            key={name}
                            style={{
                                width: width,
                                cursor: "pointer"
                            }}
                            onClick={() => {
                                if (context.orderBy === name){
                                    context.setAsc(!context.asc)
                                }
                                context.setOrderBy(name);
                            }}
                            >
                                {name}
                            </th>
                        )
                     })}
                 </tr>                   
                </thead>
                <EmpData />
            </table>
        </div>
    );
}

export default EmpTable;

