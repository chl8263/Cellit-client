import React from "react";

const ChannelChild = ({ channelId, channelName }) => {

    return(
        <>
            <li className="sidebar-item"><a href="form-basic.html" className="sidebar-link"><i className="mdi mdi-pound"></i><span className="hide-menu"> {channelName} </span></a></li>
        </>
    );
};

export default ChannelChild;