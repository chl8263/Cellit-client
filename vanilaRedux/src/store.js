import {createStore} from "redux";

const ADD = "ADD";
const DELTE = "DELETE";

const addToDo = text => {
    return {
        type: ADD,
        text: text
    }
};

const deleteToDo = id => {
    return {
        type: DELTE,
        id: id
    }
};

const reducer = (state = [], action) => {
    switch(action.type){
        case ADD:
            return [...state, {text: action.text, id: Date.now()}];
        case DELTE:
            return state.filter(todos => todos.id !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;