import React, { Component } from 'react';
class Carousel extends Component {
    
    render() { 
        return (
            
            <div class="container ">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://lh3.googleusercontent.com/proxy/MA-2dvXaY96SJt-xJmy6tYEOswhj-c7nwezkREd5AwX4QHEnmKwFZC2mCqz11ILKmr2xvuCD9EAAxkHpnbI6x7qkiNYuIll1KzAjc8BEaNUmwgisE78MC8H-dX4giCneRhr-BRoGq2Casw" className="d-block w-100" alt="abc"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>WHAT OUR CUSTOMERS HAS TO SAY</h5>
        <p>They provide with the best possible courses.</p>
      </div>
        
    </div>
    <div className="carousel-item ">
      <img src="https://cdn.idntimes.com/content-images/post/20181217/c6-c331f530b4475c96b1bcea5e644c85d1_600x400.jpg" className="d-block w-100" alt="..."/>
       <div className="carousel-caption d-none d-md-block">
      <h5>I have joined the course and i can see the best results</h5>
        <p>They provide with the best possible courses-albert hue.</p>
    </div>
    </div>
    <div className="carousel-item">
      
      <img src="https://live.staticflickr.com/1972/31481319188_ba242c2b0e_b.jpg" className="d-block w-100" alt="abc"/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Whether its photography or others</h5>
        <p>They provide with the best possible instructors-john.</p>
    </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>



 </div>
 </div>
 
         );
    }
}
 
export default Carousel;