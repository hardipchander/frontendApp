import * as actionType from "../actions/allActionTypes";

// An sub-reducer for Employees CRUD Operations
const allEmployees= (state=[], action)=> {
    switch(action.type) {
        case actionType.GET_ALL_EMPLOYEES:
            return action.payload;
        case actionType.DELETE_EMPLOYEE:
            return state.filter(employee => employee.id!==action.payload);
        case actionType.CREATE_EMPLOYEE:
            return [...state, action.payload];
        case actionType.EDIT_EMPLOYEE:
            return state.map(employee => { 
                return (
                    employee.id===action.payload.id ? action.payload : employee
                );
            });
        default: 
            return state;
    }
};

export default allEmployees;