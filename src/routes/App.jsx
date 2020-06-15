import React from "react";
import { connect } from "react-redux";

import Login from "../routes/Login";
import SignUp from "../routes/SignUp";
import { PAGE_ROUTE } from "../util/Const";

const App = ( {page} ) => {

    if(page === PAGE_ROUTE.LOGIN){
        return (
            <>
                <Login />
            </>
        )
    }else if(page === PAGE_ROUTE.SIGNUP){
        return (
            <>
                <SignUp />
            </>
        )
    }else {
        return(
            <div>nothing</div>
        );
    }
};

const mapStateToProps = (state) => {
    return {page: state.mainPageRoute};
};

export default connect(mapStateToProps) (App);