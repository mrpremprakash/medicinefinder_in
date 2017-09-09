import React from 'react';
class Footer extends React.Component {
    render() {
        return (
            <footer id="footer" className="section nopadding-bottom">
        		<div className="container">
        			<div className="row">
        				<div className="col-md-6 col-sm-6">
        					<div className="contact-info">
        						<h4>Where to find us</h4>
        						<p>If you want to reach us then our address is written below</p>
        						<ul className="contact-list">
        							<li><i className="fa fa-map-marker"></i>C-265, Pandav Nagar. New Delhi</li>
        							<li><i className="fa fa-phone"></i>011 22482574</li>
        							<li><i className="fa fa-envelope-o"></i><a href="mailto:support@medicinefinder.in">support@medicinefinder.in</a></li>
        						</ul>
        					</div>
        					<hr/>
        					<div className="social">
        						<h4>Follow us</h4>
        						<ul className="social">
        							<li className="facebook"> <a href="#"> <i className="fa fa-facebook"></i> </a> </li>
        							<li className="twitter"> <a href="#"> <i className="fa fa-twitter"></i> </a> </li>
        							<li className="google-plus"> <a href="#"> <i className="fa fa-google-plus"></i> </a> </li>
        							<li className="linkedin"> <a href="#"> <i className="fa fa-linkedin"></i> </a> </li>
        							<li className="youtube"> <a href="#"> <i className="fa fa-youtube-play"></i> </a> </li>
        						</ul>
        					</div>
        				</div>
        				<div className="col-md-6 bottom-contact">
        					<h4>Get in Touch</h4>
        					<p>Nam leo lorem, tincidunt id risus ut, ornare tincidunt naqunc.</p>
        					<form id="contact-form" className="contact-form" method="post" action="contact-form.php">
        						<div className="form-group">
        							<input name="contact-name" id="contact-name" type="text" className="form-control" placeholder="Name"/>
        						</div>
        						<div className="form-group">
        							<input name="contact-email" id="contact-email" type="text" className="form-control" placeholder="Your e-mail"/>
        						</div>
        						<div className="form-group">
        							<input name="contact-phone" id="contact-phone" type="text" className="form-control" placeholder="Phone"/>
        						</div>
        						<div className="form-group">
        							<textarea name="contact-message" id="contact-message" className="form-control" placeholder="Message"></textarea>
        						</div>
        						<div className="form-group">
        							<button type="submit" className="btn btn-default btn-submit">Submit</button>
        						</div>
        						<div className="row">
        							<div className="col-md-12">
        								<div className="form-process-contact"></div>
        							</div>
        						</div>
        					</form>
        				</div>
        			</div>
        		</div>
        		<div className="container">
        			<div className="row footer-bottom">
        				<div className="col-lg-6 col-sm-6">
        					<p>© MedicineFinder. All Right Reserved</p>
        				</div>
        			</div>
        		</div>
        		<div style={{display:'none'}} className="visit">5849</div>
        	</footer>
        )
    }
}

export default Footer;
