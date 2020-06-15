import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';
import { PAGE_ROUTE } from "./util/Const"

const switchMainPageRoute = createAction("SWITCHMAINPAGEROUTE");
const addJwtToken = createAction("ADDJWTTOKEN");
const addUserName = createAction("ADDUSERNAME");


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
            return { ...state, 
                clientInfo: {
                    ...state.clientInfo,
                    jwtToken: action.payload,
                },
            };
        },
        [addUserName]: (state, action) => {
            return { ...state, 
                clientInfo: {
                    ...state.clientInfo,
                    currentUserName: action.payload,
                },
            };
        },
    }
);

const store = configureStore({reducer});

export const actionCreators = {
    switchMainPageRoute,
    addJwtToken,
    addUserName,
}

export default store;