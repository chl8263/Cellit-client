import React from "react";

const ChannelPostContentComment = () => {
    return (
        <>
            <li className="chat-item">
                <div className="chat-img"><img src="" alt="user"/></div>
                <div className="chat-content">
                    <h6 className="font-medium">James Anderson</h6>
                    <div className="box bg-light-info">Lorem Ipsum is simply dummy text of the printing &amp; type setting industry.</div>
                </div>
                <div className="chat-time">10:56 am</div>
            </li>
            <li className="chat-item">
                <div className="chat-img"><img src="" alt="user"/></div>
                <div className="chat-content">
                    <h6 className="font-medium">Bianca Doe</h6>
                    <div className="box bg-light-info">It’s Great opportunity to work.</div>
                </div>
                <div className="chat-time">10:57 am</div>
            </li>
            <li className="odd chat-item">
                <div className="chat-content">
                    <div className="box bg-light-inverse">I would love to join the team.</div>
                    <br/>
                </div>
            </li>
            <li className="odd chat-item">
                <div className="chat-content">
                    <div className="box bg-light-inverse">Whats budget of the new project.</div>
                    <br/>
                </div>
                <div className="chat-time">10:59 am</div>
            </li>
            <li className="chat-item">
                <div className="chat-img"><img src="" alt="user"/></div>
                <div className="chat-content">
                    <h6 className="font-medium">Angelina Rhodes</h6>
                    <div className="box bg-light-info">Well we have good budget for the project</div>
                </div>
                <div className="chat-time">11:00 am</div>
            </li>
        </>
    );
}

export default ChannelPostContentComment;