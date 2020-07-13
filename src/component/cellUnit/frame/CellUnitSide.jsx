import React, { useEffect } from "react"
import { HashRouter, Route, Link } from "react-router-dom";

import { CellUnitRoles } from "../../../util/Const";

import ChannelContainer from "../channel/ChannelContainer";
import Setting from "../setting/Setting";
import { connect } from "react-redux";

const CellUnitSide = ({ appInfo }) => {

    useEffect(() => {
        
    }, []);

    return (
        <>
            <aside className="left-sidebar" data-sidebarbg="skin5">
                {/* <!-- Sidebar scroll--> */}
                <div className="scroll-sidebar doScroll scrollable" style={{"height": "98vh"}}>
                    {/* <!-- Sidebar navigation--> */}
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav" className="p-t-30">

                            {/* Common of CellUnit */}

                            <Link to="/dashboard"><li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="index.html" aria-expanded="false"><i className="mdi mdi-view-dashboard"></i><span className="hide-menu">Dashboard</span></a></li></Link>
                            <Link to="/Charts"><li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="charts.html" aria-expanded="false"><i className="mdi mdi-chart-bar"></i><span className="hide-menu">Charts</span></a></li></Link>
                            <Link to="/Widgets"><li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="widgets.html" aria-expanded="false"><i className="mdi mdi-chart-bubble"></i><span className="hide-menu">Widgets</span></a></li></Link>
                            <Link to="/Tables"><li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="tables.html" aria-expanded="false"><i className="mdi mdi-border-inside"></i><span className="hide-menu">Tables</span></a></li></Link>
                            <Link to="/Full"><li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="grid.html" aria-expanded="false"><i className="mdi mdi-blur-linear"></i><span className="hide-menu">Full Width</span></a></li></Link>

                            <hr className="hr1"/>

                            {/* Channel */}
                            <ChannelContainer />        

                            {/* Direct Message */}
                            <li className="sidebar-item sideContainer"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><span className="hide-menu">Direct Message </span></a>
                                <ul aria-expanded="false" className="collapse  first-level">
                                    <li className="sidebar-item"><a href="form-basic.html" className="sidebar-link"><i className="mdi mdi-note-outline"></i><span className="hide-menu"> Form Basic </span></a></li>
                                    <li className="sidebar-item"><a href="form-wizard.html" className="sidebar-link"><i className="mdi mdi-note-plus"></i><span className="hide-menu"> Form Wizard </span></a></li>
                                </ul>
                            </li>
                            
                            {/* Setting for page admin */}
                            {(appInfo.cellInfo.role === CellUnitRoles.CREATOR || appInfo.cellInfo.role === CellUnitRoles.ADMIN)
                                && <Setting /> }
                        </ul>
                    </nav>
                    {/* <!-- End Sidebar navigation --> */}
                </div>
                {/* <!-- End Sidebar scroll--> */}
            </aside>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return { appInfo: state };
}

const mapDispathToProps = (dispatch) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispathToProps) (CellUnitSide);