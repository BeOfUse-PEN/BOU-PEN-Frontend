import React, { Component } from 'react';
class Contact extends Component {
   
    render() { 
        return ( 
            
            
            <div className="container">
            <h3 class="text-center">Contact</h3>
  <p class="text-center"><em>We love our fans!</em></p>
  <div class="row test">
    <div class="col-md-4">
      <p>Fan? Drop a note.</p>
      <p><span class="glyphicon glyphicon-map-marker"></span>Chicago, US</p>
      <p><span class="glyphicon glyphicon-phone"></span>Phone: +00 1515151515</p>
      <p><span class="glyphicon glyphicon-envelope"></span>Email: mail@mail.com</p>
    </div>
    
    <div class="col-md-8">
      <div class="row">
        <div class="col-sm-6 form-group">
          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required/>
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required/>
        </div>
      </div>
      <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
      <div class="row">
      <div class="col-md-12 form-group">
        <button class="btn pull-right btn-info bg-danger" type="submit">Send</button>
      </div>
    </div>
    </div>

            <section className="banner-section spad">
                <div className="container">
                    <div class="section-title mb-0 pb-2">
                        <h2>Join Our Community Now!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.</p>
                    </div>
                    <div class="text-center pt-5">
                    <a href="#link" class="btn btn-info bg-danger" role="button">REGISTER NOW</a>
                    </div>
                </div>
          </section>
          </div>
          </div>
         );
    }
}
 
export default Contact;