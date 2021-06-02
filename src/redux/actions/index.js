import { ADD_TASK, EDIT_TASK, FILTER_TASK } from "../constants";
export const addTask = (payload) => {
  return { type: ADD_TASK, payload };
};
export const editTask = (payload) => {
  return { type: EDIT_TASK, payload };
};
export const toggle = (payload) => {
  return { type: FILTER_TASK, payload };
};
