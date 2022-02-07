import {configureStore} from "@reduxjs/toolkit";

import taskReducer from "./tasks.slice";

const store = configureStore({
    reducer: taskReducer
})

export default store