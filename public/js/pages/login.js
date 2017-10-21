import React from 'react';

class LoginRegister extends React.Component {
    render() {
        return (
            <div>
                <div className="modal fade" tabIndex="-1" role="dialog" id="myModal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                            	<div className="row">
                        			<div className="col-md-6">
                        				<div className="panel panel-login">
                        					<div className="panel-heading">
                        						<div className="row">
                        							<div className="col-xs-6">
                        								<a href="javascript:void(0)" onClick={e => {this.toggleForm.call(this, e, '#login-form')}} className="">Login</a>
                        							</div>
                        							<div className="col-xs-6">
                        								<a href="javascript:void(0)" onClick={e => {this.toggleForm.call(this, e, '#register-form')}} className="active">Register</a>
                        							</div>
                        						</div>
                        					</div>
                        					<div className="panel-body">
                        						<div className="row">
                        							<div className="col-lg-12">
                        								<div id="login-form" role="form">
                        									<div className="form-group">
                        										<input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" value=""/>
                        									</div>
                        									<div className="form-group">
                        										<input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password"/>
                        									</div>
                        									<div className="form-group text-center">
                        										<input type="checkbox" tabIndex="3" className="" name="remember" id="remember"/>
                        										<label htmlFor="remember"> Remember Me</label>
                        									</div>
                        									<div className="form-group">
                        										<div className="row">
                        											<div className="col-sm-6 col-sm-offset-3">
                        												<input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In"/>
                        											</div>
                        										</div>
                        									</div>
                        									{/* <div className="form-group">
                        										<div className="row">
                        											<div className="col-lg-12">
                        												<div className="text-center">
                        													<a href="https://phpoll.com/recover" tabIndex="5" className="forgot-password">Forgot Password?</a>
                        												</div>
                        											</div>
                        										</div>
                        									</div> */}
                        								</div>
                        								<div id="register-form" role="form" className="hide">
                        									<div className="row">
                                                                <div className="col-md-8">
                                                                    <div className="form-group">
                                										<input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" value=""/>
                                									</div>
                                									<div className="form-group">
                                										<input type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" value=""/>
                                									</div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <img id="user_profile" src="public/img/profile_icon.jpg" style={{marginTop: '-10px'}}/>
                                                                </div>
                                                            </div>
                        									<div className="form-group">
                        										<input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password"/>
                        									</div>
                        									<div className="form-group">
                        										<input type="password" name="confirm-password" id="confirm-password" tabIndex="2" className="form-control" placeholder="Confirm Password"/>
                        									</div>
                        									<div className="form-group">
                        										<div className="row">
                        											<div className="col-sm-6 col-sm-offset-3">
                        												<input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Register Now"/>
                        											</div>
                        										</div>
                        									</div>
                        								</div>
                        							</div>
                        						</div>
                        					</div>
                        				</div>
                        			</div>
                        		</div>
                        	</div>
                            </div>

                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="modal fade" tabIndex="-1" role="dialog" id="crop_profile">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">Crop Profile Picture</h4>
                            </div>
                            <div className="modal-body"></div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.cropProfileImage}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    cropProfileImage() {
        $.ajax({
            url: 'upload_profile',
            type: 'post',
            data: {action: 'crop_image', crop_detail: profile_img_details, _token: $('meta[name="csrf-token"]').attr('content')},
            success: function(response) {
                console.log(response);
            }
        });
    }
    toggleForm(event, target) {
        var clicked_element = $(event.target);
        clicked_element.closest('.panel-login').find('.panel-body').find('div[role="form"]').addClass('hide');
        $(target).removeClass('hide');

    }

}
export default LoginRegister;
