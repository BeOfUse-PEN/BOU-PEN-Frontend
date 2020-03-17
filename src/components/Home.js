import React, { Component } from 'react';
import {Jumbotron} from './Jumbotron';
// import { Link } from 'react-router-dom';
import Carousel from "./Carousel";
import Courses from "./Courses";
import Blogs from "./Blogs";
import Contact  from "./Contact";
import './Home.css';
  
   class Home extends Component {
       
       render() { 
            
            return (
              <React.Fragment>
              <Jumbotron></Jumbotron>
             

              
              <div className="container">
              <div className= "container-fluid text-center bg-grey">
              <h5>LEARN YOUR FAVOURITE COURSE FROM ONLINE</h5>
              <blockquote cite="http://www.worldwildlife.org/who/index.html">
              <p><em>We love to teach you!
              PEN is an e-learning app targeted for customers of all age groups.
              Over 7000 tutorials from more than 20 courses
              Age is often associated with a decline in cognitive abilities that are important for maintaining functional independence, such as learning new skills. Many forms of motor learning appear to be relatively well preserved with age, while learning tasks that involve associative binding tend to be negatively affected</em></p>
            <p>Just choose the best course according to your interest</p>
              
</blockquote>
</div>
</div>

  
  

             
  
  
            
        
              
              

              <Courses></Courses>
              <Carousel></Carousel>
              
              <Blogs></Blogs>
              <Contact></Contact>
              
              </React.Fragment>
                
               
              
            );
       }
   }
    
   export default Home;