import React from 'react';
import Footer from './footer';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BusinessList from '../components/business_list';
import {searchBusiness} from '../actions/actions';

class Home extends React.Component {
    render() {
        return (
            <span>
                <section id="home" className="section">
            		<div className="container">
            			<div className="row" style={{backgroundColor: '#f4f4f2'}}>

            				<div className="col-lg-4 col-md-4 map-canvas">
                                <div className="mCustomScrollbar items-list " style={{height: '500px'}}>
                                    <div className="inner">
                                        <header>
                                            <h3>Results</h3>
                                        </header>
                                        <ul className="results list">
                                            <li>
                                                <div className="item">
                                                    <a href="#" className="image loaded">
                                                        <div className="inner">
                                                            <div className="item-specific"></div>
                                                            <img src="images/card-image1.jpg" alt="" />
                                                        </div>
                                                    </a>
                                                    <div className="wrapper">
                                                        <a href="#" id="12">
                                                            <h3>Jetstream</h3>
                                                        </a>
                                                        <figure>1882 Trainer Avenue</figure>
                                                        <div className="info">
                                                            <div className="type">
                                                                <i><img src="img/store.png" alt="" className="mCS_img_loaded" /></i>
                                                                <span>Medical Store</span>
                                                            </div>
                                                            <div className="rating" data-rating="4">
                                                                <span className="stars">
                                                                    <i className="fa fa-star s1 active" data-score="1"></i>
                                                                    <i className="fa fa-star s2 active" data-score="2"></i>
                                                                    <i className="fa fa-star s3 active" data-score="3"></i>
                                                                    <i className="fa fa-star s4 active" data-score="4"></i>
                                                                    <i className="fa fa-star s5" data-score="5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <a href="#" className="image loaded">
                                                        <div className="inner">
                                                            <div className="item-specific"></div>
                                                            <img src="images/card-image1.jpg" alt="" />
                                                        </div>
                                                    </a>
                                                    <div className="wrapper">
                                                        <a href="#" id="12">
                                                            <h3>Jetstream</h3>
                                                        </a>
                                                        <figure>1882 Trainer Avenue</figure>
                                                        <div className="info">
                                                            <div className="type">
                                                                <i><img src="img/store.png" alt="" className="mCS_img_loaded" /></i>
                                                                <span>Medical Store</span>
                                                            </div>
                                                            <div className="rating" data-rating="4">
                                                                <span className="stars">
                                                                    <i className="fa fa-star s1 active" data-score="1"></i>
                                                                    <i className="fa fa-star s2 active" data-score="2"></i>
                                                                    <i className="fa fa-star s3 active" data-score="3"></i>
                                                                    <i className="fa fa-star s4 active" data-score="4"></i>
                                                                    <i className="fa fa-star s5" data-score="5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="item">
                                                    <a href="#" className="image loaded">
                                                        <div className="inner">
                                                            <div className="item-specific"></div>
                                                            <img src="images/card-image1.jpg" alt="" />
                                                        </div>
                                                    </a>
                                                    <div className="wrapper">
                                                        <a href="#" id="12">
                                                            <h3>Jetstream</h3>
                                                        </a>
                                                        <figure>1882 Trainer Avenue</figure>
                                                        <div className="info">
                                                            <div className="type">
                                                                <i><img src="img/store.png" alt="" className="mCS_img_loaded" /></i>
                                                                <span>Medical Store</span>
                                                            </div>
                                                            <div className="rating" data-rating="4">
                                                                <span className="stars">
                                                                    <i className="fa fa-star s1 active" data-score="1"></i>
                                                                    <i className="fa fa-star s2 active" data-score="2"></i>
                                                                    <i className="fa fa-star s3 active" data-score="3"></i>
                                                                    <i className="fa fa-star s4 active" data-score="4"></i>
                                                                    <i className="fa fa-star s5" data-score="5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
            				</div>


            				<div className="col-lg-8 col-md-8 map">

                                <div className="search-bar">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="keyword" ref="keyword" placeholder="Enter Keyword"
                                                    onKeyPress={(e) => {this.searchOnKeypress.call(this, e)}}/>
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-group location">
                                                    <input type="text" className="form-control" id="location" placeholder="Enter Location" autoComplete="off"/>
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-map-marker geolocation" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Find my position"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

            					<div id="map" style={{height: '500px', width: '100%'}}></div>
            				</div>

            			</div>

            			<hr />

            			<div className="row">
            				<div className="col-lg-6 col-md-6">
            					<img src="img/imac-mockup.png" className="img-responsive" alt="" title="" />
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
    searchOnKeypress(event) {
        if(event.which == 13) {
            this.findStore();
            $(".ui-menu-item").hide();
        }
    }
    findStore() {
        let searchTerm = this.refs.keyword.value;
        this.props.dispatch(searchBusiness(searchTerm));
    }
    componentDidMount() {
        $("#header").find('.navbar').addClass('navbar navbar-inverse navbar-fixed-top scroll-fixed-navbar scrolled');
        $(".mCustomScrollbar").mCustomScrollbar({
            theme:"dark"
        });
        var items = this.props.business_list;
        initMap(items);
        var data = items.map(function(item) {
            return {
                value: item.address,
                id: item.id
            }
        });

        $( '#keyword').autocomplete({
            source: data,
            minLength: 0,
            select: function( event, ui ) {
                console.log( ui.item ?
                "Selected: " + ui.item.value + ", geonameId: " + ui.item.id :
                "Nothing selected, input was " + this.value );
            }
        });
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.get('items'),
        business_list: state.get('business_list')
    }
}
const ConnectedHome = withRouter(connect(mapStateToProps)(Home));
export default ConnectedHome;
