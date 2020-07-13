import React from "react";

const RequestCell = () => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title m-b-0">Tasks</h5>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RequestCell;