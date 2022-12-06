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
                <p>There are no Tasks !!!</p>
            </div>
        );
    }
    else {
        return (
            <div className="All-Tasks">
                {tasks.map((task) => {
                    let description = task.description;
                    return (
                        <div key={task.id} className="oneTaskBox">
                            <Link to={`/tasks/${task.id}`} className="oneTask">
                                {description}
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }
};


export default AllTasksView;