import React from 'react';
import Footer from './footer';
class Intro extends React.Component {
    render() {
        return (
            <span>
                <section id="intro" className="section">
            		<div className="container">
            			<div className="row">

            				<div className="col-lg-6 col-md-6">
            					<div className="main-point">
            						<i className="fa fa-map-marker"></i>
            						<h4>Easiest way to find nearest drug stores</h4>
            						<p>Simply search medicine name and we will go through thousands of medical store databases and find that medicine for you instantly.</p>
            					</div>
            					<div className="main-point">
            						<i className="fa">
            							<img src="public/img/icon_route.jpg" width="80px" />
            						</i>
            						<h4>Map Based</h4>
            						<p>See the exact path and distance of all the stores on the map from your location and route to reach there.</p>
            					</div>

            					<div className="main-point main-point-last">
            						<i className="fa fa-male"></i>
            						<h4>User Oriented</h4>
            						<p>Manage all your medical data and easily share it with doctors, friends and family, via email, Facebook, or Twitter. </p>
            					</div>
            				</div>


            				<div className="col-lg-6 col-md-6">
            					<img src="public/img/devices.jpg" className="img-responsive" alt="" title="" />
            				</div>

            			</div>

            			<hr />

            			<div className="row">
            				<div className="col-lg-6 col-md-6">
            					<img src="public/img/imac-mockup.png" className="img-responsive" alt="" title="" />
            				</div>
            				<div className="col-lg-6 col-md-6">
            					<h2>Do not waste time searching medicine or medical stores manually.</h2>
            					<p>All of us need to visit medicine stores in search of some medicine now and then. When we start looking for some medicine it is hard to find near by medicine stores and it is harder to know in which store that medicine is available. Somethimes we keep moving from one drug store to another in search of the medicine and we waste lots of our time. </p>
            					<ul className="normal-list">
            						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            						<li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            						<li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut,</li>
            					</ul>
            					<p></p>
            				</div>
            			</div>


            			<div className="divider50"></div>

            			<div className="row">
            				<div className="col-lg-4 col-md-4 hidden-xs">

            					<div className="side-text text-center">
            						<i className="fa fa-phone fa-4x"></i>
            						<h4>Need More Assistance</h4>
            						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            					</div>

            				</div>
            				<div className="col-lg-8 col-md-8">
            					<div className="row">
            						<div className="highlight">

            							<div className="col-lg-6 col-md-6 col-sm-6">
            								<ul className="green-arrow">
            									<li>Many addon features</li>
            									<li>Fully responsive &amp; adaptive</li>
            									<li>SEO optimized</li>
            									<li>Attractive with a modern touch</li>
            									<li>Full Support</li>
            								</ul>
            							</div>

            							<div className="col-lg-6 col-md-6 col-sm-6">
            								<ul className="green-arrow">
            									<li>Many addon features</li>
            									<li>Fully responsive &amp; adaptive</li>
            									<li>SEO optimized</li>
            									<li>Attractive with a modern touch</li>
            									<li>Full Support</li>
            								</ul>
            							</div>

            							<div className="clearfix"></div>
            						</div>
            					</div>
            				</div>
            			</div>
            		</div>
            	</section>
                <Footer />
            </span>
        );
    }
    componentDidMount() {
        // $("#header").find('.navbar').addClass('scroll-fixed-navbar');
        heightlightMainMenu('intro');
    }
}

export default Intro;
