import React, { useEffect } from "react";
import $ from "jquery";

import PreLoader from "../../../PreLoader";
import ChannelPostModal from "../channel/ChannelPostModal";
import ChannelTable from "../channel/table/ChannelTable";

import { connect } from "react-redux";
import { HTTP, MediaType } from "../../../../util/Const";

const Channel = ( { appInfo, data } ) => {

    const channelData = data.location.channelData;

    useEffect(() => {
        history.pushState('','', '/MainBoard');
        $(".preloader").fadeOut(); // Remove preloader.
        getCahnnelContent(0);
    }, []);

    const getCahnnelContent = (pageNumber) => {
        const JWT_TOKEN = appInfo.appInfo.jwtToken;
        const channelId = channelData.channelId;

        //s: Ajax ----------------------------------
        fetch(HTTP.SERVER_URL + `/api/channels/${channelId}/channelPosts?page=${pageNumber}&size=${10}&sort=createDate,DESC`, {
            method: HTTP.GET,
            headers: {
                'Content-type': MediaType.JSON,
                'Accept': MediaType.HAL_JSON,
                'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
            },
        }).then(res => {
            return res.json();
        }).then(res => {
            console.log(res);
            if("errors" in res){
                try{
                    errorCodeToAlertCreater(json);
                }catch(error){
                    throw error;
                }
            }else if("_embedded" in res){
                console.log(111);
                console.log(res);
                console.log(res._embedded.cellEntityModelList);
                console.log(22);
                //setCellList(res._embedded.cellEntityModelList);
            }
        }).catch(error => {
            console.error(error);
            alert("Client unexpect error.");
        });
        // e: Ajax ----------------------------------
    };
    
    return (
        <>
            <PreLoader />
            <div className="scroll-sidebar doScroll scrollable" style={{"height": "98vh"}}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Channel : {channelData.channelName}</h4>
                        <div className="table-responsive">
                            <div id="zero_config_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4">
                                <div className="row">
                                    <div className="col-sm-12 col-md-4">
                                        <div className="dataTables_length" id="zero_config_length">
                                            <label>Show  
                                                <select name="zero_config_length" aria-controls="zero_config" className="form-control form-control-sm">
                                                    <option value="10">10</option><option value="25">25</option>
                                                    <option value="50">50</option><option value="100">100</option>
                                                </select> entries
                                            </label>
                                        </div>
                                    </div>
                                <div className="col-sm-12 col-md-4">
                                    <div id="zero_config_filter" className="dataTables_filter">
                                        <label>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="zero_config"/></label>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                {/* <a className="dropdown-item" href="#!" data-toggle="modal" data-target="#createChannelPost">Create Cell Unit</a> */}
                                    <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#createChannelPost">New post</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12"></div>
                                <ChannelTable />
                            </div>
                        </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info" id="zero_config_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers" id="zero_config_paginate">
                                        <ul className="pagination">
                                            <li className="paginate_button page-item previous disabled" id="zero_config_previous">
                                                <a href="#!" aria-controls="zero_config" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                                            </li>
                                            <li className="paginate_button page-item active">
                                                <a href="#!" aria-controls="zero_config" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#!" aria-controls="zero_config" data-dt-idx="2" tabIndex="0" className="page-link">2</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#!" aria-controls="zero_config" data-dt-idx="3" tabIndex="0" className="page-link">3</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#!" aria-controls="zero_config" data-dt-idx="4" tabIndex="0" className="page-link">4</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#!" aria-controls="zero_config" data-dt-idx="5" tabIndex="0" className="page-link">5</a>
                                            </li>
                                            <li className="paginate_button page-item next" id="zero_config_next">
                                                <a href="#!" aria-controls="zero_config" data-dt-idx="7" tabIndex="0" className="page-link">Next</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <ChannelPostModal channelData = {channelData}/>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { appInfo: state };
}

export default connect(mapStateToProps) (Channel);