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
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Quill Editor</h4>
                                        {/* <!-- Create the editor container --> */}
                                        <div id="editor" style={{"height": "300px"}}>
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
            </div>
        </>
    );
}

export default ChannelPostModal;