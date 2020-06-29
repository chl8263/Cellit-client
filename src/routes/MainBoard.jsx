import React, { useEffect, useState } from "react";
import $ from "jquery";
import { connect } from "react-redux";

import PreLoader from "../component/PreLoader";
import { PAGE_ROUTE, HTTP, MediaType} from "../util/Const";
import { actionCreators } from "../store";

import MainBoardTopbar from "../component/mainBoard/frame/MainBoardTopbar";
import CellsList from "../component/mainBoard/CellsList";
import CreateCellUnitModal from "../component/mainBoard/CreateCellUnitModal";


const MainBoard = ( {appInfo} ) => {

    const [cells, setCells] = useState([]);

    useEffect(() => {
        history.pushState('','', '/MainBoard');
        $(".preloader").fadeOut(); // Remove preloader.

        getCells(); //get Cells with current user
    }, []);

    const getCells = () => {
        const JWT_TOKEN = appInfo.appInfo.jwtToken;
        //s: Ajax ----------------------------------
        fetch(HTTP.SERVER_URL + `/api/account/${appInfo.userInfo.currentUserId}/cells`, {
            method: HTTP.GET,
            headers: {
                'Content-type': MediaType.JSON,
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
            if("_embedded" in res ){
                console.log(res._embedded.cellEntityModelList);
                setCells(res._embedded.cellEntityModelList);
            }else {console.log(2);}
        }).catch(error => {
            alert("Cannot create cell, Please try later.");
        });
        // e: Ajax ----------------------------------
    };

    
    return (
        <>
            <PreLoader />
            
            <MainBoardTopbar />

            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">My Cell Unit</h4>
                </div>
                
                {/* <div className="doScroll scroll-y"> */}
                <div className="doScroll scrollable"  style={{"height": "80vh"}}>
                    {cells.map( x => {
                        return <CellsList key={x.cellId} cellInfo={x} />
                    })}
                </div>
            </div>

            {/* <!-- Modal Add Category --> */}
            <CreateCellUnitModal getCells = {getCells}/>
        </> 
    );
};

const mapStateToProps = (state, ownProps) => {
    return { appInfo: state };
}

const mapDispathToProps = (dispatch) => {
    return {
        switchLogin: () => dispatch(actionCreators.switchMainPageRoute(PAGE_ROUTE.LOGIN)),
        initJwtToken: () => dispatch(actionCreators.addJwtToken("")),
        initUserInfo: () => dispatch(actionCreators.addUserInfo("")),
    };
}

export default connect(mapStateToProps, mapDispathToProps) (MainBoard);