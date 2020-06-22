import React, { useEffect } from "react";
import $ from "jquery";
import { connect } from "react-redux";

import PreLoader from "../component/PreLoader";
import CellUnitTopBar from "../component/CellUnitTopBar";
import CellUnitSide from "../component/CellUnitSide";

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
                    <CellUnitTopBar />
                </nav>
            </header>
            {/* <!-- ============================================================== -->
            <!-- End Topbar header -->
            <!-- ============================================================== -->*/}

            {/* <!-- ============================================================== -->
            <!-- Left Sidebar - style you can find in sidebar.scss  -->
            <!-- ============================================================== -->  */}
            <CellUnitSide />
            {/* <!-- ============================================================== -->
            <!-- End Left Sidebar - style you can find in sidebar.scss  -->
            <!-- ============================================================== --> */}

            {/* <!-- ============================================================== -->
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