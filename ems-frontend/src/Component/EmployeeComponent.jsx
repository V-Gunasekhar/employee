import React from 'react'
import {useState} from 'react'
const EmployeeComponent = () => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const FirstNameChange = (e) => setFirstName(e.target.value);
  
const LastNameChange = (e) => setLastName(e.target.value);
  
const EmailChange = (e) => setEmail(e.target.value);
  
  function saveEmployee(e){
    e.preventDefault();
    const employee = {  
      firstName: firstName,
      lastName: lastName,
      email: email
    };
    console.log(employee);


  }
  return (
    <div>
        <div classNameName='container'>

            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name :</label>
                                <input type='text' placeholder='Enter First Name' name='firstName' className='form-control'
                                value={firstName} onChange={(e) => FirstNameChange(e)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name :</label>
                                <input type='text' placeholder='Enter Last Name' name='lastName' className='form-control'
                                value={lastName} onChange={(e) => LastNameChange(e)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email Id :</label>
                                <input type='text' placeholder='Enter Email Id' name='email' className='form-control'
                                value={email} onChange={(e) => EmailChange(e)}></input>

                            </div>
                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
    
  )
}

export default EmployeeComponent;