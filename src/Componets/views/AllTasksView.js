import {Link} from "react-router-dom";
import '../../Styles/AllTasks.css';

// All Tasks View , need to add a Link for the new container for adding a Task 
const AllTasksView=(props)=> {
    // Destructure the Props 
    let  {tasks, deleteTask}=props;

    // Check if there are zero tasks first
    if(tasks.length===0) {
        return (
            <div>
                <p className="NoTaskParagraph">There are no Tasks !!!</p>
            </div>
        );
    }
    else {
        return (
           <ul className="Tasks-List">
                {tasks.map((task) => {
                    let description = task.description;
                    return (
                        <li key={task.id}>
                            <Link to={`/tasks/${task.id}`}><span className="description">{description}</span></Link>
                        </li>
                    );
                })}
           </ul>
        );
    }
};


export default AllTasksView;