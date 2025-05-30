import {configureStore} from "@reduxjs/toolkit";
import userListReducer from './features/usersList/userListSlice.js'


export const store = configureStore({
    reducer: {
        userList: userListReducer,
    }
})