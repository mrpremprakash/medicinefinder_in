import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class TopNav extends React.Component {
    render() {
        console.log(this.props);
        return (
            <header id="header">
        		<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        			<div className="container">
        				<div className="navbar-header">
        					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        						<span className="icon-bar"></span>
        						<span className="icon-bar"></span>
        						<span className="icon-bar"></span>
        					</button>

        					<a className="navbar-brand text-logo" href="javascript:void(0);"><i className="icon-signout"></i>MedicineFinder</a>

        				</div>

        				<div className="navigation navbar-collapse collapse">
        					<ul className="nav navbar-nav menu-right">
        						<li className="active"><Link to={window.basePath}>Home</Link></li>
        						<li><Link to={window.basePath+'intro'}>Intro</Link></li>
        						<li><Link to={window.basePath+'portfolio'}>Portfolio</Link></li>
        						<li><Link to={window.basePath+'features'}>Features</Link></li>
        						<li><Link to={window.basePath+'faq'}>FAQ</Link></li>
                                {
                                    this.getAddNewLink()
                                }
                                <li><a href="javascript:void(0)" data-toggle="modal" data-target="#myModal">Login</a></li>
        					</ul>
        				</div>
        			</div>
        		</nav>
        	</header>
        )
    }

    getAddNewLink() {
        let {user_detail} = this.props;
        if(user_detail && user_detail.user_id) {
            return <li><Link to={window.basePath+'add_new'}>Add New</Link></li>
        }
    }
    
}

const mapStateToProps = (state) => {
    return {
        user_detail: state.get('user_detail')
    }
}
const ConnectedTopNav = connect(mapStateToProps)(TopNav);
export default ConnectedTopNav;
