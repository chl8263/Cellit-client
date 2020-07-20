import React from "react";

import SettingContainer from "../cellUnit/setting/SettingContainer"

const ContentMatcher = (props) => {

    if(props.match.params.name === "dashboard"){
        return (<div>dash board</div>);
    }else if(props.match.params.name === "channel"){
        return (<div>channel</div>);
    }else if(props.match.params.name === "setting"){
        return (<SettingContainer />);
    }
    return (
        <>
        </>
    );
}

export default ContentMatcher;