import React from 'react';
import Footer from './footer';
class Features extends React.Component {
    render() {
        return (
            <span>
                <section id="features" className="section">
            		<div className="container">
            			<div className="row">
            				<div className="col-lg-12">
            					<div className="headline">
            						<h1><strong>Best Top</strong> Features</h1>
            						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquando posse.</p>
            					</div>
            				</div>
            			</div>
            			<div className="divider35"></div>
            			<div className="row">
            				<div className="col-lg-8 col-md-8">
            					<div className="row">
            						<div className="col-lg-6 col-md-6">
            							<div className="features-list">
            								<i className="fa fa-paw fa-5x"></i>
            								<h4>It Is Free</h4>
            								<p>Lorem Ipsum has been the industry's standard dummy text since the 1500s.</p>
            							</div>
            						</div>
            						<div className="col-lg-6 col-md-6">
            							<div className="features-list">
            								<i className="fa fa-slack fa-5x"></i>
            								<h4>User Friendly</h4>
            								<p>Lorem Ipsum has been the industry's standard dummy text since the 1500s.</p>
            							</div>
            						</div>
            					</div>
            					<div className="row">
            						<div className="col-lg-6 col-md-6">
            							<div className="features-list">
            								<i className="fa fa-sliders fa-5x"></i>
            								<h4>HTML5 / CSS3</h4>
            								<p>Lorem Ipsum has been the industry's standard dummy text since the 1500s.</p>
            							</div>
            						</div>
            						<div className="col-lg-6 col-md-6">
            							<div className="features-list">
            								<i className="fa fa-file fa-5x"></i>
            								<h4>Bootstrap 3.0</h4>
            								<p>Lorem Ipsum has been the industry's standard dummy text since the 1500s.</p>
            							</div>
            						</div>
            					</div>
            					<div className="row last-row">
            						<div className="col-lg-6 col-md-6">
            							<div className="features-list">
            								<i className="fa fa-database fa-5x"></i>
            								<h4>w3c Compliant</h4>
            								<p>Lorem Ipsum has been the industry's standard dummy text since the 1500s.</p>
            							</div>
            						</div>
            						<div className="col-lg-6 col-md-6">
            							<div className="features-list">
            								<i className="fa fa-cog fa-5x"></i>
            								<h4>Clean / Minimal</h4>
            								<p>Lorem Ipsum has been the industry's standard dummy text since the 1500s.</p>
            							</div>
            						</div>
            					</div>
            				</div>
            				<div className="col-lg-4 col-md-4">
            					<img src="img/mobile.png" className="img-responsive" alt="" title="" />
            				</div>
            			</div>

            		</div>
            	</section>

                <section className="section bg-blue">
            		<div className="container">
            			<div className="row">
            				<div className="col-lg-12">
            					<div className="headline">
            						<h1><strong>Subscribe</strong> Freely</h1>
            						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            					</div>
            				</div>
            			</div>
            			<div className="row">
            				<div className="col-lg-12">
            					<form id="middle-form" method="post" action="middle-form.php">
            						<div className="middle-optin">
            							<div className="row">
            								<div className="form-group col-lg-3">
            									<input name="middle-optin-name" id="middle-optin-name" type="text" className="form-control" required="" placeholder="Your Name"/>
            								</div>
            								<div className="form-group col-lg-3">
            									<input name="middle-optin-email" id="middle-optin-email" type="text" className="form-control" required="" placeholder="Your E-mail"/>
            								</div>
            								<div className="form-group col-lg-3">
            									<input name="middle-optin-phone" id="middle-optin-phone" type="text" className="form-control" placeholder="Your Phone Phone"/>
            								</div>
            								<div className="form-group col-lg-3">
            									<button type="submit" className="btn btn-default black-btn">Subscribe Now</button>
            								</div>
            							</div>
            						</div>
            						<div className="row">
            							<div className="col-md-12">
            								<div className="form-process-middle"></div>
            							</div>
            						</div>
            					</form>
            				</div>
            			</div>
            		</div>
            	</section>

                <section id="testimonials" className="section testimonial-bg cover">
            		<div className="container">
            			<div className="row">
            				<div className="col-lg-12">
            					<div className="headline">
            						<h1>Awesome <strong>Testimonials</strong></h1>
            						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquando posse.</p>
            					</div>
            				</div>
            			</div>
            			<div className="row">
            				<div className="col-md-12">
            					<div className="carousel slide carousel-mod" data-ride="carousel" id="testimonial">
            						<div className="carousel-inner">
            							<div className="item active">
            								<div className="row">
            									<div className="col-lg-12">
            										<div className="testimonial-inner">
            											<img src="img/testi1.png" alt="" title=""/>
            											<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit!</p>
            											<small>Someone famous</small>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="item">
            								<div className="row">
            									<div className="col-lg-12">
            										<div className="testimonial-inner">
            											<img src="img/testi2.png" alt="" title=""/>
            											<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit!</p>
            											<small>Someone famous</small>
            										</div>
            									</div>
            								</div>
            							</div>
            							<div className="item">
            								<div className="row">
            									<div className="col-lg-12">
            										<div className="testimonial-inner">
            											<img src="img/testi3.png" alt="" title=""/>
            											<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit!</p>
            											<small>Someone famous</small>
            										</div>
            									</div>
            								</div>
            							</div>
            						</div>
            						<ol className="carousel-indicators">
            							<li data-target="#testimonial" data-slide-to="0" className="active"></li>
            							<li data-target="#testimonial" data-slide-to="1"></li>
            							<li data-target="#testimonial" data-slide-to="2"></li>
            						</ol>
            					</div>
            				</div>
            			</div>
            		</div>
            	</section>

                <section id="partners" className="section20 bg-dark hidden-xs">
            		<div className="container">
            			<div className="row">
        					<ul className="partners-logo">
        						<li className="col-md-2 col-sm-2"><a href="#"><img src="img/logo1.png" alt="" title=""/></a></li>
        						<li className="col-md-2 col-sm-2"><a href="#"><img src="img/logo2.png" alt="" title=""/></a></li>
        						<li className="col-md-2 col-sm-2"><a href="#"><img src="img/logo3.png" alt="" title=""/></a></li>
        						<li className="col-md-2 col-sm-2"><a href="#"><img src="img/logo4.png" alt="" title=""/></a></li>
        						<li className="col-md-2 col-sm-2"><a href="#"><img src="img/logo1.png" alt="" title=""/></a></li>
        						<li className="col-md-2 col-sm-2"><a href="#"><img src="img/logo2.png" alt="" title=""/></a></li>
        					</ul>
            			</div>
            		</div>
            	</section>
                <Footer />
            </span>
        )
    }
    componentDidMount() {
        $("#header").find('.navbar').addClass('scroll-fixed-navbar scrolled');
    }
}

export default Features;
