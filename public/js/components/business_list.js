import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import FlipMove from 'react-flip-move';

class BusinessList extends React.Component {
    render() {
        let {items} = this.props;
        if(items.length == 0) {
            return null;
        }
        let self = this;
        return (
            <FlipMove typeName="ul" duration={750} easing="ease-out" className="results list">

                {
                    items.map(function(item) {
                        var imageUrl = 'images/card-image1.jpg';

                        return (
                            <li key={item.id}>
                                <div className="item">
                                    <a href="#" className="image loaded">
                                        <div className="inner">
                                            <div className="item-specific"></div>
                                            <img src={imageUrl} alt="" />
                                        </div>
                                    </a>
                                    <div className="wrapper">
                                        <a href="#"><h3>{item.name}</h3></a>                                        
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
                        )
                    })
                }

            </FlipMove>
        )
    }
    openNav() {
        openNav4();
    }
    componentDidUpdate() {
        $('p.card-text').removeHighlight();
        var search_term = $('input[name="medicine_name"]').val();
        $('p.card-text').highlight(search_term);
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.get('items'),
        business_list: state.get('business_list')
    }
}
const ConnectedBusinessList = withRouter(connect(mapStateToProps)(BusinessList));
export default ConnectedBusinessList;
