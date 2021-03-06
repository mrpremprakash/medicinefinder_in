import React from 'react';
import Footer from './footer';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BusinessList from '../components/business_list';
import {searchBusiness, searchBusinessById} from '../actions/actions';

class Home extends React.Component {
    render() {
        return (
            <span>
                <section id="home" className="section">
            		<div className="container-fluid">
            			<div className="row" style={{backgroundColor: '#f4f4f2'}}>

            				<div className="col-lg-4 col-md-4 map-canvas">
                                <div className="mCustomScrollbar items-list " style={{height: '503px'}}>
                                    <div className="inner">
                                        <header>
                                            <h3>Results</h3>
                                        </header>
                                        <BusinessList />
                                    </div>
                                </div>
            				</div>
            				<div className="col-lg-8 col-md-8 map">
                                <div className="search-bar">
                                    <div className="">
                                        <div className="">
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
            		</div>
                    {/* <div className="container">
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
                    </div> */}
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
        heightlightMainMenu('home');
        $(".mCustomScrollbar").mCustomScrollbar({
            theme:"dark"
        });
        var items = this.props.business_list;
        this.initializeMap(items);
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
        setHeight();
    }
    initializeMap(items) {
        var centralPoint = {lat: 28.619338, lng: 77.285691}, self = this;
        var bounds = new google.maps.LatLngBounds(), markers = [];
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: centralPoint
        });
        map.addListener('dragend', function() {
            self.getsVisibleMarkers(map, markers);
        });
        map.addListener('zoom_changed', function() {
            self.getsVisibleMarkers(map, markers);
        });

        var marker = new google.maps.Marker({
            position: centralPoint,
            map: map
        });
        var infoWindow = new google.maps.InfoWindow(), marker, i;
        for( i = 0; i < items.length; i++ ) {
            var position = new google.maps.LatLng(items[i].latitude, items[i].longitude);
            bounds.extend(position);
            marker = new google.maps.Marker({
                position: position,
                map: map,
                title: items[i].name,
                id: i
            });
            markers.push(marker);
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    // infoWindow.setContent(items[i].address);
                    infoWindow.setContent(self.getMarkerBusinessTemplate(items[i]));
                    infoWindow.open(map, marker);
                }
            })(marker, i));
        }
    }
    getMarkerBusinessTemplate(item) {
        return (<div className="fade-in-marker">
            <div>
                <div className="infobox ">
                    <div className="inner">
                        <div className="image">
                            <a href="javascript:void(0)" className="description">
                                <div className="meta">
                                    <h2>{item.name}</h2>
                                    <figure>{item.address1}</figure>
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </a>
                            <img src="public/images/card-image1.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
    getsVisibleMarkers(map, markers) {
        var bounds = map.getBounds(), visiblePoints = [];
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i];
            if(bounds.contains(marker.getPosition()) === true) {
                visiblePoints.push(marker.id);
            }
        }
        this.props.dispatch(searchBusinessById(visiblePoints));
        console.log(visiblePoints);
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
