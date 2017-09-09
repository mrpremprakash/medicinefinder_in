import React from 'react';
import {Link} from 'react-router';

const LeftNav = () => {
    return (
        <div className="col-md-3 left_col">
            <div className="left_col scroll-view">
                <div className="navbar nav_title" style={{border: 0}}>
                    <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Medicine-Finder!</span></a>
                </div>
                <div className="clearfix"></div>

                <div className="profile clearfix">
                    <div className="profile_pic">
                        <img src="images/img.png" alt="..." className="img-circle profile_img" />
                    </div>
                    <div className="profile_info">
                    <span>Welcome,</span>
                    <h2>Prem Prakash</h2>
                    </div>
                </div>
                <br />

                <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                    <div className="menu_section">
                        <h3>General</h3>
                        <ul className="nav side-menu">
                            <li><a><i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span></a>
                                <ul className="nav child_menu">
                                    <li><Link to={window.basePath}>Dashboard</Link></li>
                                    <li><Link to={window.basePath+'/settings'}>Settings</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="menu_section">
                        <h3>Live On</h3>
                        <ul className="nav side-menu">
                            <li><a><i className="fa fa-bug"></i> Additional Pages <span className="fa fa-chevron-down"></span></a>
                                <ul className="nav child_menu">
                                    <li><a href="e_commerce.html">E-commerce</a></li>
                                    <li><a href="projects.html">Projects</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-footer hidden-small">
                    <a data-toggle="tooltip" data-placement="top" title="Settings">
                        <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                    </a>
                    <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                        <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                    </a>
                    <a data-toggle="tooltip" data-placement="top" title="Lock">
                        <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                    </a>
                    <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                        <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default LeftNav;
