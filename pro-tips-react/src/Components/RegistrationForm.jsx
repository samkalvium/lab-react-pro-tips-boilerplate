import React, { useState } from 'react'
import './Reg.css'

function RegistrationForm() {
  const [formVal, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneno: ''
  });

  const [errors, setErrors] = useState({ a: '' });

  function handleForm(e) {
    const [name, value] = [e.target.name, e.target.value];
    setForm({ ...formVal, [name]: value });
  }

  function validate(e) {
    e.preventDefault();

    let error = {};
    if (formVal.firstname.length == 0) {
      error.firstname = "Please Enter your First Name.";
    }
    if (formVal.lastname.length == 0) {
      error.lastname = "Please Enter your Last Name.";
    }
    if (formVal.email.length == 0) {
      error.email = "Please Enter your Mail."
    }
    if (formVal.phoneno.length == 0) {
      error.phoneno = "Please Enter your Phone Number.";
    }
    else if (formVal.phoneno.length != 10) {
      error.phoneno = "Invalid Phone Number.";
    }
    setErrors(error);
  }

  return (
    <div className='container'>
      <form className='form' onSubmit={validate}>
        {Object.keys(errors).length == 0 && <h3 className='regs'>Registration successfull!</h3>}
        <input type="text" placeholder='First Name' name='firstname' id='name' value={formVal.firstname} onChange={handleForm} />
        {errors.firstname && <div className='error'>{errors.firstname}</div>}
        <input type="text" placeholder='Last Name' name='lastname' value={formVal.lastname} onChange={handleForm} />
        {errors.firstname && <div className='error'>{errors.lastname}</div>}
        <input type="email" placeholder='E-mail' name='email' value={formVal.email} onChange={handleForm} />
        {errors.firstname && <div className='error'>{errors.email}</div>}
        <input type="text" placeholder='Phone Number' name='phoneno' value={formVal.phoneno} onChange={handleForm} />
        {errors.firstname && <div className='error'>{errors.phoneno}</div>}
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegistrationForm
