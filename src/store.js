import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';
import PAGE_ROUTE from "./util/Const"

const switchMainPageRoute = createAction("SWITCHMAINPAGEROUTE");
const addJwtToken = createAction("ADDJWTTOKEN");

const reducer = createReducer(
    {
        mainPageRoute: PAGE_ROUTE.LOGIN,
        clientInfo: {
            jwtToken: "",
            currentUserName: ""
        },
    },
    {
        [switchMainPageRoute]: (state, action) => {
            return { ...state, mainPageRoute: action.payload };
        },
        [addJwtToken]: (state, action) => {
            return state.clientInfo.jwtToken = action.payload;
        },
    }
);

const store = configureStore({reducer});

export const actionCreators = {
    switchMainPageRoute,
    addJwtToken,
}

export default store;