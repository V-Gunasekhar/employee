import React,{useState, useEffect} from 'react'
import { listEmployees } from '../Services/EmployeeServices';
import { useNavigate } from 'react-router-dom';
const ListEmployeeComponent = () => {
    const navigate = useNavigate();

    const addNewEmployee = () => {
        navigate('/add-employee');
    }
const [employees,setEmployees] = useState([]);



useEffect(() => {

    listEmployees().then(response => {

        setEmployees(response.data);

        }).catch(error => {

            console.log(error);
        });
    }, []);

    
    
  return (
    <div>
        <h1>List Employee Component</h1>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                    

                }
            </tbody>
        </table>
    </div>

  )
}

export default ListEmployeeComponent