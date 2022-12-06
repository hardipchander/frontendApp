import {Link} from "react-router-dom";

// Simple the single task view just displays information about the task don't need componet 
const SingleTaskView=(props) => {
    // Destructure the prop to get the task itself
    const {task} = props;

    // Infor about the Task itself
    return (
        <div>
          <h1>{task.description}</h1>
          <h2>{task.prioritylevel}</h2>
          <h3>{(task.completionstatus) ? (<h3>Finished</h3>) : (<h3>Not Done</h3>) }</h3>
          {(task.employee)? (<h3>{task.employee.firstname + "" + task.employee.lastname}</h3>): (<p>No employee has this task assigned.</p>)}
          <br/>
          <Link to={`/tasks`}>Back to all Tasks</Link>
        </div>
      ); 
};

export default SingleTaskView;