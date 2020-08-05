import React, { useEffect, useRef, useState } from "react";

import { FETCH_STATE ,PAGE_ROUTE, HTTP, MediaType} from "../../../../util/Const";
import errorCodeToAlertCreater from "../../../../util/ErrorCodeToAlertCreater";
import { connect } from "react-redux";

const ChannelPostContentModal = ( { appInfo, channelData, getCahnnelPostList, channelPostId } ) => {

    const modalClose = document.getElementById("modalClose");

    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [writer, setWriter] = useState("");
    const [editMode,setEditMode] = useState(false);
    const [editable,setEditable] = useState(false);

    const JWT_TOKEN = appInfo.appInfo.jwtToken;
    const channelId = channelData.channelId;
    const currentuser = appInfo.userInfo.currentUserId;

    useEffect(() => {
        // var quill = new Quill('#channelPostContentModelEditor', {
        //     theme: 'snow'
        // });
    }, []);

    useEffect(() => {
        var quill = new Quill('#channelPostContentModelEditor', {
            theme: 'snow'
        });
    }, [editMode]);

    useEffect(() => {
        init();
        if(channelPostId != 0){
            //s: Ajax ----------------------------------
            fetch(HTTP.SERVER_URL + `/api/channels/${channelId}/channelPosts/${channelPostId}/channelContent`, {
                method: HTTP.GET,
                headers: {
                    'Content-type': MediaType.JSON,
                    'Accept': MediaType.HAL_JSON,
                    'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
                },
            }).then(res => {
                return res.json();
            }).then(res => {
                if("errors" in res){
                    try{
                        errorCodeToAlertCreater(json);
                    }catch(error){
                        throw error;
                    }
                }else {
                    setSubject(res.channelPostName);
                    setContent(res.channelPostContent);
                    setWriter(res.accountName);
                    if(currentuser == res.accountId){
                        setEditable(true);
                    }
                    console.log(res);
                }
            }).catch(error => {
                console.error(error);
                alert("Client unexpect error.");
            });
        }
        // e: Ajax ----------------------------------
    }, [channelPostId]);

    const init = () => {
        setSubject("");
        setContent("");
        setWriter("");
        setEditMode(false);
        setEditable(false);
    };

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
        
    };

    const onClickEdit = (e) => {
        e.preventDefault();
        setEditMode(true);
    };

    const onClickBack = (e) => {
        e.preventDefault();
        setEditMode(false);
    };

    const onClickUpdate = () => {
        const content = document.getElementsByClassName("ql-editor")[1].innerHTML;

        const JWT_TOKEN = appInfo.appInfo.jwtToken;
        const userId = appInfo.userInfo.currentUserId;
        const userName = appInfo.userInfo.currentUserName;
        const channelId = channelData.channelId;

        console.log(content);
        
        // const channelPostInfo = {
        //     channelPostName: subject,
        //     channelPostContent: content,
        //     accountId: userId,
        //     accountName: userName,
        // }

        // //s: Ajax ----------------------------------
        // fetch(HTTP.SERVER_URL + `/api/channels/${channelId}/channelPosts`, {
        //     method: HTTP.POST,
        //     headers: {
        //         'Content-type': MediaType.JSON,
        //         'Accept': MediaType.HAL_JSON,
        //         'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
        //     },
        //     body: JSON.stringify(channelPostInfo)
        // }).then((res) => {
        //     if(!res.ok && res.status !== HTTP.STATUS_CREATED && res.status !== HTTP.STATUS_BAD_REQUEST){
        //         throw res;
        //     }
        //     return res;
        // }).then((res) => {
        //     if(res.ok){        
        //         alert("Create post successfully");
        //         modalClose.click();
        //         getCahnnelPostList();
        //         throw(FETCH_STATE.FINE);
        //     }else {
        //         return res.json();
        //     }
        // }).then((res) => {
        //     try{
        //         errorCodeToAlertCreater(res);
        //     }catch(error){
        //         throw error;
        //     }
        // }).catch(error => {
        //     if(!error === FETCH_STATE.FINE){
        //         console.error(error);
        //         alert("Client unexpect error.");
        //     }
        // });
        // e: Ajax ----------------------------------
    };

    return (
        <>
            <div className="modal fade none-border" id="channelContent">
                <div className="modal-dialog" style={{"width": "1000px"}}>
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title"><strong>Channel Content</strong></h4>
                            
                            <button id="modalClose" type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>

                        <div className="modal-body" >
                            {(editMode === false && 
                                <div>
                                    <div className="form-group row">
                                        <div className="col-md-2">
                                            <h5 className="control-label">Subject :</h5>
                                        </div>
                                        <div className="col-md-2">
                                            <p>{subject}</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h5 className="control-label" style={{"float":"right"}}>Writer :</h5>
                                        </div>
                                        <div className="col-md-2">
                                            <p>{writer}</p>
                                        </div>
                                        {(editable === true && 
                                            <div className="col-md-2">
                                                <a onClick={onClickEdit} href="#!"><i className="mdi mdi-table-edit font-24" style={{"float":"right"}}></i></a>
                                            </div>
                                        )}
                                    </div>
                                    <div className="modal-content" >
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div  dangerouslySetInnerHTML={{ __html: content }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {(editMode === true && 
                                <div>
                                    <div className="form-group row">
                                        <div className="col-md-2">
                                            <h5 className="control-label">Subject</h5>
                                        </div>
                                        <div className="col-md-6">
                                            <input id="cellName" name="cellName" onChange={onChangeSubject} value={subject} className="form-control form-white" placeholder="Enter subject" type="text"  />
                                        </div>
                                        {(editMode === true && 
                                            <div className="col-md-2">
                                                <a onClick={onClickBack} href="#!"><i className="mdi mdi-keyboard-backspace font-24" style={{"float":"right"}}></i></a>
                                            </div>
                                        )}
                                    </div>
                                    <div className="modal-content" >
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div id="channelPostContentModelEditor" style={{"height": "60vh"}} dangerouslySetInnerHTML={{ __html: content }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>                        
                        <div className="modal-footer">
                            {(editMode === true &&
                                <button type="button" onClick={onClickUpdate} className="btn btn-success waves-effect">Update</button>
                            )}
                            <button type="button" className="btn btn-danger waves-effect" data-dismiss="modal">Close</button>
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

export default connect(mapStateToProps) (ChannelPostContentModal);