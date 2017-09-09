import React from 'react';
import Footer from './footer';
export default class AddNew extends React.Component {
    render() {
        return (
            <span>
                <section id="features" className="section">
            		<div className="container">
            			<div className="row">
            				<div className="col-lg-12">
            					<div className="headline">
            						<h1>Add New Store</h1>
            					</div>
            				</div>
            			</div>
            			<div className="divider35"></div>
            			<div className="row">
            				<div className="col-lg-12 col-md-12">
            					<div className="row">

            						<div className="form-group col-lg-6 col-md-6">
        								<label>Store Name</label>
        								<input className="form-control"/>
            						</div>
            						<div className="form-group col-lg-6 col-md-6">
        								<label>Address 1</label>
        								<input className="form-control"/>
            						</div>
            					</div>
            					<div className="row">
                                    <div className="form-group col-lg-6 col-md-6">
        								<label>Address 2</label>
        								<input className="form-control"/>
            						</div>
            						<div className="form-group col-lg-6 col-md-6">
        								<label>Select City</label>
                                        <select className="form-control">
                                            <option>New Delhi</option>
                                        </select>
            						</div>
            					</div>
            					<div className="row last-row">
                                    <div className="form-group col-lg-6 col-md-6">
        								<label>Zip Code</label>
        								<input className="form-control"/>
            						</div>
            						<div className="form-group col-lg-6 col-md-6">
        								<label>Latitude</label>
                                        <input className="form-control"/>
            						</div>
            					</div>
                                <div className="row last-row">
                                    <div className="form-group col-lg-6 col-md-6">
        								<label>Longitude</label>
        								<input className="form-control"/>
            						</div>
            						<div className="form-group col-lg-6 col-md-6">
        								<label>Contact No</label>
                                        <input className="form-control"/>
            						</div>
            					</div>
                                <div className="row last-row">
                                    <div className="form-group col-lg-6 col-md-6">
        								<label>Mode Of Payment</label>
        								<input className="form-control"/>
            						</div>
            						<div className="form-group col-lg-6 col-md-6">
        								<label>Open Hours</label>
                                        <input className="form-control"/>
            						</div>
            					</div>
            				</div>

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
