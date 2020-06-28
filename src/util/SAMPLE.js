// ajax for get
fetch(HTTP.SERVER_URL + `/api/cells/${cellId}/channels`, {
    method: HTTP.GET,
    headers: {
        'Accept': MediaType.HAL_JSON,
        'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
    },
}).then((res) => {
    if(!res.ok){
        throw res;
    }
    return res;
}).then((res) => {
    return res.json();
}).then((res) => {
    console.log(res);
}).catch(error => {
    console.error(error);
    alert("Cannot load channel list");
});

// ajax for post 
fetch(HTTP.SERVER_URL + "/api/cells", {
    method: HTTP.POST,
    headers: {
        'Content-type': MediaType.JSON,
        'Accept': MediaType.HAL_JSON,
        'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
    },
    body: JSON.stringify(cellInfo)
}).then((res) => {
    if(!res.ok && res.status !== HTTP.STATUS_CREATED && res.status !== HTTP.STATUS_BAD_REQUEST){
        throw res;
    }
    return res;
}).then((res) => {
    if(res.status === HTTP.STATUS_CREATED){
        alert("Create cell successfully");
        modalClose.click();
        getCells();
    }else if(res.status === HTTP.STATUS_BAD_REQUEST){
        return res.json();
    }
    else throw res;
}).then((res) => {
    try{
        errorCodeToAlertCreater(res);
    }catch(error){
        console.error(error);
    }
}).catch(error => {
    console.error(error);
    alert("Cannot create cell, Please try later.");
});