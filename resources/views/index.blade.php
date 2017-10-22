<!DOCTYPE html>
    <!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
    <!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
    <!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
    <!--[if (gte IE 9)|!(IE)]><!-->
    <html lang="en-US" prefix="og: http://ogp.me/ns#"> <!--<![endif]-->

    <head>

        <meta charset="utf-8">
        <title>Find drug stores near by you by searching medicine name | MedicineFinder</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="description" content="No more running from one chemist store to another when in need of medicines. Find medical stores near by you by searching the medicine you need."/>
        <meta name="robots" content="noodp"/>
        <link rel="canonical" href="http://www.medicinefinder.in/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Find drug stores near by you by searching medicine name | MedicineFinder" />
        <meta property="og:description" content="No more running from one chemist store to another when in need of medicines. Find medical stores near by you by searching the medicine you need." />
        <meta property="og:url" content="http://www.medicinefinder.in/" />
        <meta property="og:site_name" content="MedicineFinder" />

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:description" content="No more running from one chemist store to another when in need of medicines. Find medical stores near by you by searching the medicine you need."/>
        <meta name="twitter:title" content="Find drug stores near by you by searching medicine name | MedicineFinder"/>
        <meta name="keywords" content="Find Medical Stores,Find medicines online,Online medical stores,Medical online stores">

        <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">
        <!-- Mobile Specific Metas -->
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

        <style>
        ul.ui-autocomplete.ui-menu {z-index: 99999;}
        </style>
        <!-- Libs CSS -->
        <link href="{{ URL::asset('public/css/jquery-ui.css') }}" rel="stylesheet">
        <link href="{{ URL::asset('public/css/bootstrap.css') }}" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css" rel="stylesheet">
        <!-- -->
        <link rel="stylesheet" href="{{ URL::asset('public/css/owl-carousel/owl.carousel.min.css') }}">
        <link rel="stylesheet" href="{{ URL::asset('public/css/owl-carousel/owl.theme.default.min.css') }}">

        <!-- Template CSS -->
        <link rel="stylesheet" type="text/css" href="{{ URL::asset('public/css/style.css') }}">
        <link rel="stylesheet" type="text/css" type="text/css" href="{{ URL::asset('public/css/imgareaselect-default.css') }}" />
        <link rel="stylesheet" type="text/css" href="{{ URL::asset('public/css/jquery.mCustomScrollbar.css') }}" />
        <!-- Google Fonts -->
        <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Raleway:400,700,800&amp;subsetting=all' rel='stylesheet' type='text/css'>


        <!--[if lt IE 9]>
        <script src="./js/html5shiv.js"></script>
        <script src="./js/respond.js"></script>
        <![endif]-->
        <script type="text/javascript" src="{{ URL::asset('public/js/jquery-2.1.0.min.js') }}"></script>
        <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <script type="text/javascript" src="{{ URL::asset('public/js/bootstrap.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('public/js/jquery.imgareaselect.pack.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('public/js/jquery.mCustomScrollbar.concat.min.js') }}"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA7ldYnc5GNWesH52Uee3-7uKP0mX6OBAs"></script>

        <script src="{{ URL::asset('public/js/owl-carousel/owl.carousel.min.js') }}"></script>

        <style>
        .ui-autocomplete {
            max-height: 200px;
            overflow-y: auto;
            /* prevent horizontal scrollbar */
            overflow-x: hidden;
        }
        /* IE 6 doesn't support max-height
        * we use height instead, but this forces the menu to always be this tall
        */
        * html .ui-autocomplete {
            height: 200px;
        }
        .ui-menu .ui-menu-item {
            padding-left: 12px;
            padding-right: 12px;
        }

        .ui-menu .ui-menu-item .ui-item-fragment {
            color: #00a8d6;
        }
        .ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover, .ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus {
            cursor: pointer;
            background: #D6DFF2;
        }
        </style>
    </head>
    <body>

        <div id="app"></div>
        <script>
            window.__PRELOADED_STATE__ = {
                user_detail: {
                    user_id: 100,
                    first_name: 'Prem',
                    last_name: 'Prakash'
                },
                business_list: $.parseJSON(JSON.stringify(<?php echo json_encode($records) ?>)),
                items: $.parseJSON(JSON.stringify(<?php echo json_encode($records) ?>)),
                business_detail: $.parseJSON(JSON.stringify(<?php echo (empty($business_detail)) ? json_encode(array()) : json_encode($business_detail);?>))
            };
        </script>
        <script src="{{ URL::asset('public/js/dropzone.js') }}"></script>
        <script src="{{ URL::asset('public/js/common.js') }}"></script>
        <script src="{{ URL::asset('public/js/bundle.js') }}"></script>
        <script>
        // var windowObj = $(window);
        // // toggleNavClass(windowObj.scrollTop());
        // windowObj.scroll(function (event) {
        //     var scroll = windowObj.scrollTop();
        //     toggleNavClass(scroll);
        // });
        // var navbar = $('#header').find('.navbar');
        // function toggleNavClass(position) {
        //     (position >= 50) ? navbar.addClass('scrolled'): navbar.removeClass('scrolled');
        // }
        </script>


        <div id="login-overlay" class="modal-dialog modal fade">
      <div class="modal-content">
          <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
              <h4 class="modal-title" id="myModalLabel">Login to site.com</h4>
          </div>
          <div class="modal-body">
              <div class="row">
                  <div class="col-xs-6">
                      <div class="well">
                          <form id="loginForm" method="POST" action="/login/" novalidate="novalidate">
                              <div class="form-group">
                                  <label for="username" class="control-label">Username</label>
                                  <input type="text" class="form-control" id="username" name="username" value="" required="" title="Please enter you username" placeholder="example@gmail.com">
                                  <span class="help-block"></span>
                              </div>
                              <div class="form-group">
                                  <label for="password" class="control-label">Password</label>
                                  <input type="password" class="form-control" id="password" name="password" value="" required="" title="Please enter your password">
                                  <span class="help-block"></span>
                              </div>
                              <div id="loginErrorMsg" class="alert alert-error hide">Wrong username og password</div>
                              <div class="checkbox">
                                  <label>
                                      <input type="checkbox" name="remember" id="remember"> Remember login
                                  </label>
                                  <p class="help-block">(if this is a private computer)</p>
                              </div>
                              <button type="submit" class="btn btn-success btn-block">Login</button>
                              <a href="/forgot/" class="btn btn-default btn-block">Help to login</a>
                          </form>
                      </div>
                  </div>
                  <div class="col-xs-6">
                      <p class="lead">Register now for <span class="text-success">FREE</span></p>
                      <ul class="list-unstyled" style="line-height: 2">
                          <li><span class="fa fa-check text-success"></span> See all your orders</li>
                          <li><span class="fa fa-check text-success"></span> Fast re-order</li>
                          <li><span class="fa fa-check text-success"></span> Save your favorites</li>
                          <li><span class="fa fa-check text-success"></span> Fast checkout</li>
                          <li><span class="fa fa-check text-success"></span> Get a gift <small>(only new customers)</small></li>
                          <li><a href="/read-more/"><u>Read more</u></a></li>
                      </ul>
                      <p><a href="/new-customer/" class="btn btn-info btn-block">Yes please, register now!</a></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </body>

</html>
