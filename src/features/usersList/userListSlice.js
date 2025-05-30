import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null,
}

const userListSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {
        addUser(state, action) {
            state.users.push(action.payload)
        },
        deleteUser(state, action) {
            state.users = state.users.filter((user) => user.id !== action.payload)
        }
    }
})

export default userListSlice.reducer
export const {addUser, deleteUser} = userListSlice.actions
console.log(userListSlice)