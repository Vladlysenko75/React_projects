import {combineReducers, configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";
import userReducer from "./user.slice";
import postReducer from "./post.slice";
import commentSlice from "./comment.slice";

const rootReducer = combineReducers({carReducer, userReducer, postReducer, commentSlice})

const store = configureStore({
    reducer: rootReducer
})

export default store;