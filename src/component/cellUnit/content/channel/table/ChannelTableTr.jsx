import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const ChannelTableTr = ( { appInfo, channelPostInfo, updateChannelPostId } ) => {

    const [viewCount, setViewCount] = useState(channelPostInfo.viewCount);

    const onClickTr = () => {
        updateChannelPostId(channelPostInfo.channelPostId);
        
        if(appInfo.userInfo.currentUserId !== channelPostInfo.accountId){
            setViewCount(viewCount + 1);    
        }
    };

    return (
        <>
            <tr onClick={onClickTr} data-toggle="modal" data-target="#channelContent" role="row" className="odd">
                <td className="sorting_1">{channelPostInfo.channelPostId}</td>
                <td>{channelPostInfo.channelPostName}</td>
                <td>{channelPostInfo.accountName}</td>
                <td>{channelPostInfo.createDate}</td>
                <td>{viewCount}</td>
            </tr>
        </>
    );
};


const mapStateToProps = (state, ownProps) => {
    return { appInfo: state };
}

export default connect(mapStateToProps) (ChannelTableTr);