import React, { useState, useCallback, useRef, memo } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../component/ToDo";

const Home = ( {todo, addToDo} ) => {

    const [text, setText] = useState("");
    
    const onChange = e => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
        addToDo(text);
    }

    return (
        <>
            <h1>To DO</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>ADD</button>
            </form>
            <ul>
                {todo.map(x => 
                    <ToDo {...x} key={x.id} /> 
                )}
            </ul>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { todo: state };
}

const mapDispathToProps = (dispatch) => {
    return {
        addToDo: text => dispatch(actionCreators.addToDo(text))
    };
}

export default connect(mapStateToProps, mapDispathToProps) (Home);