import React from "react";

const ContentMatcher = (props) => {

    console.log(props);

    if(props.match.params.name === "dashboard"){
        console.log(1);
        return (<div>dash board</div>);
    }else if(props.match.params.name === "channel"){
        console.log(1);
        return (<div>channel</div>);
    }else if(props.match.params.name === "setting"){
        console.log(1);
        return (<div>setting</div>);
    }
    return (
        <>
        </>
    );
}

export default ContentMatcher;