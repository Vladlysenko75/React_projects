import {createSlice} from "@reduxjs/toolkit";

const tasks = createSlice({
    name: 'Tasks',
     initialState: {
        tasks: []
     },
    reducers: {

    }
})

const taskReducer = tasks.reducer;

export default taskReducer