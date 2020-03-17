
import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navbar = () => {
    return(
  <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{ fontFamily: "Comic Sans MS"}}>
  <Link className="navbar-brand" to="#" style ={{fontWeight: "bold",fontFamily:"Comic Sans MS", color: "white"}}>P.E.N</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>,
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

    <form action="" className="form-inline my-2 my-lg-0"><input type="text" className="form-control mr-sm-2" placeholder="Search here..."/><button className="btn btn-outline-light my-2 my-sm-0"> Search </button></form>

    <div className="row pull-right mx-3">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/Home"style ={{fontWeight: "bold,",fontFamily:"Comic Sans MS", color: "white"}}><Button className="btn btn-primary">Dashboard <span className="sr-only">(current)</span></Button></NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/profile"style ={{fontWeight: "bold,",fontFamily:"Comic Sans MS", color: "white"}}><Button className="btn btn-primary">Profile <span className="sr-only">(current)</span></Button></NavLink>
      </li>
      
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
    );
    };
    export default Navbar;
    /*
    <li className="nav-item">
        <NavLink className="nav-link" to="/Blogs"style ={{fontWeight: "bold,",fontFamily:"Comic Sans MS", color: "white"}}>Blogs</NavLink>
      </li>

           <li className="nav-item">
        <NavLink className="nav-link" to="/Contact"style ={{fontWeight: "bold,",fontFamily:"Comic Sans MS", color: "white"}}>Contact</NavLink>
      </li>
      <li className="nav-item dropdown">
      
        <NavLink className="nav-link dropdown-toggle" to="MyCourses" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"style ={{fontWeight: "bold,",fontFamily:"Comic Sans MS", color: "white"}}>
         CourseSpecification
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="CourseSpecification">All courses</NavLink>
          <NavLink className="dropdown-item" to="CourseSpecification">My Courses</NavLink>
          <div className="dropdown-divider"></div>
        </div>
      </li>
    */