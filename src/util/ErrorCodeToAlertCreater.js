const errorCodeToAlertCreater = (code) => {
    code.forEach( x => {
        const alertString = `Error Code : ${x.code} \n Message : ${x.defaultMessage}`;
        
        alert(alertString);
    });
}

export default errorCodeToAlertCreater;