import { combineReducers } from "redux";
import tasksReducer from "../Reducers/tasksReducer";
const rootReducer = combineReducers({ tasksReducer });
export default rootReducer;
