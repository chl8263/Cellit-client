import React from "react";

import SideSettingContainer from "./content/setting/SettingContainer";

const ContentMatcher = (props) => {

    if(props.match.params.name === "dashboard"){
        return (<div>dash board</div>);
    }else if(props.match.params.name === "channel"){
        return (<div>channel</div>);
    }else if(props.match.params.name === "setting"){
        return (<SideSettingContainer />);
    }
    return (
        <>
        </>
    );
}

export default ContentMatcher;