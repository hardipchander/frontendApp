import { GET_EMPLOYEE } from "../actions/allActionTypes";

const initialState = {
    tasks: [],
};
  
// REDUCER;
const employee = (state=initialState, action) => {
    switch (action.type) {
      case GET_EMPLOYEE:
        return action.payload;
      default:
        return state;
    }
};
  
export default employee;
