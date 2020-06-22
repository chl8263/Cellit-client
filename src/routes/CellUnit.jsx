import React, { useEffect } from "react";
import $ from "jquery";
import { connect } from "react-redux";

import PreLoader from "../component/PreLoader";

const CellUnit = () => {

    useEffect(() => {
        $(".preloader").fadeOut(); // Remove preloader.
    }, []);

    return(
        <div id="main-wrapper">
            <PreLoader />
            <header className="topbar" data-navbarbg="skin5">
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                    <div className="navbar-header" data-logobg="skin5">
                        {/* <!-- This is for the sidebar toggle which is visible on mobile only --> */}
                        {/* <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close"></i></a> */}
                        {/* <!-- ============================================================== -->
                        <!-- Logo -->
                        <!-- ============================================================== --> */}
                        <a className="navbar-brand" href="index.html">
                            {/* <!-- Logo icon --> */}
                            <b className="logo-icon p-l-10">
                                {/* <!--You can put here icon as well // <i className="wi wi-sunset"></i> //--> */}
                                {/* <!-- Dark Logo icon --> */}
                                <img src="../../assets/images/logo-icon.png" alt="homepage" className="light-logo" />
                            
                            </b>
                            {/* <!--End Logo icon -->
                            <!-- Logo text --> */}
                            <span className="logo-text">
                                {/* <!-- dark Logo text --> */}
                                <img src="../../assets/images/logo-text.png" alt="homepage" className="light-logo" />
                                
                            </span>
                            {/* <!-- Logo icon --> */}
                            {/* <!-- <b className="logo-icon"> -->
                                <!--You can put here icon as well // <i className="wi wi-sunset"></i> //-->
                                <!-- Dark Logo icon -->
                                <!-- <img src="../../assets/images/logo-text.png" alt="homepage" className="light-logo" /> -->
                                
                            <!-- </b> -->
                            <!--End Logo icon --> */}
                        </a>
                        {/* <!-- ============================================================== -->
                        <!-- End Logo -->
                        <!-- ============================================================== -->
                        <!-- ============================================================== -->
                        <!-- Toggle which is visible on mobile only -->
                        <!-- ============================================================== --> */}
                        <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more"></i></a>
                    </div>
                    {/* <!-- ============================================================== -->
                    <!-- End Logo -->
                    <!-- ============================================================== --> */}
                    <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                        {/* <!-- ============================================================== -->
                        <!-- toggle and nav items -->
                        <!-- ============================================================== --> */}
                        <ul className="navbar-nav float-left mr-auto">
                            <li className="nav-item search-box">
                                <input type="text" className="form-control" placeholder="Search Cell" style={{"margin-left": "15px", width: 300}}/>
                            </li>
                        </ul>
                        {/* <!-- ============================================================== -->
                        <!-- Right side toggle and nav items -->
                        <!-- ============================================================== --> */}
                        <ul className="navbar-nav float-right">
                            {/* <!-- ============================================================== -->
                            <!-- Comment -->
                            <!-- ============================================================== --> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-bell font-24"></i>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            {/* <!-- ============================================================== -->
                            <!-- End Comment -->
                            <!-- ============================================================== -->
                            <!-- ============================================================== -->
                            <!-- Messages -->
                            <!-- ============================================================== --> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle waves-effect waves-dark" href="" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="font-24 mdi mdi-comment-processing"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown" aria-labelledby="2">
                                    <ul className="list-style-none">
                                        <li>
                                            <div className="">
                                                {/* <!-- Message --> */}
                                                <a href="javascript:void(0)" className="link border-top">
                                                    <div className="d-flex no-block align-items-center p-10">
                                                        <span className="btn btn-success btn-circle"><i className="ti-calendar"></i></span>
                                                        <div className="m-l-10">
                                                            <h5 className="m-b-0">Event today</h5> 
                                                            <span className="mail-desc">Just a reminder that event</span> 
                                                        </div>
                                                    </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="javascript:void(0)" className="link border-top">
                                                    <div className="d-flex no-block align-items-center p-10">
                                                        <span className="btn btn-info btn-circle"><i className="ti-settings"></i></span>
                                                        <div className="m-l-10">
                                                            <h5 className="m-b-0">Settings</h5> 
                                                            <span className="mail-desc">You can customize this template</span> 
                                                        </div>
                                                    </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="javascript:void(0)" className="link border-top">
                                                    <div className="d-flex no-block align-items-center p-10">
                                                        <span className="btn btn-primary btn-circle"><i className="ti-user"></i></span>
                                                        <div className="m-l-10">
                                                            <h5 className="m-b-0">Pavan kumar</h5> 
                                                            <span className="mail-desc">Just see the my admin!</span> 
                                                        </div>
                                                    </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="javascript:void(0)" className="link border-top">
                                                    <div className="d-flex no-block align-items-center p-10">
                                                        <span className="btn btn-danger btn-circle"><i className="fa fa-link"></i></span>
                                                        <div className="m-l-10">
                                                            <h5 className="m-b-0">Luanch Admin</h5> 
                                                            <span className="mail-desc">Just see the my new admin!</span> 
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <!-- ============================================================== -->
                            <!-- End Messages -->
                            <!-- ============================================================== --> */}

                            {/* <!-- ============================================================== -->
                            <!-- User profile and search -->
                            <!-- ============================================================== --> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="./public/assets/images/users/1.jpg" style={{"margin-top": "15px"}}  alt="user" className="rounded-circle" width="31"/></a>
                                <div className="dropdown-menu dropdown-menu-right user-dd animated">
                                    <a className="dropdown-item" href="javascript:void(0)"><i className="ti-user m-r-5 m-l-5"></i> My Profile</a>
                                    <a className="dropdown-item" href="javascript:void(0)"><i className="ti-wallet m-r-5 m-l-5"></i> My Balance</a>
                                    <a className="dropdown-item" href="javascript:void(0)"><i className="ti-email m-r-5 m-l-5"></i> Inbox</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="javascript:void(0)"><i className="ti-settings m-r-5 m-l-5"></i> Account Setting</a>
                                    <div className="dropdown-divider"></div>
                                    <form id="logoutForm" >
                                        <button className="dropdown-item" type="submit"><i className="fa fa-power-off m-r-5 m-l-5"></i> Logout</button>
                                    </form>
                                </div>
                            </li>
                            {/* <!-- ============================================================== -->
                            <!-- User profile and search -->
                            <!-- ============================================================== --> */}
                        </ul>
                    </div>
                </nav>
            </header>
            {/* <!-- ============================================================== -->
            <!-- End Topbar header -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Left Sidebar - style you can find in sidebar.scss  -->
            <!-- ============================================================== --> */}
            <aside className="left-sidebar" data-sidebarbg="skin5">
                {/* <!-- Sidebar scroll--> */}
                <div className="scroll-sidebar">
                    {/* <!-- Sidebar navigation--> */}
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav" className="p-t-30">
                            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="index.html" aria-expanded="false"><i className="mdi mdi-view-dashboard"></i><span className="hide-menu">Dashboard</span></a></li>
                            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="charts.html" aria-expanded="false"><i className="mdi mdi-chart-bar"></i><span className="hide-menu">Charts</span></a></li>
                            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="widgets.html" aria-expanded="false"><i className="mdi mdi-chart-bubble"></i><span className="hide-menu">Widgets</span></a></li>
                            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="tables.html" aria-expanded="false"><i className="mdi mdi-border-inside"></i><span className="hide-menu">Tables</span></a></li>
                            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="grid.html" aria-expanded="false"><i className="mdi mdi-blur-linear"></i><span className="hide-menu">Full Width</span></a></li>
                            <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-receipt"></i><span className="hide-menu">Forms </span></a>
                                <ul aria-expanded="false" className="collapse  first-level">
                                    <li className="sidebar-item"><a href="form-basic.html" className="sidebar-link"><i className="mdi mdi-note-outline"></i><span className="hide-menu"> Form Basic </span></a></li>
                                    <li className="sidebar-item"><a href="form-wizard.html" className="sidebar-link"><i className="mdi mdi-note-plus"></i><span className="hide-menu"> Form Wizard </span></a></li>
                                </ul>
                            </li>
                            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="pages-buttons.html" aria-expanded="false"><i className="mdi mdi-relative-scale"></i><span className="hide-menu">Buttons</span></a></li>
                            <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-face"></i><span className="hide-menu">Icons </span></a>
                                <ul aria-expanded="false" className="collapse  first-level">
                                    <li className="sidebar-item"><a href="icon-material.html" className="sidebar-link"><i className="mdi mdi-emoticon"></i><span className="hide-menu"> Material Icons </span></a></li>
                                    <li className="sidebar-item"><a href="icon-fontawesome.html" className="sidebar-link"><i className="mdi mdi-emoticon-cool"></i><span className="hide-menu"> Font Awesome Icons </span></a></li>
                                </ul>
                            </li>
                            <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="pages-elements.html" aria-expanded="false"><i className="mdi mdi-pencil"></i><span className="hide-menu">Elements</span></a></li>
                            <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-move-resize-variant"></i><span className="hide-menu">Addons </span></a>
                                <ul aria-expanded="false" className="collapse  first-level">
                                    <li className="sidebar-item"><a href="index2.html" className="sidebar-link"><i className="mdi mdi-view-dashboard"></i><span className="hide-menu"> Dashboard-2 </span></a></li>
                                    <li className="sidebar-item"><a href="pages-gallery.html" className="sidebar-link"><i className="mdi mdi-multiplication-box"></i><span className="hide-menu"> Gallery </span></a></li>
                                    <li className="sidebar-item"><a href="pages-calendar.html" className="sidebar-link"><i className="mdi mdi-calendar-check"></i><span className="hide-menu"> Calendar </span></a></li>
                                    <li className="sidebar-item"><a href="pages-invoice.html" className="sidebar-link"><i className="mdi mdi-bulletin-board"></i><span className="hide-menu"> Invoice </span></a></li>
                                    <li className="sidebar-item"><a href="pages-chat.html" className="sidebar-link"><i className="mdi mdi-message-outline"></i><span className="hide-menu"> Chat Option </span></a></li>
                                </ul>
                            </li>
                            <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-account-key"></i><span className="hide-menu">Authentication </span></a>
                                <ul aria-expanded="false" className="collapse  first-level">
                                    <li className="sidebar-item"><a href="authentication-login.html" className="sidebar-link"><i className="mdi mdi-all-inclusive"></i><span className="hide-menu"> Login </span></a></li>
                                    <li className="sidebar-item"><a href="authentication-register.html" className="sidebar-link"><i className="mdi mdi-all-inclusive"></i><span className="hide-menu"> Register </span></a></li>
                                </ul>
                            </li>
                            <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-alert"></i><span className="hide-menu">Errors </span></a>
                                <ul aria-expanded="false" className="collapse  first-level">
                                    <li className="sidebar-item"><a href="error-403.html" className="sidebar-link"><i className="mdi mdi-alert-octagon"></i><span className="hide-menu"> Error 403 </span></a></li>
                                    <li className="sidebar-item"><a href="error-404.html" className="sidebar-link"><i className="mdi mdi-alert-octagon"></i><span className="hide-menu"> Error 404 </span></a></li>
                                    <li className="sidebar-item"><a href="error-405.html" className="sidebar-link"><i className="mdi mdi-alert-octagon"></i><span className="hide-menu"> Error 405 </span></a></li>
                                    <li className="sidebar-item"><a href="error-500.html" className="sidebar-link"><i className="mdi mdi-alert-octagon"></i><span className="hide-menu"> Error 500 </span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- End Sidebar navigation --> */}
                </div>
                {/* <!-- End Sidebar scroll--> */}
            </aside>
            {/* <!-- ============================================================== -->
            <!-- End Left Sidebar - style you can find in sidebar.scss  -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Page wrapper  -->
            <!-- ============================================================== --> */}
            <div className="page-wrapper">
                {/* <!-- ============================================================== -->
                <!-- Bread crumb and right sidebar toggle -->
                <!-- ============================================================== --> */}
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-12 d-flex no-block align-items-center">
                            <h4 className="page-title">Tables</h4>
                            <div className="ml-auto text-right">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ============================================================== -->
                <!-- End Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Container fluid  -->
                <!-- ============================================================== --> */}
                <div className="container-fluid">
                    
                   
                </div>
                {/* <!-- ============================================================== -->
                <!-- End Container fluid  -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- footer -->
                <!-- ============================================================== --> */}
                <footer className="footer text-center">
                    All Rights Reserved by Matrix-admin. Designed and Developed by <a href="https://wrappixel.com">WrapPixel</a>.
                </footer>
                {/* <!-- ============================================================== -->
                <!-- End footer -->
                <!-- ============================================================== --> */}
            </div>
            {/* <!-- ============================================================== -->
            <!-- End Page wrapper  -->
            <!-- ============================================================== --> */}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { appInfo: state };
}

const mapDispathToProps = (dispatch) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispathToProps) (CellUnit);