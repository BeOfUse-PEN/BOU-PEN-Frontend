import React, { Component } from 'react';
import './Courses.css';
class Courses extends Component {
   
    render() { 
        return ( 
            <div className="container text-center">
            <h3>THE Courses</h3>
            <p><em>We love to teach you!</em></p>
            <p>Just choose the best course according to your interest</p>
            <br/>
            <div className="row">
              <div className="col-sm-4">
                <p><strong>Photography</strong></p><br/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwSnHhOal6-OWhlDTkliYEtygwLWY94z_aieY7JQSUDCsdwcTY" className="img-circle person round" alt="Random Name"/>
              </div>
              <div className="col-sm-4">
                <p><strong>Music</strong></p><br/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSPgzgw0G9iKaK5B0WtZs052pxdFpnnYNi6Ew6S0yVJotA-F29" className="img-circle person round" alt="Random Name"/>
              </div>
              <div className="col-sm-4">
                <p><strong>Technology</strong></p><br/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKmT8FnoIwkAPrFUgjGfSzuM0brpZIosjmgYybHn_wqIJB94Ie" className="img-circle person round" alt="Random Name"/>
              </div>
               <div className="container">
               <p><em>We love to teach you!</em></p>
              <p>Just choose the best course according to your interest</p>
            <br/>
               </div>
               


             
              
               </div>
               <div class="text-center pt-5">
                    <a href="#link" class="btn btn-info bg-dark" role="button">Register for your favourite course</a>
                    </div>
          </div>
  


         );
    }
}
 
export default Courses;