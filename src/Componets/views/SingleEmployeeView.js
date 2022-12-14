import { render } from "@testing-library/react";
import {Link} from "react-router-dom";
import '../../Styles/SingleEmployee.css';

const SingleEmployeeView=(props) => {
    // Destructure the props for the employee and thunks to get all tasks and the edit a task as well
    const {employee, allTasks} = props;

    // Getting Infor about employee
    let fullName=employee.firstname+" "+employee.lastname;
    let department=employee.department;
    let assignedTasks = allTasks.filter(task => task.employeeId===employee.id);

    // Display Infor about the Employee itself and its tasks
    return (
        <div className="Single-Employee">
            <p>Name: {fullName}</p>
            <p>Department: {department}</p>


        </div>
    );
    
    
};

export default SingleEmployeeView;