import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: []
    },
    reducers: {}
})

const userReducer = userSlice.reducer;

export default userReducer;