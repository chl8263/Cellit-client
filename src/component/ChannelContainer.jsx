import React, { useEffect } from "react";
import $ from "jquery";

import ChannelChild from "../component/ChannelChild";

const init = () => {

    $(".sideContainer-open").children("a").addClass("active");
    $(".sideContainer-open").children("ul").addClass("in");

    $(".sideContainer").on('click', function() {
        if($(this).children("a").hasClass("active") || $(this).children("ul").hasClass("in")){
            $(this).children("a").removeClass("active");
            $(this).children("ul").removeClass("in");
        }else {
            $(this).children("a").addClass("active");
            $(this).children("ul").addClass("in");
        }
    });
}

const ChannelContainer = () => {

    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <li className="sidebar-item sideContainer sideContainer-open"> <a className="sidebar-link has-arrow waves-effect waves-dark" aria-expanded="false"><span className="hide-menu">Forms </span></a>
                <ul aria-expanded="false" className="collapse first-level">
                    <ChannelChild />
                    <li className="sidebar-item"><a href="form-wizard.html" className="sidebar-link"><i className="mdi mdi-pound"></i><span className="hide-menu"> Form Wizard </span></a></li>
                </ul>
            </li>
        </>
    );
}

export default ChannelContainer;