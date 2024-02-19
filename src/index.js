import store from "./store/configurStore";
import {addTask, completedTask, removeTask} from "./store/task";
import {addEmployee} from "./store/EmployeeSlice";

const unsubScribe= store.subscribe(() =>{
    console.log("Updated",store.getState())
});

store.dispatch(addEmployee({id:1,name:"Ri-thy"}))
console.log(store.getState())
