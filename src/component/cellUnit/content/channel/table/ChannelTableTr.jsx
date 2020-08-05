import React from "react";

const ChannelTableTr = ( { channelPostInfo, updateChannelPostId } ) => {


    const onClickTr = () => {
        updateChannelPostId(channelPostInfo.channelPostId);
    };

    return (
        <>
            <tr onClick={onClickTr} data-toggle="modal" data-target="#channelContent" role="row" className="odd">
                <td className="sorting_1">{channelPostInfo.channelPostId}</td>
                <td>{channelPostInfo.channelPostName}</td>
                <td>{channelPostInfo.accountName}</td>
                <td>{channelPostInfo.createDate}</td>
                <td>{channelPostInfo.viewCount}</td>
            </tr>
        </>
    );
};

export default ChannelTableTr;