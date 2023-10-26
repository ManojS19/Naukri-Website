import React, { useState } from 'react';
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../useAuth';
function Navbar() {

  const[ clicked, setClicked]=useState(false);

  const handleClick=()=>{
    setClicked(!clicked);
  }

  const handleCheck=()=>{
    setClicked(false);
  }

  const { authed, logout } = useAuth();
  const navigate= useNavigate();

  const handleLogout= ()=>{
    logout();
    navigate("/");
  };


  return (
    <nav className='navbarItems'>
      <Link className='logo-link' to='/'><h1 className='navbar-logo'>Naukri Job</h1></Link>
      <div className='menu-icons' onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li onClick={handleCheck}><Link className='nav-link' to='/'><i className='fa-solid fa-house-user'></i> Home</Link></li>
        <li onClick={handleCheck}>{authed && <Link className='nav-link' to='/about'><i className='fa-solid fa-circle-info'></i>About</Link>}</li>
        <li onClick={handleCheck}>{authed && <Link className='nav-link' to='/contacts'><i className='fa-solid fa-address-book'></i>Contact</Link>}</li>
        <li onClick={handleCheck}>{!authed && <Link className='nav-login-link' to='/login'>Login</Link>}</li>
        <li onClick={handleCheck}>{!authed && <Link className='nav-signup-link' to='/signUP'>SignUp</Link>}</li>
        <li onClick={handleCheck}>{authed && <button className='nav-logout-link' onClick={handleLogout}>Logout</button>}</li>
      </ul>
    </nav>
  );
}

export default Navbar;

