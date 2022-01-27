import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar({setSearchData, searchData}) {
    // The first time i declared use state here and then in the search function i set setSearchData after i got the values of the user input. The new method allows me cirumnavigate this and set search Data righ away. 
      
    let navigate = useNavigate()
    const searches = (e)=>{
       navigate("/search")
       setSearchData(e.target.value)
        

    }
    const reset = ()=>{
        searchData("")
    }
 
    return (
  
  <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Movie Land</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled">Coming Soon</a>
        </li>
      </ul>
      <form className="d-flex" onSubmit={(e)=>{
          e.preventDefault()
          reset()

      }}>
        <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" value={searchData} onChange={searches} />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>



  </div>
  );
}

export default NavBar;
