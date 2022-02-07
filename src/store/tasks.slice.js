import {createSlice} from "@reduxjs/toolkit";

const tasks = createSlice({
    name: 'Tasks',
     initialState: {
        tasks: []
     },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({id: new Date().getTime(), name: action.payload.task, status: false})
        },
        changeStatus: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id)
            task.status = !task.status;
        },
        deleteTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            state.tasks.splice(index, 1)
        }
    }
})

const taskReducer = tasks.reducer;

export const {addTask, changeStatus, deleteTask} = tasks.actions;

export default taskReducer