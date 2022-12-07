import React from "react";
import {connect} from "react-redux";
import {Navigate} from 'react-router-dom';  // Did not use Redirect Componet becuase their is a error with it
import '../../Styles/EditTask.css';

// Need Thunks
import {fetchSingleTaskThunk, editTaskThunk} from '../../store/thunks';

// Edit Task Container that has a form
class EditTask extends React.Component {
    constructor(props) {
        super(props);
        // Store form infor in state, have controlled input from state 
        this.state={
            description: "", 
            prioritylevel: "",
            completionstatus: false,
            employeeId: null, 
            redirect: false, 
            redirectId: null
        };
    }

    // Set state when componet first mounts 
    componentDidMount() {
        this.props.fetchTask(1); //this.props.match.params.id doesnt work need tho fix this part of the code !!!!!!!!!!!!!!!!!!!!!!1
        this.setState({
            description: this.props.task.description,
            prioritylevel: this.props.task.prioritylevel,
            completionstatus: this.props.task.completionstatus,
            employeeId: this.props.task.employeeId
        });
    }

    // Unmount the componet
    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    // Control state through the input typed into the form 
    handleTextChange = e => {
        // Need to check if box is checked for completion status which is a boolean
        const {type, checked} = e.target;
        this.setState({[e.target.name]: type==="checkbox"? checked : e.target.value});
    };

    // Handle the submission of the form
    handleSubmitForm = e => {
        // The form does not rerender with this line
        e.preventDefault();

        // Have to error form validation here logic here 
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


    render() {
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
                    <br/>
                    <input type="checkbox" id="completionstatus" name="completionstatus" checked={this.state.completionstatus} onChange={(e) => this.handleTextChange(e)}></input>
                    <label className="Task-Form-Input">Completed ? </label>
                    <br/>
                    <br/>
                    <br/>
                    <label className="Task-Form-Input">Employee Id: </label>
                    <input type="text" name="employeeId" value={this.state.employeeId} onChange={(e) => this.handleTextChange(e)} />
                    <br/>
                    <br/>                    
                    <br/>
                    <button type="submit" className="Submit-Task-Button">Submit Information</button>
                    <br/>
                    <br/>                    
                    <br/>
                </form>
            </div>
        );
    }
}

const mapState=(state) => {
    return {
      task: state.task,
    };
  };

const mapDispatch=(dispatch) => {
    return({
        editTask: (task) => dispatch(editTaskThunk(task)),
        fetchTask: (id) => dispatch(fetchSingleTaskThunk(id)),

    })
}

export default connect(mapState, mapDispatch)(EditTask);



