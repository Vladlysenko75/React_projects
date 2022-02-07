import {configureStore} from "@reduxjs/toolkit";

import taskReducer from "./tasks.slice";

const store = configureStore({
    reducer: {
        taskList: taskReducer
    }
})

export default store