import React from 'react';
import Login from '../routes/Login'
import { connect } from 'react-redux';

import PAGE_ROUTE from "../util/Const"

const App = ( {page} ) => {

    if(page === PAGE_ROUTE.LOGIN){
        return (
            <>
                <Login />
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