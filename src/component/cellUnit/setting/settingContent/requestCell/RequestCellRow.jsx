import React, { useState } from "react";
import { connect } from "react-redux";

import { HTTP, MediaType, FETCH_STATE} from "../../../../../util/Const";

const ACCEPT = "ACCEPT";
const PENDING = "PENDING";
const REJECT = "REJECT";

const RequestCellRow = ( {appInfo, requestInfo} ) => {

    const [accountName, setAccountName] = useState(requestInfo.accountName);
    const [status, setStatus] = useState("PENDING");
    const [btnStatus, setBtnStatus] = useState(true);
    const JWT_TOKEN = appInfo.appInfo.jwtToken;

    const onclickApproveRequest = () => {
        if(confirm("Would you like to approve?")){
            // s: Ajax ----------------------------------
            fetch(HTTP.SERVER_URL + `/api/cells/${appInfo.cellInfo.cellId}/accounts/${requestInfo.accountId}`, {
                method: HTTP.POST,
                headers: {
                    'Content-type': MediaType.JSON,
                    'Accept': MediaType.HAL_JSON,
                    'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
                },
            }).then(res => {
                if(res.ok){        
                    alert("The request was processed successfully.");
                    setStatus(ACCEPT);
                    setBtnStatus(false);
                    throw(FETCH_STATE.FINE);
                }else {
                    return res.json();
                }
            }).then(json => {
                try{
                    errorCodeToAlertCreater(json);
                }catch(error){
                    throw error;
                }
            }).catch(error => {
                if(!error === FETCH_STATE.FINE){
                    console.error(error);
                    alert("Client unexpect error.");
                }
            });
            // e: Ajax ----------------------------------
        }
    };

    const onclickReject = () => {
        console.log(requestInfo);
        const notiInfo = {
            message: "The approve ",
            status: "REJECT"
        }
        if(confirm("Would you like to Reject?")){
            // s: Ajax ----------------------------------
            fetch(HTTP.SERVER_URL + `/api/accounts/${requestInfo.accountId}/accountNotifications`, {
                method: HTTP.POST,
                headers: {
                    'Content-type': MediaType.JSON,
                    'Accept': MediaType.HAL_JSON,
                    'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
                },
                body: JSON.stringify(notiInfo)
            }).then(res => {
                if(res.ok){        
                    alert("The request was processed successfully.");
                    setStatus(REJECT);
                    setBtnStatus(false);
                    throw(FETCH_STATE.FINE);
                }else {
                    return res.json();
                }
            }).then(json => {
                try{
                    errorCodeToAlertCreater(json);
                }catch(error){
                    throw error;
                }
            }).catch(error => {
                if(!error === FETCH_STATE.FINE){
                    console.error(error);
                    alert("Client unexpect error.");
                }
            });
            // e: Ajax ----------------------------------
            
        }
    };

    return (
        <>
            <tr>
                <td>{accountName}</td>
                {(status === PENDING) && <td className="text-warning">Pending</td> }
                {(status === ACCEPT) && <td class="text-success">Accept</td> }
                {(status === REJECT) && <td class="text-danger">Reject</td> }
                {(btnStatus === true) && 
                    <td>
                        <a onClick={onclickApproveRequest} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Accept">
                            <i className="mdi mdi-check"></i>
                        </a>
                        <a onClick={onclickReject} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Reject">
                            <i className="mdi mdi-close"></i>
                        </a>
                    </td>
                }
            </tr>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return { appInfo: state };
}

export default connect(mapStateToProps) (RequestCellRow);