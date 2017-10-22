import React from 'react';
import Footer from './footer';
class FAQ extends React.Component {
    render() {
        return (
            <span>
                <section id="faq" className="section">
            		<div className="container">
            			<div className="row">
            				<div className="col-lg-12">
            					<div className="headline">
            						<h1>Frequently Asked Questions</h1>
            						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquando posse.</p>
            					</div>
            				</div>
            			</div>
            			<div className="row">
            				<div className="col-lg-7 col-md-7">
            					<div className="panel ">
            						<div className="panel-heading">
            							<h4 className="panel-title"><a data-parent="#accordion" data-toggle="collapse" className="panel-toggle" href="#faq1"><i className="fa fa-plus-square"></i>Why should I use MedicineFinder.in ?</a></h4>
            						</div>
            						<div className="panel-collapse collapse in" id="faq1">
            							<div className="panel-body">
            								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            							</div>
            						</div>
            					</div>
            					<div className="panel ">
            						<div className="panel-heading">
            							<h4 className="panel-title"><a data-parent="#accordion" data-toggle="collapse" className="panel-toggle" href="#faq2"><i className="fa fa-plus-square"></i>Can I get my medicines deliverd at my location ?</a></h4>
            						</div>
            						<div className="panel-collapse collapse" id="faq2">
            							<div className="panel-body">
            								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            							</div>
            						</div>
            					</div>
            					<div className="panel ">
            						<div className="panel-heading">
            							<h4 className="panel-title"><a data-parent="#accordion" data-toggle="collapse" className="panel-toggle" href="#faq3"><i className="fa fa-plus-square"></i>24/7 support system available ?</a></h4>
            						</div>
            						<div className="panel-collapse collapse" id="faq3">
            							<div className="panel-body">
            								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            							</div>
            						</div>
            					</div>
            					<div className="panel ">
            						<div className="panel-heading">
            							<h4 className="panel-title"><a data-parent="#accordion" data-toggle="collapse" className="panel-toggle" href="#faq4"><i className="fa fa-plus-square"></i>Why am I asking so many questions ?</a></h4>
            						</div>
            						<div className="panel-collapse collapse" id="faq4">
            							<div className="panel-body">
            								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            							</div>
            						</div>
            					</div>
            					<div className="panel ">
            						<div className="panel-heading">
            							<h4 className="panel-title"><a data-parent="#accordion" data-toggle="collapse" className="panel-toggle" href="#faq5"><i className="fa fa-plus-square"></i>Is it mobile-friendly ?</a></h4>
            						</div>
            						<div className="panel-collapse collapse" id="faq5">
            							<div className="panel-body">
            								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            							</div>
            						</div>
            					</div>
            				</div>
            				<div className="col-lg-5 col-md-5">
            					<img src={window.imagePath+"public/img/mobile2.png"} className="img-responsive" alt="" title=""/>
            				</div>
            			</div>
            		</div>
            	</section>
                <Footer />
            </span>

        )
    }
    componentDidMount() {
        heightlightMainMenu('faq');
    }
}

export default FAQ;
