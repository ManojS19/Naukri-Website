import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../useAuth';

const Login = () => {


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
        username: '',
        password: '',
    }
    const [user, setUser] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = ((e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(user));
        setIsSubmit(true);

    }

    useEffect(() => {
        if (Object.keys(formError).length === 0 && isSubmit) {
            // console.log(user);
            handleLogin();
        }
    }, [formError])

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "Please enter your Username!";
        }
        if (!values.password) {
            errors.password = "Please enter your Password!";
        }
        return errors;
    }
    return (
        <>
            <div className='main-page'>
                <div className='main-login'>
                    <div className='user-login'>
                        <h1>User Login</h1>
                    </div>
                    <div className='login-form'>
                        <form onClick={handleSubmit}>
                            <div className='login-input'>
                                <input
                                    type='text'
                                    name='username'
                                    placeholder='Username'
                                    value={user.username}
                                    onChange={handleChange}
                                />
                                <p>{formError.username}</p>
                            </div>
                            <div className='login-input'>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    value={user.password}
                                    onChange={handleChange}
                                />
                                <p>{formError.password}</p>
                            </div>
                            <button >Login</button>
                        </form>
                        <div className='link-signup'>
                            <p>Don’t have an account? <Link to='/signUp'>Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
