import EmpReducer from "./EmployeeSlice";
import TaskReducer from "./task";
import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import error from "./middleware/error";


const store = configureStore({
    reducer: {
        tasks: TaskReducer,
        employees: EmpReducer,
    },
    middleware:(getDefaultMiddleware) => [...getDefaultMiddleware(),logger,error]
});
export default store;