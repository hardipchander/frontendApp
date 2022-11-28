// Import all the action types from the allActionTypes file
import * as actionType from './allActionTypes.js';

// Action Creator for each Action Type Simple
export const createEmployee=(employee) => {
    return {
        type: actionType.CREATE_EMPLOYEE,
        payload: employee
    };
};

export const createTask=(task)=> {
    return {
        type: actionType.CREATE_TASK,
        payload: task
    };
};

export const getAllEmployees=(employees)=> {
    return {
        type: actionType.GET_ALL_EMPLOYEES,
        payload: employees
    };
};

export const getAllTasks=(tasks) => {
    return {
        type: actionType.GET_ALL_TASKS,
        payload: tasks
    };
};

export const getEmployee=(employee)=> {
    return {
        type: actionType.GET_EMPLOYEE,
        payload: employee
    };
};

export const getTask=(task)=> {
    return {
        type: actionType.GET_TASK,
        payload: task
    };
};

export const editEmployee=(employee)=> {
    return {
        type: actionType.EDIT_EMPLOYEE,
        payload: employee
    };
};

export const editTask=(task)=> {
    return {
        type: actionType.EDIT_TASK,
        payload: task
    };
};

export const deleteEmployee=(employeeId)=>{
    return {
        type: actionType.DELETE_EMPLOYEE,
        payload: employeeId
    };
};

export const deleteTask=(taskId)=> {
    return {
        type: actionType.DELETE_TASK,
        payload: taskId
    };
};
