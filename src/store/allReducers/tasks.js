import * as actionType from "../actions/allActionTypes";

// An sub-reducer for Tasks CRUD operations
const allTasks=(state=[], action)=> {
    switch(action.type) {
        case actionType.GET_ALL_TASKS:
            return action.payload;
        case actionType.DELETE_TASK:
            return state.filter(task => task.id!==action.payload);
        case actionType.CREATE_TASK:
            return [...state, action.payload];
        case actionType.EDIT_TASK:
            return state.map(task => { 
                return (
                    task.id===action.payload.id ? action.payload : task
                );
            });
        default: 
            return state;

    }
};

export default allTasks;