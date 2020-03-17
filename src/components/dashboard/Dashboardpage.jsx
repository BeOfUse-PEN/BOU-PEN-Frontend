import React from 'react';
import './dashboard.css';

function Dashboardpage() {
	return (
				<div className="row profile">
					<div className="col-md-3">
						<div className="profile-sidebar">
							
							<div className="profile-userpic text-center">
								<img src="https://via.placeholder.com/150/000000/FFFFFF/?text=IPaddress.net" className="img-responsive" alt=""/>
							</div>
							
							<div className="profile-usertitle">
								<div className="profile-usertitle-name">
									Marcus Doe
								</div>
								<div className="profile-usertitle-job">
									Developer
								</div>
							</div>

							<div className="profile-userbuttons">
								<button type="button" className="btn btn-success btn-sm">Profile</button>
								<button type="button" className="btn btn-danger btn-sm">Progress</button>
							</div>
							
							<div className="profile-usermenu">
								<div className="row p-3">
									<div className="col-12">
									<ul className="col-12 nost">
									<li className="my-3">
										<a href="#">
										<button className="btn btn-info w-100 m-auto"><i className="glyphicon glyphicon-home"></i>
										Courses </button>
										</a>
									</li>
									<li className="my-3">
										<a href="#">
										<button className="btn btn-info w-100 m-auto">
										<i className="glyphicon glyphicon-user"></i>
										Progress </button></a>
									</li>
									<li className="my-3">
										<a href="#" target="_blank">
										<button className="btn btn-info w-100 m-auto">
										<i className="glyphicon glyphicon-ok"></i>
										Profile 
										</button></a>
									</li>
								</ul>
									</div>
								</div>
								
							</div>
						</div>
					</div>
					<div className="col-md-9">
						<div className="profile-content">
							<div className="row ">
								<h3>My Courses</h3>
							</div>
							<hr/>
							{/* Courses Cards ...*/}
							<div class="card w-75 mx-auto my-2">
								<div className="row">
									<div className="col-3">
										<img src="https://via.placeholder.com/150/000000/FFFFFF/?text=BeOfUse_Courses" className="w-100"/>
									</div>
									<div className="col-9">
										<div className="card-block p-2">
										<h4 className="card-title">Lorem ipsum dolor sit amet</h4>
										<p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
										<a href="#" className="btn btn-primary">View Progress</a>
										</div>
									</div>
									</div>
								</div>

								<div class="card w-75 mx-auto my-2">
								<div className="row">
									<div className="col-3">
										<img src="https://via.placeholder.com/150/000000/FFFFFF/?text=BeOfUse_Courses" className="w-100"/>
									</div>
									<div className="col-9">
										<div className="card-block p-2">
										<h4 className="card-title">Lorem ipsum dolor sit amet</h4>
										<p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
										<a href="#" className="btn btn-primary">View Progress</a>
										</div>
									</div>
									</div>
								</div>

								<div class="card w-75 mx-auto my-2">
								<div className="row">
									<div className="col-3">
										<img src="https://via.placeholder.com/150/000000/FFFFFF/?text=BeOfUse_Courses" className="w-100"/>
									</div>
									<div className="col-9">
										<div className="card-block p-2">
										<h4 className="card-title">Lorem ipsum dolor sit amet</h4>
										<p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
										<a href="#" className="btn btn-primary">View Progress</a>
										</div>
									</div>
									</div>
								</div>

								<div class="card w-75 mx-auto my-2">
								<div className="row">
									<div className="col-3">
										<img src="https://via.placeholder.com/150/000000/FFFFFF/?text=BeOfUse_Courses" className="w-100"/>
									</div>
									<div className="col-9">
										<div className="card-block p-2">
										<h4 className="card-title">Lorem ipsum dolor sit amet</h4>
										<p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
										<a href="#" className="btn btn-primary">View Progress</a>
										</div>
									</div>
									</div>
								</div>
								<hr/>
							<div className="row">
								<h3>Courses you may like</h3>
							</div>
							<div className="row">
							<div className="card-group">
								<div className="card m-3">
									<img src="https://via.placeholder.com/150/000000/FFFFFF/?text=BeOfUse_Courses_BUY" className="card-img-top" alt="..."/>
									<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
									</div>
									<div className="card-footer">
										<button className="btn btn-info m-2">Add to wishlist</button>
										<button className="btn btn-success m-2">Buy Now</button>
									</div>
								</div>
								<div className="card m-3">
									<img src="https://via.placeholder.com/150/000000/FFFFFF/?text=BeOfUse_Courses_BUY" className="card-img-top" alt="..."/>
									<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
									</div>
									<div className="card-footer">
										<button className="btn btn-info m-2">Add to wishlist</button>
										<button className="btn btn-success m-2">Buy Now</button>
									</div>
								</div>
								<div className="card m-3">
									<img src="https://via.placeholder.com/150/000000/FFFFFF/?text=BeOfUse_Courses_BUY" className="card-img-top" alt="..."/>
									<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
									</div>
									<div className="card-footer">
										<button className="btn btn-info m-2">Add to wishlist</button>
										<button className="btn btn-success m-2">Buy Now</button>
									</div>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
	);
}

export default Dashboardpage;
