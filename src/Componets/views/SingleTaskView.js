import {Link} from "react-router-dom";

// Simple the single task view just displays information about the task don't need componet 
const SingleTaskView=(props) => {
    // Destructure the prop to get the task itself
    const {task} = props;

    // Employee Full Name
    let fullName=task.employee.firstname + " " + task.employee.lastname;

    // Infor about the Task itself
    return (
        <div className="single-Task-Box">
          <p className="Description">Description: {task.description}</p>
          <p className="Prioritylevel">Prioritylevel: {task.prioritylevel}</p>
          <p className="completionstatus">{(task.completionstatus) ? (<p>Completion Status: Finished</p>) : (<p>Completion Status: Not Done</p>) }</p>
          {(task.employee)? (<p className="employee-text"> The employee is <Link to={`/employees/${task.employee.id}`}><span className="fullName">{fullName}</span></Link></p>): (<p className="employee-text">Unassigned.</p>)}
          <Link to={`/edittask/${task.id}`} className="editButton">Edit the Task </Link>
        </div>
    ); 
};

export default SingleTaskView;