import React, { useEffect, useRef, useState } from "react";

import { FETCH_STATE ,PAGE_ROUTE, HTTP, MediaType} from "../../../../util/Const";
import errorCodeToAlertCreater from "../../../../util/ErrorCodeToAlertCreater";
import { connect } from "react-redux";

const ChannelPostContentModal = ( { appInfo, channelData, getCahnnelPostListByPageNumber, channelPostId } ) => {

    const modalClose = document.getElementById("channelPostContentModalModalClose");

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
        if(confirm("Do you want to edit post as current content?")){
            const content = document.getElementsByClassName("ql-editor")[1].innerHTML;

            const JWT_TOKEN = appInfo.appInfo.jwtToken;
            const userId = appInfo.userInfo.currentUserId;
            const userName = appInfo.userInfo.currentUserName;
            const channelId = channelData.channelId;

            console.log(content);
            
            const channelPostInfo = {
                channelPostName: subject,
                channelPostContent: content,
                accountId: userId,
                accountName: userName,
            }

            //s: Ajax ----------------------------------
            fetch(HTTP.SERVER_URL + `/api/channels/${channelId}/channelPosts/${channelPostId}/channelContent`, {
                method: HTTP.PATCH,
                headers: {
                    'Content-type': MediaType.JSON,
                    'Accept': MediaType.HAL_JSON,
                    'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
                },
                body: JSON.stringify(channelPostInfo)
            }).then((res) => {
                if(!res.ok && res.status !== HTTP.STATUS_CREATED && res.status !== HTTP.STATUS_BAD_REQUEST){
                    throw res;
                }
                return res;
            }).then((res) => {
                if(res.ok){        
                    alert("Modify Post successfully");
                    modalClose.click();
                    getCahnnelPostListByPageNumber(0);
                    throw(FETCH_STATE.FINE);
                }else {
                    return res.json();
                }
            }).then((res) => {
                try{
                    errorCodeToAlertCreater(res);
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
            <div className="modal fade none-border" id="channelContent">
                <div className="modal-dialog" style={{"width": "1000px"}}>
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title"><strong>Channel Content</strong></h4>
                            
                            <button id="channelPostContentModalModalClose" type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
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

                        <div class="card-body">
                            <h6 className="control-label">Commnet</h6>
                            <div class="chat-box scrollable">
                                <ul class="chat-list">
                                    <li class="chat-item">
                                        <div class="chat-img"><img src="" alt="user"/></div>
                                        <div class="chat-content">
                                            <h6 class="font-medium">James Anderson</h6>
                                            <div class="box bg-light-info">Lorem Ipsum is simply dummy text of the printing &amp; type setting industry.</div>
                                        </div>
                                        <div class="chat-time">10:56 am</div>
                                    </li>
                                    <li class="chat-item">
                                        <div class="chat-img"><img src="" alt="user"/></div>
                                        <div class="chat-content">
                                            <h6 class="font-medium">Bianca Doe</h6>
                                            <div class="box bg-light-info">It’s Great opportunity to work.</div>
                                        </div>
                                        <div class="chat-time">10:57 am</div>
                                    </li>
                                    <li class="odd chat-item">
                                        <div class="chat-content">
                                            <div class="box bg-light-inverse">I would love to join the team.</div>
                                            <br/>
                                        </div>
                                    </li>
                                    <li class="odd chat-item">
                                        <div class="chat-content">
                                            <div class="box bg-light-inverse">Whats budget of the new project.</div>
                                            <br/>
                                        </div>
                                        <div class="chat-time">10:59 am</div>
                                    </li>
                                    <li class="chat-item">
                                        <div class="chat-img"><img src="" alt="user"/></div>
                                        <div class="chat-content">
                                            <h6 class="font-medium">Angelina Rhodes</h6>
                                            <div class="box bg-light-info">Well we have good budget for the project</div>
                                        </div>
                                        <div class="chat-time">11:00 am</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <div class="row">
                                <div class="col-9">
                                    <div class="input-field m-t-0 m-b-0">
                                        <textarea id="textarea1" placeholder="Type and enter" class="form-control border-0"></textarea>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <a class="btn-circle btn-lg btn-cyan float-right text-white" href="javascript:void(0)"><i class="fas fa-paper-plane"></i></a>
                                </div>
                            </div>
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