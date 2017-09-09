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
            <FlipMove typeName="div" duration={750} easing="ease-out" className="row">

                {
                    items.map(function(item) {
                        var imageUrl = 'images/card-image1.jpg';
                        // if(item.img_url) {
                        //     imageUrl = 'img/thumbs/'+item.img_url;
                        // }
                        return (
                            <div className="col-sm-12 col-md-3" key={item.id}>
                                <div className="card">
                                    <img className="card-img-top" src={imageUrl} alt="card-image-cap"/>
                                    <div className="card-block">
                                        <h4 className="card-title">{item.name}</h4>
                                        <p className="card-text">{item.address}</p>
                                        <a href="javascript:void(0)" className="btn btn-success pill ripple-cont" onClick={self.openNav.bind(this)}>
                                            <div className="ripple-content">Detail</div><div className="ink-content"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
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
