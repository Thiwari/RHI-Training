import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import "./header2.css";
import { useAuth } from '../utils/auth';

import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  const auth = useAuth()
  const handleLogout = ()=>{
      auth.logout()
      return <Navigate to="/"/>
  }
  
  return (
    <>

<div>
        <header className="header">
            
            
            <Link to='/search' className="header--title">
            <h2 className="header--title">Rally Health India</h2>
            </Link>    

            
            <div className='header--profile'>
           
            {/* <button className="header-ProfileBtn" onClick={handleLogout} type=''>Logout</button> */}
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='header-ProfileBtn'>
        Profile
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  className='dropdown-content'>Settings</Dropdown.Item>
        
        <Dropdown.Item  className='dropdown-content' onClick={handleLogout}>Logout</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>



            </div>
            
        </header>  

        <div className='container1'>
            <div className="col-lg-12">
                <p>Hello {auth.user}, Who are you looking for?</p>
            </div>
    </div>


    </div>

</>
    

  
        

  )
}

export default Header