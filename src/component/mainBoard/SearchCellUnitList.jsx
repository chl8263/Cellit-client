import React from "react";
import { connect } from "react-redux";

const SearchCellUnitList = ( { appInfo, cellInfo, isAssign } ) => {

    const onClickRequestToJoinBtn = (e) => {
        e.preventDefault();
        
        const cellId = cellInfo.cellId;
        const currentAccountId = appInfo.userInfo.currentUserId;
        const JWT_TOKEN = appInfo.appInfo.jwtToken;

        //const modalClose = document.getElementById("modalClose");
        
        //s: Ajax ----------------------------------
        fetch(HTTP.SERVER_URL + `/api/cells/${cellId}/cellRequests/accounts/${currentAccountId}`, {
            method: HTTP.POST,
            headers: {
                'Content-type': MediaType.JSON,
                'Accept': MediaType.HAL_JSON,
                'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
            },
        }).then((res) => {
            if(!res.ok && res.status !== HTTP.STATUS_CREATED && res.status !== HTTP.STATUS_BAD_REQUEST){
                throw res;
            }
            return res;
        }).then((res) => {
            if(res.status === HTTP.STATUS_CREATED){
                alert("Create cell successfully");
                modalClose.click();
                getCellList();
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
        //e: Ajax ----------------------------------
    }
    return (
        <>
            {/* <div>{cellInfo.cellName}</div> */}

            {/* <!-- CellList --> */}
            <div className="d-flex flex-row comment-row m-t-0">
                <div className="p-2"><img src="./public/assets/images/users/1.jpg" alt="user" width="50" className="rounded-circle"/></div>
                <div className="comment-text w-100">
                    <h6 className="font-medium">{cellInfo.cellName}</h6>
                    <span className="m-b-15 d-block">{cellInfo.cellDescription} </span>
                    <div className="comment-footer">
                        <span className="text-muted float-right">{cellInfo.createDate}</span>
                        {!isAssign && <button type="button" className="btn btn-success btn-sm" onClick={onClickRequestToJoinBtn}>Request to join</button>}
                        {isAssign && <span className="text-muted float-left">Already joined this Cell Unit</span>}
                    </div>
                </div>
            </div>

            <hr/>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { appInfo: state };
}

export default connect(mapStateToProps) (SearchCellUnitList);
