import React, { useEffect } from "react";
import $ from "jquery";

import PreLoader from "../../../PreLoader";
import RequestCell from "../setting/requestCell/RequestCell";

const SettingContainer = () => {

    useEffect(() => {
        history.pushState('','', '/MainBoard');
        $(".preloader").fadeOut(); // Remove preloader.

    }, []);

    return (
        <>
            <PreLoader />

            <div class="page-breadcrumb">
                <div class="row">
                    <div class="col-12 d-flex no-block align-items-center">
                        <h4 class="page-title">Setting</h4>
                        
                    </div>
                </div>
            </div>

            <div class="container-fluid" >
                <div className="card" style={{"height" : "80vh"}}>
                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#home" role="tab"><span className="hidden-sm-up"></span> <span className="hidden-xs-down">Request cell</span></a> </li>
                        <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#profile" role="tab"><span className="hidden-sm-up"></span> <span className="hidden-xs-down">Tab2</span></a> </li>
                        <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#messages" role="tab"><span className="hidden-sm-up"></span> <span className="hidden-xs-down">Tab3</span></a> </li>
                    </ul>
                    {/* <!-- Tab panes --> */}
                    <div className="tab-content tabcontent-border">
                        <div className="tab-pane active" id="home" role="tabpanel">
                            <div className="p-20">
                                <RequestCell />
                            </div>
                        </div>
                        <div className="tab-pane  p-20" id="profile" role="tabpanel">
                            <div className="p-20">
                                two
                            </div>
                        </div>
                        <div className="tab-pane p-20" id="messages" role="tabpanel">
                            <div className="p-20">
                                three
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SettingContainer;