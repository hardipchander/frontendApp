import { GET_TASK } from "../actions/allActionTypes";

const initialState = {
    employee: {},
};
  
// REDUCER;
const task = (state=initialState, action) => {
    switch (action.type) {
      case  GET_TASK:
        return action.payload;
      default:
        return state;
    }
};
  
export default task;