import React, { useEffect, useState } from "react";
import $ from "jquery";
import { connect } from "react-redux";

import PreLoader from "../component/PreLoader";
import { PAGE_ROUTE, HTTP, MediaType} from "../util/Const";
import { actionCreators } from "../store";
import errorCodeToAlertCreater from "../util/ErrorCodeToAlertCreater";

import CellsList from "../component/CellsList";


const MainBoard = ( {appInfo, switchLogin, initJwtToken, initUserInfo} ) => {

    const [createCellname, setCreateCellname] = useState("");
    const [cells, setCells] = useState([]);

    useEffect(() => {
        history.pushState('','', '/MainBoard');
        $(".preloader").fadeOut(); // Remove preloader.

        getCells(); //get Cells with current user
    }, []);

    const onChangeCreateCellname = (e) => {
        setCreateCellname(e.target.value);
    };

    const getCells = () => {
        const JWT_TOKEN = appInfo.appInfo.jwtToken;
        //s: Ajax ----------------------------------
        fetch(HTTP.SERVER_URL + `/api/account/${appInfo.userInfo.currentUserId}/cells`, {
            method: HTTP.GET,
            headers: {
                'Content-type': MediaType.JSON,
                'Accept': MediaType.HAL_JSON,
                'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
            },
        }).then((res) => {
            if(!res.ok){
                throw res;
            }
            return res;
        }).then((res) => {
            return res.json();
        }).then((res) => {
            if("_embedded" in res ){
                setCells(res._embedded.cellEntityModelList);
            }else {console.log(2);}
        }).catch(error => {
            alert("Cannot create cell, Please try later.");
        });
        // e: Ajax ----------------------------------
    };

    const onSubmitCreateCell = (e) => {
        e.preventDefault();

        const JWT_TOKEN = appInfo.appInfo.jwtToken;

        const cellInfo = {
            cellName: createCellname,
        }
        const modalClose = document.getElementById("modalClose");
        
        //s: Ajax ----------------------------------
        fetch(HTTP.SERVER_URL + "/api/cells", {
            method: HTTP.POST,
            headers: {
                'Content-type': MediaType.JSON,
                'Accept': MediaType.HAL_JSON,
                'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
            },
            body: JSON.stringify(cellInfo)
        }).then((res) => {
            if(!res.ok && res.status !== HTTP.STATUS_CREATED && res.status !== HTTP.STATUS_BAD_REQUEST){
                throw res;
            }
            return res;
        }).then((res) => {
            if(res.status === HTTP.STATUS_CREATED){
                alert("Create cell successfully");
                modalClose.click();
                getCells();
            }else if(res.status === HTTP.STATUS_BAD_REQUEST){
                return res.json();
            }
            else throw res;
        }).then((res) => {
            try{
                errorCodeToAlertCreater(res);
            }catch(error){
                console.error(error);
            }
        }).catch(error => {
            console.error(error);
            alert("Cannot create cell, Please try later.");
        });
        // e: Ajax ----------------------------------
    };

    const onClickLogOut = (e) => {
        e.preventDefault();
        initJwtToken();
        initUserInfo();
        switchLogin();
    };

    return (
        <>
            <header className="topbar" data-navbarbg="skin5">
                <PreLoader />
                <nav className="navbar top-navbar navbar-expand-md navbar-dark">

                    {/* <!-- ============================================================== -->
                    <!-- End Logo -->
                    <!-- ============================================================== --> */}
                    <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                        {/* <!-- ============================================================== -->
                        <!-- toggle and nav items -->
                        <!-- ============================================================== --> */}
                        <ul className="navbar-nav float-left mr-auto">
                            {/* <!-- ============================================================== -->
                            <!-- create new -->
                            <!-- ============================================================== --> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="d-none d-md-block">Create New <i className="fa fa-angle-down"></i></span>
                                    <span className="d-block d-md-none"><i className="fa fa-plus"></i></span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="javascript:void(0)" data-toggle="modal" data-target="#add-new-event">Create Cell Unit</a>
                                    <a className="dropdown-item" href="#">....</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">....</a>
                                </div>
                            </li>
                            {/* <!-- ============================================================== -->
                            <!-- Search -->
                            <!-- ============================================================== --> */}
                            <li className="nav-item search-box">
                                <input type="text" className="form-control" placeholder="Search Cell" style={{"margin-top": "15px", width: 300}}/>
                            </li>
                            
                            {/* <li className="nav-item search-box"> <a className="nav-link waves-effect waves-dark" href="javascript:void(0)"><i className="ti-search"></i></a>
                                <form className="app-search position-absolute">
                                    <input type="text" className="form-control" placeholder="Search &amp; enter"/> <a className="srh-btn"><i className="ti-close"></i></a>
                                </form>
                            </li> */}
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
                                    <form id="logoutForm" onSubmit={onClickLogOut}>
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

            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">My Cell Unit</h4>
                </div>
                
                {/* <div className="doScroll scroll-y"> */}
                <div className="doScroll scrollable"  style={{"height": "80vh"}}>
                    {cells.map( x => {
                        return <CellsList key={x.cellId} cellInfo={x} />
                    })}
                </div>

            </div>

            {/* <!-- Modal Add Category --> */}
            <div className="modal fade none-border" id="add-new-event">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title"><strong>Create new Cell Unit</strong></h4>
                            <button id="modalClose" type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <form id="createNewCellUnitForm" onSubmit={onSubmitCreateCell}>
                            <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="control-label">Cell Unit Name</label>
                                            <input id="cellName" name="cellName" className="form-control form-white" onChange={onChangeCreateCellname} value={createCellname} placeholder="Enter name" type="text"  />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="control-label">Choose Category Color</label>
                                            <select className="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                                                <option value="success">Success</option>
                                                <option value="danger">Danger</option>
                                                <option value="info">Info</option>
                                                <option value="primary">Primary</option>
                                                <option value="warning">Warning</option>
                                                <option value="inverse">Inverse</option>
                                            </select>
                                        </div>
                                    </div>
                                
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-danger waves-effect waves-light save-category">Save</button>
                                <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </> 
    );
};

const mapStateToProps = (state, ownProps) => {
    return { appInfo: state };
}

const mapDispathToProps = (dispatch) => {
    return {
        switchLogin: () => dispatch(actionCreators.switchMainPageRoute(PAGE_ROUTE.LOGIN)),
        initJwtToken: () => dispatch(actionCreators.addJwtToken("")),
        initUserInfo: () => dispatch(actionCreators.addUserInfo("")),
    };
}

export default connect(mapStateToProps, mapDispathToProps) (MainBoard);