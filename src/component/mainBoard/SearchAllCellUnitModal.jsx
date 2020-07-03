import React, { useState } from "react";
import { connect } from "react-redux";

import { PAGE_ROUTE, HTTP, MediaType} from "../../util/Const";
import errorCodeToAlertCreater from "../../util/ErrorCodeToAlertCreater";

const SearchAllCellUnitModal = ( { appInfo, getCells } ) => {

    const [createCellname, setCreateCellname] = useState("");

    const onChangeCreateCellname = (e) => {
        setCreateCellname(e.target.value);
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

    return (
        <>
            <div className="modal fade none-border" id="searchAllCellUnit">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title"><strong>Search All Cell Unit</strong></h4>
                            <button id="modalClose" type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        
                            <div className="modal-body">
                                <form id="createNewCellUnitForm" onSubmit={onSubmitCreateCell}>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <label className="control-label">Cell Unit Name</label>
                                            <input style={{"display": "inline"}} id="cellName" name="cellName" className="form-control form-white" onChange={onChangeCreateCellname} value={createCellname} placeholder="Enter name" type="text" />
                                            <button style={{"display": "inline"}} type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </form>
                                <hr/>
                                <label className="control-label">Result of Cell List</label>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="control-label">Cell Unit Name</label>
                                        <input id="cellName" name="cellName" className="form-control form-white" onChange={onChangeCreateCellname} value={createCellname} placeholder="Enter name" type="text"  />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="control-label">Cell Unit Name</label>
                                        <input id="cellName" name="cellName" className="form-control form-white" onChange={onChangeCreateCellname} value={createCellname} placeholder="Enter name" type="text"  />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                            </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return { appInfo: state };
}

export default connect(mapStateToProps) (SearchAllCellUnitModal);