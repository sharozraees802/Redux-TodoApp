import { combineReducers } from "redux";

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      state = state.concat(action.payload);
      break;
    case "DELETETASK":
      state = state.slice();
      state.splice(action.payload, 1);
      break;
  }
  return state;
};
