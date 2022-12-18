// Need all the action creators because they will be called inside the thunks and axios for API
import * as actionCreators from "./actions/allActionCreators.js";
import axios from 'axios';

// I don't have my API set up yet need to wait on that 
let linkToAPI="http://localhost:5000/api";

// All thunks (Async Action Creator returns an function) and takes in a dispatch function as an parameter, each thunk calls an action creator

// TASKS THUNKS -----------------------------------------------------------------------------------------------------------------
// AlltheTasks thunk 
export const fetchAllTasksThunk = () => async (dispatch) => {
    try {
      let response = await axios.get(`${linkToAPI}/tasks`);
      dispatch(actionCreators.getAllTasks(response.data));
    } 
    catch(error) {
      console.error(error);
    }
};

// Get Single Task Thunk
export const fetchSingleTaskThunk = id => async dispatch => {
    try {
      let response = await axios.get(`${linkToAPI}/tasks/${id}`);
      dispatch(actionCreators.getTask(response.data));
    } 
    catch(error) {
      console.error(error);
    }
};

//Edit Task Thunk
export const editTaskThunk = task => async dispatch => {
    try {
      let response = await axios.put(`${linkToAPI}/tasks/${task.id}`, task);
      dispatch(actionCreators.editTask(response.data));
    } 
    catch(error) {
      console.error(error);
    }
};

// Adding the task thunk
export const addTaskThunk = (task) => async (dispatch) => {
    try {
      let response = await axios.post(`${linkToAPI}/tasks`, task);
      dispatch(actionCreators.createTask(response.data));
      return response.data;
    } 
    catch(error) {
      console.error(error);
    }
};

// Deleting the task thunk
export const deleteTaskThunk = taskId => async dispatch => {
    try {
      await axios.delete(`${linkToAPI}/tasks/${taskId}`);
      dispatch(actionCreators.deleteTask(taskId));
    } 
    catch(error) {
      console.error(error);
    }
};

// EMPLOYEE THUNKS ------------------------------------------------------------------------------------------------------------------------
// All the Employees thunk 
export const fetchAllEmployeesThunk = () => async (dispatch) => {
    try {
      let response = await axios.get(`${linkToAPI}/employees`);
      dispatch(actionCreators.getAllEmployees(response.data));
    } 
    catch(error) {
      console.error(error);
    }
};

// Get Single Employee Thunk
export const fetchSingleEmployeeThunk = id => async dispatch => {
    try {
      let response = await axios.get(`${linkToAPI}/employees/${id}`);
      dispatch(actionCreators.getEmployee(response.data));
    } 
    catch(error) {
      console.error(error);
    }
};

//Edit Employee Thunk
export const editEmployeeThunk = employee => async dispatch => {
    try {
      let response = await axios.put(`${linkToAPI}/employees/${employee.id}`, employee);
      dispatch(actionCreators.editEmployee(response.data));
    } 
    catch(error) {
      console.error(error);
    }
};

// Adding the Employee thunk
export const addEmployeeThunk = (employee) => async (dispatch) => {
    try {
      let response = await axios.post(`${linkToAPI}/employees`, employee);
      dispatch(actionCreators.createEmployee(response.data));
      return response.data;
    } 
    catch(error) {
      console.error(error);
    }
};

// Deleting the Employee thunk
export const deleteEmployeeThunk = employeeId => async dispatch => {
    try {
      await axios.delete(`${linkToAPI}/employees/${employeeId}`);
      dispatch(actionCreators.deleteEmployee(employeeId));
    } 
    catch(error) {
      console.error(error);
    }
};