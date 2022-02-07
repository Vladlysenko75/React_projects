import {createSlice} from "@reduxjs/toolkit";

const tasks = createSlice({
    name: 'Tasks',
     initialState: {
        tasks: []
     },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        }
    }
})

const taskReducer = tasks.reducer;

export default taskReducer