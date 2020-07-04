import React from "react";

import CellsList from "../CellsList";

const CellsListContainer = ( { cellList } ) => {

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">My Cell Unit</h4>
                </div>
                
                {/* <div className="doScroll scroll-y"> */}
                <div className="doScroll scrollable"  style={{"height": "80vh"}}>
                    {cellList.map( x => {
                        return <CellsList key={x.cellId} cellInfo={x} />
                    })}
                </div>
            </div>
        </>
    );
};

export default CellsListContainer;