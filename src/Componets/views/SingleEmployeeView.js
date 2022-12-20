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
        <div>
            <div className="Single-Employee">
                <p className="textEmployee">Full Name: <span className="employee-text">{fullName}</span></p>
                <p className="textEmployee">Department: <span className="employee-text">{department}</span></p> 
                <Link to={`/editemployee/${employee.id}`} className="edit-Button"><p className="edit-Employee-Text">Edit Employee</p></Link>
            </div>
            <br/>
            <div>
                <ul className="allTasksForEmployee">
                    <h3 className="All-Tasks-For-Employee">All the Tasks For {fullName}</h3>
                    {assignedTasks.length>0? assignedTasks.map((task) => {
                        let description = task.description;
                        return (
                            <li key={task.id}>
                                <Link to={`/tasks/${task.id}`}><span className="employee-description">{description}</span></Link>
                            </li>
                        );
                    }) : <p style={{fontWeight: "bold"}}>{fullName} has no tasks</p>}
                </ul>
            </div>
        </div>
       
    );
    
    
};

export default SingleEmployeeView;