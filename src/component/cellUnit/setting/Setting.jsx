import React from "react";
import { Link } from "react-router-dom";



const Setting = () => {
    return (
        <>
            <hr className="hr1"/>

            <Link to="/setting"><li className="sidebar-item"><a href="form-basic.html" className="sidebar-link"><i className="mdi mdi-settings"></i><span className="hide-menu"> Setting </span></a></li></Link>
        </>
    )
};

export default Setting;