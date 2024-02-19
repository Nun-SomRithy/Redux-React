import {createSlice} from "@reduxjs/toolkit";
const employeeSlice = createSlice({
    name: "employees",
    initialState:[],
    reducers:{
        //this in a reducer action function
        addEmployee : (state,action) =>{
           state.push({
               id:action.payload.id,
               name:action.payload.name
           })
        }
    }
})


export const {addEmployee} = employeeSlice.actions;

export default employeeSlice.reducer;