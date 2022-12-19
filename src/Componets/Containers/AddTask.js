import React from "react";
import {connect} from "react-redux";
import { Navigate } from "react-router-dom";
import '../../Styles/EditTask.css';

// Need the add task thunk 
import {addTaskThunk} from '../../store/thunks';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            description: "", 
            prioritylevel: "",
            completionstatus: false, 
            redirect: false, 
            redirectId: null,
            inputError: ""
        };
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    handleTextChange = e => {
        // Need to check if box is checked for completion status which is a boolean
        const {type, checked} = e.target;
        this.setState({[e.target.name]: type==="checkbox"? checked : e.target.value});
    };

    // Handle the submission of the form
    handleSubmitForm = async e => {
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
        else { // All the input values are good
            let task = {
                description: this.state.description,
                prioritylevel: this.state.prioritylevel,
                completionstatus: this.state.completionstatus,
            };
            
            // The new task that needs to be added 
            let newTask=await this.props.addTask(task);

            this.setState({
                redirect: true, 
                redirectId: newTask.id,
                inputError: ""
            });
        }
    }

    render() {
        // Go Back to Single Task View
        if(this.state.redirect) {
            return (<Navigate to={`/tasks/${this.state.redirectId}`} replace={true}/>);
        }

        // Reuse the same form from edit task except leave out the employee picking option since it is not required for in adding task container
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

const mapDispatch = (dispatch) => {
    return({addTask: (task) => dispatch(addTaskThunk(task)),});
}

export default connect(null, mapDispatch)(AddTask);
