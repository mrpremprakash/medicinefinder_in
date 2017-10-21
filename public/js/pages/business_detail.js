import React from 'react';
import {Link} from 'react-router-dom';
export default class BusinessDetail extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        var imagePath = window.imagePath;
        if(!this.state.business_detail) {
            return <div>Loading...</div>;
        }
        let business = this.state.business_detail;
        return (
            <span className="page-item-detail">
                <div id="page-canvas">
                    <div id="page-content">
                        <div id="map-detail"></div>
                        <section className="container">
                            <div className="row">
                                <div className="col-md-9">
                                    <section className="block" id="main-content">
                                        <header className="page-title">
                                            <div className="title">
                                                <h1>{business.name}</h1>
                                                <figure>{business.address1}</figure>
                                            </div>
                                        </header>
                                        <div className="row">
                                            <aside className="col-md-4 col-sm-4" id="detail-sidebar">
                                                <section>
                                                    <header><h3>Contact</h3></header>
                                                    <address>
                                                        <div>{business.address1}</div>
                                                        <div>{business.address2}</div>
                                                        {/* <div>Granada Hills, CA 91344</div> */}
                                                        <figure>
                                                            <div className="info">
                                                                <i className="fa fa-mobile"></i>
                                                                <span>N/A</span>
                                                            </div>
                                                            <div className="info">
                                                                <i className="fa fa-phone"></i>
                                                                <span>{business.primary_phone_no ? business.primary_phone_no: 'N/A'}</span>
                                                            </div>
                                                            <div className="info">
                                                                <i className="fa fa-globe"></i>
                                                                <span>N/A</span>
                                                            </div>
                                                        </figure>
                                                    </address>
                                                </section>
                                                <section className="clearfix">
                                                    <header className="pull-left"><a href="#reviews" className="roll"><h3>Rating</h3></a></header>
                                                    <figure className="rating big pull-right" data-rating="4"><span className="stars"><i className="fa fa-star s1 active" data-score="1"></i><i className="fa fa-star s2 active" data-score="2"></i><i className="fa fa-star s3 active" data-score="3"></i><i className="fa fa-star s4 active" data-score="4"></i><i className="fa fa-star s5" data-score="5"></i></span></figure>
                                                </section>
                                                {/* <section>
                                                    <header><h3>Events</h3></header>
                                                    <figure>
                                                        <div className="expandable-content collapsed show-60" id="detail-sidebar-event">
                                                            <div className="content">
                                                                <p>Maecenas purus sapien, pellentesque non consectetur eu, rhoncus in mauris.
                                                                    Duis et nisl metus. Sed ut pulvinar mauris, bibendum ullamcorper ex.
                                                                    Aliquam vitae ante diam. Nam eu blandit odio. Cras erat lorem, iaculis eu nulla eu, sodales aliquam eros.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="show-more expand-content" data-expand="#detail-sidebar-event">Show More</a>
                                                    </figure>
                                                </section> */}
                                                <section>
                                                    <header><h3>Contact Form</h3></header>
                                                    <figure>
                                                        <form id="item-detail-form" role="form" method="post" action="?">
                                                            <div className="form-group">
                                                                <label htmlFor="item-detail-name">Name</label>
                                                                <input type="text" className="form-control framed" id="item-detail-name" name="item-detail-name" required=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="item-detail-email">Email</label>
                                                                <input type="email" className="form-control framed" id="item-detail-email" name="item-detail-email" required=""/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="item-detail-message">Message</label>
                                                                <textarea className="form-control framed" id="item-detail-message" name="item-detail-message" rows="3" required=""></textarea>
                                                            </div>
                                                            <div className="form-group">
                                                                <button type="submit" className="btn framed icon">Send<i className="fa fa-angle-right"></i></button>
                                                            </div>
                                                        </form>
                                                    </figure>
                                                </section>
                                            </aside>
                                            <div className="col-md-8 col-sm-8">
                                                <section>
                                                    <article className="item-gallery">
                                                        <div className="owl-carousel">
                                                            {
                                                                business.images.map((item, index) => {
                                                                    return <div key={index}> <img src={imagePath+'public/'+item} /></div>
                                                                })
                                                            }
                                                        </div>
                                                    </article>
                                                    <article className="block">
                                                        <header><h2>Description</h2></header>
                                                        <p>{business.description}</p>
                                                    </article>

                                                    <article className="block">
                                                        <header><h2>Opening Hours</h2></header>
                                                        <dl className="lines">
                                                            <dt>Monday</dt>
                                                            <dd>08:00 am - 11:00 pm</dd>
                                                            <dt>Tuesday</dt>
                                                            <dd>08:00 am - 11:00 pm</dd>
                                                            <dt>Wednesday</dt>
                                                            <dd>08:00 am - 11:00 pm</dd>
                                                            <dt>Thursday</dt>
                                                            <dd>08:00 am - 11:00 pm</dd>
                                                            <dt>Friday</dt>
                                                            <dd>08:00 am - 11:00 pm</dd>
                                                            <dt>Saturday</dt>
                                                            <dd>08:00 am - 11:00 pm</dd>
                                                        </dl>
                                                    </article>
                                                </section>
                                                <section className="block" id="reviews">
                                                    <header className="clearfix">
                                                        <h2 className="pull-left">Reviews</h2>
                                                        <a href="#write-review" className="btn framed icon pull-right roll">Write a review <i className="fa fa-pencil"></i></a>
                                                    </header>
                                                    <article className="clearfix overall-rating">
                                                        <strong className="pull-left">Over Rating</strong>
                                                        <figure className="rating big color pull-right" data-rating="4">
                                                            <span className="stars">
                                                                <i className="fa fa-star s1 active" data-score="1"></i>
                                                                <i className="fa fa-star s2 active" data-score="2"></i>
                                                                <i className="fa fa-star s3 active" data-score="3"></i>
                                                                <i className="fa fa-star s4 active" data-score="4"></i>
                                                                <i className="fa fa-star s5" data-score="5"></i>
                                                            </span>
                                                        </figure>
                                                    </article>
                                                    <section className="reviews">
                                                        <article className="review">
                                                            <figure className="author">
                                                                <img src={imagePath+"public/img/default-avatar.png"} alt=""/>
                                                                <div className="date">12.05.2014</div>
                                                            </figure>
                                                            <div className="wrapper">
                                                                <h5>Catherine Brown</h5>
                                                                <figure className="rating big color" data-rating="4">
                                                                    <span className="stars">
                                                                        <i className="fa fa-star s1 active" data-score="1"></i>
                                                                        <i className="fa fa-star s2 active" data-score="2"></i>
                                                                        <i className="fa fa-star s3 active" data-score="3"></i>
                                                                        <i className="fa fa-star s4 active" data-score="4"></i>
                                                                        <i className="fa fa-star s5" data-score="5"></i>
                                                                    </span>
                                                                </figure>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                    Nulla vestibulum, sem ut sollicitudin consectetur, augue diam ornare massa,
                                                                    ac vehicula leo turpis eget purus. Nunc pellentesque vestibulum mauris,
                                                                    eget suscipit mauris imperdiet vel. Nulla et massa metus.
                                                                </p>
                                                                <div className="individual-rating">
                                                                    <span>Value</span>
                                                                    <figure className="rating" data-rating="4">
                                                                        <span className="stars">
                                                                            <i className="fa fa-star s1 active" data-score="1"></i>
                                                                            <i className="fa fa-star s2 active" data-score="2"></i>
                                                                            <i className="fa fa-star s3 active" data-score="3"></i>
                                                                            <i className="fa fa-star s4 active" data-score="4"></i>
                                                                            <i className="fa fa-star s5" data-score="5"></i>
                                                                        </span>
                                                                    </figure>
                                                                </div>
                                                                <div className="individual-rating">
                                                                    <span>Service</span>
                                                                    <figure className="rating" data-rating="4">
                                                                        <span className="stars">
                                                                            <i className="fa fa-star s1 active" data-score="1"></i>
                                                                            <i className="fa fa-star s2 active" data-score="2"></i>
                                                                            <i className="fa fa-star s3 active" data-score="3"></i>
                                                                            <i className="fa fa-star s4 active" data-score="4"></i>
                                                                            <i className="fa fa-star s5" data-score="5"></i>
                                                                        </span>
                                                                    </figure>
                                                                </div>
                                                            </div>
                                                        </article>
                                                        <article className="review">
                                                            <figure className="author">
                                                                <img src={imagePath+"assets/img/default-avatar.png"} alt=""/>
                                                                <div className="date">10.05.2014</div>
                                                            </figure>
                                                            <div className="wrapper">
                                                                <h5>John Doe</h5>
                                                                <figure className="rating big color" data-rating="5">
                                                                    <span className="stars">
                                                                        <i className="fa fa-star s1 active" data-score="1"></i>
                                                                        <i className="fa fa-star s2 active" data-score="2"></i>
                                                                        <i className="fa fa-star s3 active" data-score="3"></i>
                                                                        <i className="fa fa-star s4 active" data-score="4"></i>
                                                                        <i className="fa fa-star s5 active" data-score="5"></i>
                                                                    </span>
                                                                </figure>
                                                                <p>
                                                                    Nunc pellentesque vestibulum mauris, eget suscipit mauris
                                                                    imperdiet vel. Nulla et massa metus. Nam porttitor quam eget ante
                                                                </p>
                                                                <div className="individual-rating">
                                                                    <span>Value</span>
                                                                    <figure className="rating" data-rating="5">
                                                                        <span className="stars">
                                                                            <i className="fa fa-star s1 active" data-score="1"></i>
                                                                            <i className="fa fa-star s2 active" data-score="2"></i>
                                                                            <i className="fa fa-star s3 active" data-score="3"></i>
                                                                            <i className="fa fa-star s4 active" data-score="4"></i>
                                                                            <i className="fa fa-star s5 active" data-score="5"></i>
                                                                        </span>
                                                                    </figure>
                                                                </div>
                                                                <div className="individual-rating">
                                                                    <span>Service</span>
                                                                    <figure className="rating" data-rating="5">
                                                                        <span className="stars">
                                                                            <i className="fa fa-star s1 active" data-score="1"></i>
                                                                            <i className="fa fa-star s2 active" data-score="2"></i>
                                                                            <i className="fa fa-star s3 active" data-score="3"></i>
                                                                            <i className="fa fa-star s4 active" data-score="4"></i>
                                                                            <i className="fa fa-star s5 active" data-score="5"></i>
                                                                        </span>
                                                                    </figure>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </section>
                                                </section>
                                                <section id="write-review">
                                                    <header>
                                                        <h2>Write a Review</h2>
                                                    </header>
                                                    <form id="form-review" role="form" method="post" action="?" className="background-color-white">
                                                        <div className="row">
                                                            <div className="col-md-8">
                                                                <div className="form-group">
                                                                    <label htmlFor="form-review-name">Name</label>
                                                                    <input type="text" className="form-control" id="form-review-name" name="form-review-name" required=""/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="form-review-email">Email</label>
                                                                    <input type="email" className="form-control" id="form-review-email" name="form-review-email" required=""/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="form-review-message">Message</label>
                                                                    <textarea className="form-control" id="form-review-message" name="form-review-message" rows="3" required=""></textarea>
                                                                </div>
                                                                <div className="form-group">
                                                                    <button type="submit" className="btn btn-default">Submit Review</button>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <aside className="user-rating">
                                                                    <label>Value</label>
                                                                    <figure className="rating active" data-name="value">
                                                                        <span className="stars">
                                                                            <i className="fa fa-star s1" data-score="1"></i>
                                                                            <i className="fa fa-star s2" data-score="2"></i>
                                                                            <i className="fa fa-star s3" data-score="3"></i>
                                                                            <i className="fa fa-star s4" data-score="4"></i>
                                                                            <i className="fa fa-star s5" data-score="5"></i>
                                                                        </span>
                                                                        <input readOnly="" hidden="" name="score_value" id="score_value"/>
                                                                    </figure>
                                                                </aside>
                                                                <aside className="user-rating">
                                                                    <label>Service</label>
                                                                    <figure className="rating active" data-name="score">
                                                                        <span className="stars"><i className="fa fa-star s1" data-score="1"></i>
                                                                        <i className="fa fa-star s2" data-score="2"></i>
                                                                        <i className="fa fa-star s3" data-score="3"></i>
                                                                        <i className="fa fa-star s4" data-score="4"></i>
                                                                        <i className="fa fa-star s5" data-score="5"></i>
                                                                        </span>
                                                                        <input readOnly="" hidden="" name="score_score" id="score_score"/>
                                                                    </figure>
                                                                </aside>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </section>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-3">
                                    <aside id="sidebar">
                                        <section>
                                            <header><h2>New Places</h2></header>
                                            <Link to='ganesh-medical-store-1445-patparganj-road-una-enclave-patparganj-delhi-110091' className="item-horizontal small">
                                                <h3>Ganesh Medical Store</h3>
                                                <figure>Una Enclave, Patparganj</figure>
                                                <div className="wrapper">
                                                    <div className="image"><img src={imagePath+"public/images/2/1.jpg"} alt=""/></div>
                                                    <div className="info">
                                                        <div className="type">
                                                            {/* <i><img src="assets/icons/restaurants-bars/restaurants/restaurant.png" alt=""/></i> */}
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
                                            </Link>
                                            <Link to='lovely-medicos-g215-saini-enclave-manish-chamber-commercial-complex-karkardooma-anand-vihar-delhi-110092' className="item-horizontal small">
                                                <h3>Lovely Medicos</h3>
                                                <figure>Karkardooma, Anand Vihar</figure>
                                                <div className="wrapper">
                                                    <div className="image"><img src={imagePath+"public/images/2/2.jpg"} alt=""/></div>
                                                    <div className="info">
                                                        <div className="type">
                                                            {/* <i><img src="assets/icons/restaurants-bars/restaurants/restaurant.png" alt=""/></i> */}
                                                            <span>Medical Store</span>
                                                        </div>
                                                        <div className="rating" data-rating="3">
                                                            <span className="stars">
                                                                <i className="fa fa-star s1 active" data-score="1"></i>
                                                                <i className="fa fa-star s2 active" data-score="2"></i>
                                                                <i className="fa fa-star s3 active" data-score="3"></i>
                                                                <i className="fa fa-star s4" data-score="4"></i>
                                                                <i className="fa fa-star s5" data-score="5"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to='sai-raj-chemist-shop-no-g4-a-main-road-karkardooma-near-karkardooma-metro-station-delhi-110092' className="item-horizontal small">
                                                <h3>Sai Raj Chemist</h3>
                                                <figure>Near karkardooma Metro Station</figure>
                                                <div className="wrapper">
                                                    <div className="image"><img src={imagePath+"public/images/2/1.jpg"} alt=""/></div>
                                                    <div className="info">
                                                        <div className="type">
                                                            {/* <i><img src="assets/icons/restaurants-bars/restaurants/restaurant.png" alt=""/></i> */}
                                                            <span>Medical Store</span>
                                                        </div>
                                                        <div className="rating" data-rating="5">
                                                            <span className="stars">
                                                                <i className="fa fa-star s1 active" data-score="1"></i>
                                                                <i className="fa fa-star s2 active" data-score="2"></i>
                                                                <i className="fa fa-star s3 active" data-score="3"></i>
                                                                <i className="fa fa-star s4 active" data-score="4"></i>
                                                                <i className="fa fa-star s5 active" data-score="5"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </section>
                                        <section>
                                            <a href="#"><img src={imagePath+"public/img/ad-banner-sidebar.png"} alt=""/></a>
                                        </section>
                                        <section>
                                            <header><h2>Mode Of Payment</h2></header>
                                            <ul className="bullets">
                                                <li><a href="javascript:void(0);">Cash</a></li>
                                                <li><a href="javascript:void(0);">Credit/Debit Card</a></li>
                                            </ul>
                                        </section>
                                    </aside>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </span>
        )
    }
    componentDidMount() {
        heightlightMainMenu('home');
        this.fetchBusinessDetail();
    }
    fetchBusinessDetail() {
        var self = this;
        var slug = this.props.match.params.slug;
        $.get(slug+'?type=json', function(data, response) {
            var result = $.parseJSON(data);
            self.setState({business_detail: result});
            $('.owl-carousel').owlCarousel({
                animateOut: 'slideOutDown',
                animateIn: 'flipInX',
                items:1,
                loop:true
            });
            self.initializeMap(result);
        });
    }
    shouldComponentUpdate(nextProps, currentState) {
        var slug = nextProps.match.params.slug;
        if(slug != currentState.business_detail.slug) {
            this.fetchBusinessDetail();
        }
        return true;
    }
    initializeMap(business) {
        var centralPoint = {lat: parseInt(business.latitude), lng: parseInt(business.longitude)}, self = this;
        var items = [
            {latitude: parseInt(business.latitude), longitude: parseInt(business.longitude), address: business.address1, name: business.name}
        ];
        var bounds = new google.maps.LatLngBounds(), markers = [];
        var map = new google.maps.Map(document.getElementById('map-detail'), {
            zoom: 18,
            center: centralPoint
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
                    infoWindow.setContent(items[i].address);
                    infoWindow.open(map, marker);
                }
            })(marker, i));
        }
    }
}
