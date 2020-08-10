import React, { useEffect, useState } from "react";

const ChannelTableTr = ( { channelPostInfo, updateChannelPostId } ) => {

    const [viewCount, setViewCount] = useState(channelPostInfo.viewCount);

    const onClickTr = () => {
        updateChannelPostId(channelPostInfo.channelPostId);
        setViewCount(viewCount + 1);
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

export default ChannelTableTr;