import EmpReducer from "./EmployeeSlice";
import TaskReducer from "./task";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        tasks: TaskReducer,
        employees: EmpReducer,
    }
});
export default store;