
import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navbar = () => {
    return(
      <React.Fragment>

  <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{ fontFamily: "Comic Sans MS"}}>
  <Link className="navbar-brand" to="#" style ={{fontWeight: "bold",fontFamily:"Comic Sans MS", color: "white"}}>P.E.N</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>,
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

    <form action="" className="form-inline my-2 my-lg-0"><input type="text" className="form-control mr-sm-2" placeholder="Search here..."/><button className="btn btn-outline-light my-2 my-sm-0"> Search </button></form>

    <div className="row pull-right mx-3">
    <ul className="navbar-nav">
      
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup"style ={{fontWeight: "bold,",fontFamily:"Comic Sans MS", color: "white"}}><Button className="btn btn-warning">SignUp</Button></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login"style ={{fontWeight: "bold,",fontFamily:"Comic Sans MS", color: "white"}}><Button className="btn btn-success">Login</Button></NavLink>
      </li>

      </ul>
      </div>
    </div>
    </nav>
    
  <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{ fontFamily: "Comic Sans MS"}}>
  <div className="collapse navbar-collapse justify-content-center text-white" id="navbarSupportedContent">

  <div className="row mx-3">
    <ul className="navbar-nav">
      
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup"style ={{fontWeight: "bold,",fontFamily:"Comic Sans MS", color: "white"}}><Button className="">View Free Courses</Button></NavLink>
      </li>

      </ul>
      </div>
    <h5>I want to become </h5>
    <select className="form-control w-25 m-2" id="sel1">
      <option>Artist</option>
      <option>Programmer</option>
      <option>Businessman</option>
      <option>Enterpreneur</option>
    </select>

    </div>
    </nav>
    </React.Fragment>
    );
    };
    export default Navbar;
    /*
      
      <li className="nav-item active">
        <NavLink className="nav-link" to="/Home"style ={{fontWeight: "bold,",fontFamily:"Comic Sans MS", color: "white"}}><Button className="btn btn-primary">Dashboard <span className="sr-only">(current)</span></Button></NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/profile"style ={{fontWeight: "bold,",fontFamily:"Comic Sans MS", color: "white"}}><Button className="btn btn-primary">Profile <span className="sr-only">(current)</span></Button></NavLink>
      </li>
    */