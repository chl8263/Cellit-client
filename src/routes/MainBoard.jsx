import React, { useEffect, useState } from "react";
import $ from "jquery";
import { connect } from "react-redux";

import PreLoader from "../component/PreLoader";
import { PAGE_ROUTE, HTTP, MediaType} from "../util/Const";
import { actionCreators } from "../store";

import MainBoardTopbar from "../component/mainBoard/frame/MainBoardTopbar";
import CellsListContainer from "../component/mainBoard/frame/CellsListContainer";
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

            <CellsListContainer cells={cells}/>

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