import React from "react";

const Notification = () => {
    return (
        <>
            {/* <!-- ============================================================== -->
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
        </>
    );
}

export default Notification;