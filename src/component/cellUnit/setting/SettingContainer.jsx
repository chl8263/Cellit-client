import React from "react";

import RequestCell from "./settingContent/requestCell/RequestCell"

const SettingContainer = () => {
    return (
        <>
            <div className="card">
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
        </>
    );
}

export default SettingContainer;