import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null,
}

export const fetchUsers = createAsyncThunk('userList/fetchUsers', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!res.ok) {
        throw new Error('Server error')
    }
    return res.json()
})

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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default userListSlice.reducer
export const {addUser, deleteUser} = userListSlice.actions
console.log(userListSlice)