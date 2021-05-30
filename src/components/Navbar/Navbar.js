import React from 'react';
import image from '../../images/open-book.png';
import {
 
  Link
} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/add">Add Contact</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active" to="/home" tabIndex={-1} aria-disabled="true">Home</Link>
              </li>
            </ul>
            <form className="d-flex">
              <h1 className="text-white"><img style={{width: "40px"}} src={image} alt="" />Contact Book</h1>
            </form>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;