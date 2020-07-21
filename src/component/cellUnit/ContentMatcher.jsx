import React from "react";

import Channel from "./content/channel/Channel";
import SettingContainer from "./content/setting/SettingContainer";

const ContentMatcher = (props) => {

    if(props.match.params.name === "dashboard"){
        return (<div>dash board</div>);
    }else if(props.match.params.name === "channel"){
        return (<Channel />);
    }else if(props.match.params.name === "setting"){
        return (<SettingContainer />);
    }
    return (
        <>
        </>
    );
}

export default ContentMatcher;