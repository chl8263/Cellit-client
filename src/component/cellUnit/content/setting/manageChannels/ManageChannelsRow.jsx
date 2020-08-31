import React, { useState } from "react";
import { connect } from "react-redux";

import { HTTP, MediaType, FETCH_STATE} from "../../../../../util/Const";
import errorCodeToAlertCreater from "../../../../../util/ErrorCodeToAlertCreater";

const ACTIVE = "ACTIVE";
const INACTIVE = "INACTIVE";

const ManageChannelsRow = ( {appInfo, channelInfo} ) => {

    const [channelName, setChannelName] = useState(channelInfo.channelName);
    const [status, setStatus] = useState(ACTIVE);
    const [btnStatus, setBtnStatus] = useState(channelInfo.active);
    const JWT_TOKEN = appInfo.appInfo.jwtToken;

    const inActiveChannel = () => {
        
        // s: Ajax ----------------------------------
        const cellId = appInfo.cellInfo.cellId;
        fetch(HTTP.SERVER_URL + `/api/cells/${cellId}/cellRequests/accounts/${requestInfo.accountId}`, {
            method: HTTP.DELETE,
            headers: {
                'Content-type': MediaType.JSON,
                'Accept': MediaType.HAL_JSON,
                'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
            },
        }).then(res => {
            if(res.ok){        
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
    };

    const onclickActive = () => {
        if(confirm(`Would you like to Active ${channelName}?`)){
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

                    const notiInfo = {
                        message: `Approved join request the cell '${appInfo.cellInfo.cellName}'`,
                        status: "APPROVE"
                    }
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
                    deleteRequestCell();
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
                console.error(error);
                if(!error === FETCH_STATE.FINE){
                    console.error(error);
                    alert("Client unexpect error.");
                }
            });
            // e: Ajax ----------------------------------
        }
    };

    const onclickInavtive = () => {
        const notiInfo = {
            message: `Rejected join request the cell '${appInfo.cellInfo.cellName}'`,
            status: "REJECT"
        }
        if(confirm(`Would you like to Inactive ${channelName}?`)){
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
                    deleteRequestCell();
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
                <td>{channelName}</td>
                {(status === ACTIVE) && 
                    <>
                        <td className="text-success">Active</td> 
                        <td>
                            <a onClick={onclickInavtive} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Reject">
                                <i className="mdi mdi-close"></i>
                            </a>
                        </td>
                    </>
                }
                {(status === INACTIVE) && 
                    <>
                        <td class="text-danger">Inactive</td> 
                        <td>
                            <a onClick={onclickActive} href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Accept">
                            <i className="mdi mdi-check"></i>
                            </a>
                        </td>
                    </>
                }
            </tr>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return { appInfo: state };
}

export default connect(mapStateToProps) (ManageChannelsRow);