import React, { Component } from 'react';
import './Blogs.css';
class Blogs extends Component {
   
    render() { 
        return (
            
          <div className="container text-center">
          <h3>Blogs</h3>
          <p><em>Give your opinion!!</em></p>
          <p>Just choose the best course according to your interest</p>
          <br/>
          <div className="row">
            <div className="col-sm-4">
              <p><strong>People's blog</strong></p><br/>
              <img src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI" className="img-circle person round" alt="avatar"/>
            </div>
            <div className="col-sm-4">
              <p><strong>About photography</strong></p><br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0VTTxQPOgv3NKCnndsT2FJc6WWU7TUsPr1IacFOjmPmbAuqJu" className="img-circle person round" alt="avatar"/>
            </div>
            <div className="col-sm-4">
              <p><strong>About Nature</strong></p><br/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEAp1weGZPzvk-p96tvHz_d5BwnWNUbvsIpvUK2MmjzmEnP1F1" className="img-circle person round" alt="avatar"/>
            </div>
             <div className="container">
             <p><em>We love to teach you!</em></p>
            <p>Just choose the best course according to your interest</p>
          <br/>
             </div>
             </div>
          </div>



         );
    }
}
 
export default Blogs;
