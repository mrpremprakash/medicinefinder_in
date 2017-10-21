import React from 'react';
import Footer from './footer';
class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            stores: [
                {src: 'img/thumbs/bhandari-dispensary-pandav-nagar-delhi-0.jpg', alt: 'Bhandari Dispensary Pandav Nagar Delhi', href: 'drug-store/bhandari-dispensary-shop-no-52-main-market-opposite-mother-dairy-pandav-nagar-new-delhi-delhi-110092', title: 'Bhandari Dispensary Pandav Nagar Delhi'},
                {src: 'img/thumbs/prem-medical-store-laxmi-nagar-delhi.jpg', alt: 'Prem Medical Store Laxmi Nagar Delhi', href: 'drug-store/prem-medical-store-shop-no4&5-near-walia-nursing-home-main-vikas-marg-laxmi-nagar-delhi-110092', title: 'Prem Medical Store Laxmi Nagar Delhi'},
                {src: 'img/thumbs/lovely-medicos-karkardooma-delhi.jpg', alt: 'Lovely Medicos Karkardooma Delhi', href: 'drug-store/lovely-medicos-g215-saini-enclave-manish-chamber-commercial-complex-karkardooma-anand-vihar-delhi-110092', title: 'Lovely Medicos Karkardooma Delhi'},
                {src: 'img/thumbs/new-sidhartha-chemists-pahar-ganj-delhi.jpg', alt: 'New Sidhartha Chemists Pahar Ganj Delhi', href: 'drug-store/new-sidhartha-chemist-delhi', title: 'New Sidhartha Chemists Pahar Ganj Delhi'},
            ]
        }
    }
    render() {
        return (
            <span>
                <section id="portfolio" className="bg-grey section">
            		<div className="container">
            			<div className="row">
            				<div className="col-lg-12">
            					<div className="headline">
            						<h1>Prime Medical Stores Associated With US</h1>
            						<p>Below are few prime medical stores associated with us.</p>
            					</div>
            				</div>
            			</div>
            			<div className="row">
    			            {
                                this.state.stores.map(function(store, index) {
                                    return (
                                        <div className="col-xs-6 col-sm-6 col-md-3" key={index}>
                        					<div className="hover-details">
                        						<img className="img-responsive img-thumbnail" src={store.src} alt={store.alt} />
                        						<div className="img-cover">
                        							<a href={store.href} className="img-zoom" data-gal="prettyPhoto" target="_blank">
                        							<i className="fa fa-search fa-fw"></i></a>
                        							<h3>{store.title}</h3>
                        						</div>
                        					</div>
                        				</div>
                                    )
                                })
                            }
            			</div>
            		</div>
            	</section>
                <Footer />
            </span>
        )
    }
    componentDidMount() {
        heightlightMainMenu('portfolio');
    }
}
export default Portfolio;
