import React, { useEffect } from "react";

const ChannelPostModal = () => {

    useEffect(() => {
        var quill = new Quill('#editor', {
            theme: 'snow'
        });
    }, []);

    return (
        <>
            <div className="modal fade none-border" id="createChannelPost">
                <div className="modal-dialog" style={{"width": "1000px"}}>
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title"><strong>Create new post</strong></h4>
                            <button id="modalClose" type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body" >

                            <div className="modal-content" >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">
                                                {/* <!-- Create the editor container --> */}
                                                <div id="editor" style={{"height": "60vh"}}>
                                                    <p>Hello World!</p>
                                                    <p>Some initial <strong>bold</strong> text</p>
                                                    <p>
                                                        <br/>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChannelPostModal;