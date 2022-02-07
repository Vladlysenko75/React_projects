import {combineReducers, configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";
import userReducer from "./user.slice";

const rootReducer = combineReducers({carReducer, userReducer})

const store = configureStore({
    reducer: rootReducer
})

export default store