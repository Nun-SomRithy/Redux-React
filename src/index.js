import axios from "axios";
import store from "./store/configurStore";
import {getTasks} from "./store/task";

const fetchingTasks = async () => {
   try { //call api
       const response = await axios.get("http://localhost:5000/api/tasks");
       console.log("data:", response)
       store.dispatch(getTasks({
           tasks:response.data
       }))
   }catch (error){
       store.dispatch({type:"SHOW_ERROR",payload:{error:error.message}})
   }
}

fetchingTasks();