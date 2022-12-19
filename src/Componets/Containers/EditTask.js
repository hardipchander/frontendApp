import React from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {Navigate} from 'react-router-dom';  
import '../../Styles/EditTask.css';

import {fetchSingleTaskThunk, editTaskThunk, fetchAllEmployeesThunk} from '../../store/thunks';

// Newer Version of React Router Dom
const withRouter = WrappedComponent => props => {
    const params = useParams();
  
    return (
      <WrappedComponent
        {...props}
        params={params}
      />
    );
};

// Edit Task Container that has a form
class EditTask extends React.Component {
    constructor(props) {
        super(props);
        // Store form infor in state, have controlled input from state , JUST REMEMBER employeeId property stores a string  !!!!!!!!!!!!!!
        this.state={
            description: "", 
            prioritylevel: "",
            completionstatus: false,
            employeeId: null, 
            redirect: false, 
            redirectId: null,
            inputError: ""
        };
    }

    // Set state when componet first mounts 
    componentDidMount() {
        this.props.fetchTask(this.props.params.taskId);
        this.props.fetchEmployees(); 
        this.setState({
            description: this.props.task.description,
            prioritylevel: this.props.task.prioritylevel,
            completionstatus: this.props.task.completionstatus,
            employeeId: this.props.task.employeeId
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    // Control state through the input typed into the form 
    handleTextChange = e => {
        // Need to check if box is checked for completion status which is a boolean
        const {type, checked} = e.target;
        this.setState({[e.target.name]: type==="checkbox"? checked : e.target.value});
    };

    // Handle the change for the options for changing the employee of the task
    handleOptionsChange = e => {
        if (e.target.value === "Unassigned") {
            this.setState({employeeId:null});
        } 
        else {
            this.setState({employeeId: e.target.value})
        }
    }

    // Handle the submission of the form
    handleSubmitForm = e => {
        // The form does not rerender with this line
        e.preventDefault();
        
        // Basic Form Validation
        if(this.state.description==="" && this.state.prioritylevel==="") {
            this.setState({inputError:"Description and Priority Level are required"});
            return;
        }
        else if(this.state.description==="") {
            this.setState({inputError:"Description is required"});
            return;
        }
        else if(this.state.prioritylevel==="") {
            this.setState({inputError:"Priority Level is required"});
            return;
        }
        else { 
             // Get the updated infor for the task from the form input
            let task = {
                id: this.props.task.id,
                description: this.state.description,
                prioritylevel: this.state.prioritylevel,
                completionstatus: this.state.completionstatus,
                employeeId: this.state.employeeId
            };
            
            this.props.editTask(task);

            this.setState({
                redirect: true, 
                redirectId: this.props.task.id
            });
        }
    }


    render() {
        //console.log(this.state.employeeId);
        //Need to get Infor for Employees by destructure the props
        let { task, allEmployees} = this.props;
        let assignedEmployee = task.employeeId;
        let otherEmployees = allEmployees.filter(employee => employee.id!==assignedEmployee);

        // Go Back to Single Task View
        if(this.state.redirect) {
            return (<Navigate to={`/tasks/${this.state.redirectId}`} replace={true}/>);
        }

        return (
            <div className="Edit-Task">
                <form className="EditTaskForm" onSubmit={(e) => this.handleSubmitForm(e)}>
                    <label className="Task-Form-Input">Description: </label>
                    <input type="text" name="description" value={this.state.description} onChange ={(e) => this.handleTextChange(e)}/>
                    <br/>
                    <br/>
                    <br/>

                    <label className="Task-Form-Input">Priority Level: </label>
                    <input type="text" name="prioritylevel" value={this.state.prioritylevel} onChange={(e) => this.handleTextChange(e)}/>
                    <br/>
                    <br/>
                    <input type="checkbox" id="completionstatus" name="completionstatus" checked={this.state.completionstatus} onChange={(e) => this.handleTextChange(e)}></input>
                    <label className="Task-Form-Input">Completed ? </label>
                    <br/>
                    <br/>
                    <br/>
                    <label className="Employee-Select-Label">Employee: </label>
                    <select onChange={(e) => this.handleOptionsChange(e)}>
                        {task.employee!==null ? <option value={task.employeeId}>{task.employee.firstname+" (Current)"}</option>: <option value="Unassigned">Unassigned</option>}
                        {otherEmployees.map(employee => {
                            return (
                                <option value={employee.id} key={employee.id}>{employee.firstname}</option>
                            )
                        })}
                        {task.employee!==null && <option value="Unassigned">Unassigned</option>}
                    </select>
                    <br/>
                    <br/>                    
                    <br/>
                    <button type="submit" className="Submit-Task-Button">Submit Information</button>
                    <br/>
                    <br/>                    
                    <br/>
                </form>
                <br/>
                {this.state.inputError!=="" && <h2 className="input-task-form-error">{this.state.inputError}</h2>}


            </div>
        );
    }
}

const mapState=(state) => {
    return {
      task: state.task,
      allEmployees: state.allEmployees
    };
};

const mapDispatch=(dispatch) => {
    return({
        editTask: (task) => dispatch(editTaskThunk(task)),
        fetchTask: (id) => dispatch(fetchSingleTaskThunk(id)),
        fetchEmployees: () => dispatch(fetchAllEmployeesThunk())

    })
}

export default withRouter(connect(mapState, mapDispatch)(EditTask));



