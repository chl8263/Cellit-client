import React, { useEffect, useState } from "react";

import { PAGE_ROUTE, HTTP, MediaType} from "../../../../../util/Const";
import { connect } from "react-redux";

import RequestCellRow from "../requestCell/RequestCellRow";

const RequestCell = ({appInfo}) => {

    const [cellRequestList, setCellRequestList] = useState([]);

    useEffect(() => {
        getCellRequestList(); //get CellRequests with cell id
    }, []);

    const getCellRequestList = () => {
        console.log(1111);
        const JWT_TOKEN = appInfo.appInfo.jwtToken;
        //s: Ajax ----------------------------------
        fetch(HTTP.SERVER_URL + `/api/cells/${appInfo.cellInfo.cellId}/cellRequests`, {
            method: HTTP.GET,
            headers: {
                'Content-type': MediaType.JSON,
                'Accept': MediaType.HAL_JSON,
                'Authorization': HTTP.BASIC_TOKEN_PREFIX + JWT_TOKEN
            },
        }).then(res => {
            return res.json();
        }).then(res => {
            if("errors" in res){
                try{
                    errorCodeToAlertCreater(json);
                }catch(error){
                    throw error;
                }
            }else if("_embedded" in res){
                console.log(222);
                console.log(res._embedded.cellRequestEntityModelList);
                setCellRequestList(res._embedded.cellRequestEntityModelList);
            }
        }).catch(error => {
            console.error(error);
            alert("Client unexpect error.");
        });
        // e: Ajax ----------------------------------
    };

    return (
        <>
            <div className="card">
                
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {cellRequestList.map(x => {
                            return <RequestCellRow key={x.accountId} requestInfo={x} />
                        })}
                        {/* <tr>
                            <td>Making The New Suit</td>
                            <td className="text-success">Progress</td>
                            <td>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Update">
                                    <i className="mdi mdi-check"></i>
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Delete">
                                    <i className="mdi mdi-close"></i>
                                </a>     
                            </td>
                        </tr>
                        <tr>
                            <td>Luanch My New Site</td>
                            <td className="text-warning">Pending</td>
                            <td>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Update">
                                    <i className="mdi mdi-check"></i>
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Delete">
                                    <i className="mdi mdi-close"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Maruti Excellant Theme</td>
                            <td className="text-danger">Cancled</td>
                            <td>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Update">
                                    <i className="mdi mdi-check"></i>
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Delete">
                                    <i className="mdi mdi-close"></i>
                                </a>
                            </td>  
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { appInfo: state };
}

export default connect(mapStateToProps) (RequestCell);