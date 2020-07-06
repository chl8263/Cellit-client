import React from "react";

const SearchCellUnitList = ( { cellInfo, isAssign } ) => {
    return (
        <>
            {/* <div>{cellInfo.cellName}</div> */}

            {/* <!-- CellList --> */}
            <div className="d-flex flex-row comment-row m-t-0">
                <div className="p-2"><img src="./public/assets/images/users/1.jpg" alt="user" width="50" className="rounded-circle"/></div>
                <div className="comment-text w-100">
                    <h6 className="font-medium">{cellInfo.cellName}</h6>
                    <span className="m-b-15 d-block">{cellInfo.cellDescription} </span>
                    <div className="comment-footer">
                        <span className="text-muted float-right">{cellInfo.createDate}</span>
                        {!isAssign && <button type="button" className="btn btn-success btn-sm">Request to join</button>}
                        {isAssign && <span className="text-muted float-left">Already joined this Cell Unit</span>}
                    </div>
                </div>
            </div>

            <hr/>
        </>
    );
};

export default SearchCellUnitList;
