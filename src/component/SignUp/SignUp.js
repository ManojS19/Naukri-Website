import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../useAuth';

function SignUp() {

  //protected Route
  const navigate = useNavigate();
  const { login } = useAuth();
  const { state } = useLocation();
  const handleLogin = () => {
    login();
    navigate('/');
    // login().then(()=>{
    //     navigate(state?.path || '/about');
    // })
  }

  const initialValue = {
    userName: '',
    email: '',
    number: '',
    password: '',
    rePassword: '',
  }

  const [formValues, setFormValues] = useState(initialValue);
  const [errorValues, setErrorValues] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorValues(handleErrors(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(errorValues).length === 0 && isSubmit) {
      // console.log(formValues);
      handleLogin();
    }
  }, [errorValues])

  const handleErrors = (values) => {
    const errors = {};
    // const nameRegex= /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
    const phoneRegex = /^\(?([6-9]{1})([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!#$%&? "]).*$/;

    if (!values.userName) {
      errors.userName = "Username is Required!";
    }
    // else if(!nameRegex.test(values.userName)){
    //   errors.userName="Usernames can consist of lowercase and capitals. Usernames can consist of alphanumeric characters. Usernames can consist of underscore and hyphens and spaces. Cannot be two underscores, two hypens or two spaces in a row. Cannot have a underscore, hypen or space at the start or end";
    // }
    if (!values.email) {
      errors.email = "Email is Required!";
    }
    else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.number) {
      errors.number = "Mobile Number is Required!";
    }
    else if (!phoneRegex.test(values.number)) {
      errors.number = "Please enter valid Mobile number!";
    }
    if (!values.password) {
      errors.password = "Password is Required!";
    }
    else if (!passwordRegex.test(values.password)) {
      errors.password = "your password must have capital and small Letters, numbers, special Characters!";
    }
    // else if(values.password.length<4){
    //   errors.password="Password must be more than 4 characters!";
    // }
    // else if(values.password.length>10){
    //   errors.password="Password can not exceed more than 10 characters!";
    // }
    if (values.password && !values.rePassword) {
      errors.rePassword = "Please Re-Enter Password!";
    }
    else if (!values.rePassword) {
      errors.rePassword = "Password is Required!";
    }
    else if (values.password !== values.rePassword) {
      errors.rePassword = "Your Password is not matching!";
    }

    return errors;
  }

  return (
    <>
      <div className='main-ui-register'>
        <div className='main-register'>
          <div className='heading'>
            <h1>Register, Here!</h1>
          </div>
          <div className='main-form'>
            <form onSubmit={handleSubmit}>
              <div className='ui-inputs'>
                <input type='text'
                  name='userName'
                  placeholder='Username'
                  value={formValues.userName}
                  onChange={handleChange}
                />
                <p> {errorValues.userName}</p>
              </div>
              <div className='ui-inputs'>
                <input type='text'
                  name='email'
                  placeholder='Email'
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p> {errorValues.email}</p>
              </div>
              <div className='ui-inputs'>
                <input type='text'
                  name='number'
                  placeholder='Mobile No'
                  value={formValues.number}
                  onChange={handleChange}
                />
                <p> {errorValues.number}</p>
              </div>
              <div className='ui-inputs'>
                <input type='password'
                  name='password'
                  placeholder='Password'
                  value={formValues.password}
                  onChange={handleChange}
                />
                <p> {errorValues.password}</p>
              </div>
              <div className='ui-inputs'>
                <input type='password'
                  name='rePassword'
                  placeholder='Re-Enter Password'
                  value={formValues.rePassword}
                  onChange={handleChange}
                />
                <p> {errorValues.rePassword}</p>
              </div>

              <button>SignUp</button>
            </form>
            <div className='link-login'>
              <p>Already have an account? <Link to='/login'>Log in</Link></p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
