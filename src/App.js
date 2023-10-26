import React from 'react';
import JobDetail from './component/JobDetail/JobDetail';
import JdSummary from './component/JdSummary/JdSummary';
import { Routes, Route } from 'react-router-dom';
import ErrorHandlePage from './component/ErrorHandlePage/ErrorHandlePage';
import './App.css';
import SignUp from './component/SignUp/SignUp';
import Login from './component/Login/Login';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import RequireAuth from './RequireAuth';
import Navbar from './component/Navbar/Navbar';
import ApplyJob from './component/ApplyJob/ApplyJob';

function App() {
  return (
    <div className="App">
      
      <div className='navbar'>
        <Navbar/>
      </div>


        <Routes>
          <Route path='/' element={<JobDetail/>}/>
          <Route path='/getJd/:jdId' element={<JdSummary/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route element={<ErrorHandlePage/>}/>

          
          <Route path='/apply'
           element={
           <RequireAuth>
            <ApplyJob/>
           </RequireAuth>
          }
          />

          <Route path='/about' 
          element={
          <RequireAuth>
            <About/>
          </RequireAuth>
        }
        />
        
          <Route path='/contacts' 
          element={
            <RequireAuth>
              <Contact/>
            </RequireAuth>
          }
          />

        </Routes>
      
    </div>
  );
}

export default App;
