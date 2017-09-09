import React from 'react';
import LeftNav from './navigation/left_nav';
import TopNav from './navigation/top_nav';

class AminApp extends React.Component {
    render() {
        return (
            <div className="container body">
                <div className="main_container">
                    <LeftNav />
                    <TopNav />
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default AminApp;
