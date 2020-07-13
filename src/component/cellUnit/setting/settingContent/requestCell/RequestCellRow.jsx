import React, { useState } from "react";

const RequestCellRow = ( {requestInfo} ) => {

    const [accountName, setAccountName] = useState(requestInfo.accountName);

    return (
        <>
            <tr>
                <td>{accountName}</td>
                <td className="text-warning">Pending</td>
                <td>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Accept">
                        <i className="mdi mdi-check"></i>
                    </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Reject">
                        <i className="mdi mdi-close"></i>
                    </a>
                </td>
            </tr>
        </>
    );
}

export default RequestCellRow;