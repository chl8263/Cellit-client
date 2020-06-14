//import {createStore} from "redux";
import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELTE");

const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({text: action.payload, id: Date.now()});
    },
    [deleteToDo]: (state, action) => {
        return state.filter(todos => todos.id !== action.payload);
    }
});

const store = configureStore({reducer});

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;

// import {createStore} from "redux";

// const ADD = "ADD";
// const DELTE = "DELETE";

// const addToDo = text => {
//     return {
//         type: ADD,
//         text: text
//     }
// };

// const deleteToDo = id => {
//     return {
//         type: DELTE,
//         id: id
//     }
// };

// const reducer = (state = [], action) => {
//     switch(action.type){
//         case ADD:
//             return [...state, {text: action.text, id: Date.now()}];
//         case DELTE:
//             return state.filter(todos => todos.id !== action.id);
//         default:
//             return state;
//     }
// }

// const store = createStore(reducer);

// export const actionCreators = {
//     addToDo,
//     deleteToDo
// }

// export default store;