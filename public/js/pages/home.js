import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Footer from './footer';
import BusinessList from '../components/business_list';
import {searchBusiness} from '../actions/actions';

class Home extends React.Component {
    render() {
        return (
            <span>
                <div id="banner">
            		<div className="banner-inner">
            			<div className="container">
            				<div className="row">
            					<div className="col-md-8 header-text">
            						<h1>Save your <strong>Time</strong>, search <strong>Online</strong> </h1>
            						<p>No more running from one chemist store to another when in need of medicines! MedicineFinder.in helps you find your medicine and the medical store on the spot. Some of the features are listed below.
            						</p>
            						<div className="row">
            							<div className="col-lg-6 col-md-6 col-sm-6">
            								<ul className="green-arrow">
            									<li>Find drug stores near by you by searching medicine name</li>
            									<li>Compare drug prices with different stores</li>
            									<li>Get route map to reach nearest store</li>
            									<li>Prescription Management*</li>

            								</ul>
            							</div>
            							<div className="col-lg-6 col-md-6 col-sm-6">
            								<ul className="green-arrow">
            									<li>Get notification when your medicines are in stock again</li>
            									<li>Real time price &amp; stock information</li>
            									<li>Get store contact information if you need</li>
            									<li>Manage your historical medical records*</li>

            								</ul>
            							</div>
            							<div className="clearfix"></div>
            						</div>
            					</div>

            					<div className="col-lg-4 col-md-4">
            						<img src="img/inclined.png" className="img-responsive" alt="" title="MedicineFinder.in app screen" />
            					</div>

            				</div>
            				{/* <div className="divider50"></div>
        					<div className="banner-optin">
        						<div className="row">
        							<div className="form-group col-md-9">
        								<input name="medicine_name" type="text"
                                            ref="medicine_name" className="form-control medicine_name auto-complete ui-autocomplete-input"
                                            required="" placeholder="Enter location..." autoComplete="off"
                                            onKeyPress={(e) => {this.searchOnKeypress.call(this, e)}}/>
        							</div>

        							<div className="form-group col-md-3">
        								<button type="button" className="btn btn-primary show-map" data-toggle="modal" onClick={this.findStore.bind(this)}>
        								   Find Store
        								</button>
        							</div>
        						</div>
        					</div>
        					<div className="row">
        						<div className="col-md-12">
        							<div className="form-process"></div>
        						</div>
        					</div> */}
            			</div>
            		</div>
                </div>

                <section className="bg-grey home-section section">
            		<div className="container">
                        <div className="row">
            				<div className="col-lg-12">
            					{/* <div className="headline">
            						<h1>Business List</h1>
            					</div> */}
                                <div className="input-group">
                                    <div className="input-group-btn search-panel">
                                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                            <span id="search_concept">Search by address</span> <span className="caret"></span>
                                        </button>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><a href="#its_equal">Search by address</a></li>
                                            <li><a href="#contains">Search by name</a></li>
                                            <li><a href="#greather_than">Search by medicine</a></li>
                                            <li><a href="#less_than">Less than &lt; </a></li>
                                            {/* <li className="divider"></li>
                                            <li><a href="#all">Anything</a></li> */}
                                        </ul>
                                    </div>
                                    <input type="hidden" name="search_param" value="all" id="search_param"/>
                                    <input type="text" className="form-control" name="medicine_name" ref="medicine_name" placeholder="New Delhi..."
                                        onKeyPress={(e) => {this.searchOnKeypress.call(this, e)}}/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button" onClick={this.findStore.bind(this)}>
                                            <span className="glyphicon glyphicon-search"></span>
                                        </button>
                                    </span>
                                </div>

            				</div>
            			</div>
            			<div className="divider35"></div>
                        <BusinessList/>
                    </div>
                </section>
                <Footer />
            </span>
        )
    }
    searchOnKeypress(event) {
        if(event.which == 13) {
            this.findStore();
            $(".ui-menu-item").hide();
        }
    }
    findStore() {
        $('html, body').animate({
            scrollTop: ($( 'input[name="medicine_name"]').offset().top) - 100
        }, 1000);
        let searchTerm = this.refs.medicine_name.value;
        this.props.dispatch(searchBusiness(searchTerm));
    }
    componentDidMount() {
        var items = this.props.business_list;
        $("#header").find('.navbar').removeClass('scroll-fixed-navbar');

        var data = items.map(function(item) {
            return {
                value: item.address,
                id: item.id
            }
        });

        $( 'input[name="medicine_name"]').autocomplete({
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
