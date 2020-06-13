import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const Detail = ( {toDos} ) => {

    const id = useParams();
    console.log(id);

    return (
        <>
            <h1>Detail</h1>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { toDos: state };
}

export default connect(mapStateToProps) (Detail);