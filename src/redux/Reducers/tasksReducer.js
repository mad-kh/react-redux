import { v4 as uuidv4 } from "uuid";
import { ADD_TASK, EDIT_TASK, FILTER_TASK } from "../constants";
const initialState = {
  tasks: [
    { id: uuidv4(), description: "React", isDone: false },

    { id: uuidv4(), description: "Hooks", isDone: false },
    { id: uuidv4(), description: "Router", isDone: false },
    { id: uuidv4(), description: "Redux", isDone: false },
  ],
};

function tasksReducer(state = initialState, action) {
  //
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return {
        tasks: [
          ...state.tasks,
          { id: uuidv4(), description: payload.description, isDone: false },
        ],
      };
    case EDIT_TASK:
      return {
        tasks: state.tasks.map((tasks) =>
          tasks.id === payload.id
            ? { ...tasks, description: payload.description }
            : tasks
        ),
      };
    case FILTER_TASK:
      return {
        tasks: state.tasks.map((tasks) =>
          tasks.id === payload.id ? { ...tasks, isDone: !tasks.isDone } : tasks
        ),
      };

    default:
      return state;
  }
}
export default tasksReducer;
