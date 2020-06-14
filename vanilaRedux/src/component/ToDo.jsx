import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const ToDo = ( {text, id, dDeleteToDo} ) => {

    const onclickDelete = () => {
        dDeleteToDo(id);
    };

    return (
        <>
            <li>
                {text} <button onClick={onclickDelete}>DELETE</button>
            </li>
        </>
    );
}

const mapDispathToProps = (dispatch, ownProps) => {
    return (
        {
            dDeleteToDo: (id) => dispatch(actionCreators.deleteToDo(id)),
            text: ownProps.text,
            id: ownProps.id            
        }
    );
}

export default connect(null, mapDispathToProps) (ToDo);