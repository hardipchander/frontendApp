import React from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {Navigate, Link} from 'react-router-dom';
import '../../Styles/EditEmployee.css';

import {fetchSingleEmployeeThunk, editEmployeeThunk, fetchAllTasksThunk, editTaskThunk, fetchSingleTaskThunk} from '../../store/thunks';
import { editTask } from "../../store/actions/allActionCreators";

// Have this for getting url for Newer React Router Version
const withRouter = WrappedComponent => props => {
    const params = useParams();
  
    return (
      <WrappedComponent
        {...props}
        params={params}
      />
    );
};

class EditEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            firstname: "",
            lastname: "",
            department: "",
            redirect: false, 
            redirectId: null,
            inputError: ""
        };
    }

    componentDidMount() {
        this.props.fetchEmployee(this.props.params.employeeId);
        this.props.fetchTasks(); 
        this.setState({
            firstname: this.props.employee.firstname,
            lastname: this.props.employee.lastname,
            department: this.props.employee.department,
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    // Control state through the input typed into the form 
    handleTextChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    // Handle Submit Form
    handleSubmitForm = e => {
        e.preventDefault();

        // Form Validation Chack Here Again !!!!!!!!!! 
        if(this.state.firstname==="" && this.state.lastname==="" && this.state.department==="") {
            this.setState({inputError:"All the fields are empty"});
            return;
        }
        else if(this.state.firstname==="" && this.state.department==="") {
            this.setState({inputError:"Add first name and department"});
            return;
        }
        else if(this.state.lastname==="" && this.state.department==="") {
            this.setState({inputError:"Add last name and department"});
            return;
        }
        else if(this.state.firstname==="" && this.state.lastname==="") {
            this.setState({inputError:"The full name is required"});
            return;
        }
        else if(this.state.department==="") {
            this.setState({inputError:"The department is required"});
            return;
        }
        else if(this.state.firstname==="") {
            this.setState({inputError:"The first name is required"});
            return;
        }
        else if(this.state.lastname==="") {
            this.setState({inputError:"The last name is required"});
            return;
        }
        else { 
            let employee = {
                id: this.props.employee.id,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                department: this.state.department,
            };
            
            this.props.editEmployee(employee);

            this.setState({
                redirect: true, 
                redirectId: this.props.employee.id
            });
        }
    }

    render() {
        // Need employee infor and all the tasks and the thunk to edit an employee
        let { employee, allTasks, editEmployee, editTask, fetchTask} = this.props;
        let currentTasks = allTasks.filter(task => task.employeeId===employee.id);
        let availableTasks = allTasks.filter(task => task.employeeId===null);

        // Go Back 
        if(this.state.redirect) {
            return (<Navigate to={`/employees/${this.state.redirectId}`} replace={true}/>);
        }

        return (
            <div className="Edit-Employee-Page">
                <form className="Edit-Employee-Form" onSubmit={(e) => this.handleSubmitForm(e)}>
                    <label className="Employee-Form-Input">First Name: </label>
                    <input type="text" name="firstname" value={this.state.firstname} onChange ={(e) => this.handleTextChange(e)}/>
                    <br/>
                    <br/>
                    <br/>
                    <label className="Employee-Form-Input">Last Name: </label>
                    <input type="text" name="lastname" value={this.state.lastname} onChange ={(e) => this.handleTextChange(e)}/>
                    <br/>
                    <br/>
                    <br/>
                    <label className="Employee-Form-Input">Department: </label>
                    <input type="text" name="department" value={this.state.department} onChange ={(e) => this.handleTextChange(e)}/>
                    <br/>
                    <br/>                    
                    <br/>
                    <button type="submit" className="Submit-Task-Button">Submit Information</button>
                    <br/>
                    <br/>                    
                    <br/>
                </form>
                <br/>
                {this.state.inputError!=="" && <h2 className="input-employee-form-error">{this.state.inputError}</h2>}
                <br/>
                <ul className="Tasks-of-Employee">Current Tasks:
                    <p></p> 
                    {currentTasks.map( task => {
                        return (
                        <li key={task.id} className="Each-Task"><Link to={`/tasks/${task.id}`} className="task-description"><span className="task-description-text">{task.description}</span></Link> 
                        <button onClick={async () =>{await editTask({id:task.id, employeeId: null}); fetchTask(task.id) }}>-</button></li>
                        );
                    })}
                </ul>

                <ul className="Tasks-For-Employee">Available Tasks:
                    <p></p> 
                    {availableTasks.map( task => {
                        return (
                        <li key={task.id} className="Each-Task"><Link to={`/tasks/${task.id}`} className="task-description"><span className="task-description-text">{task.description}</span></Link>
                        <button onClick={async () => { await editTask({id:task.id, employeeId: employee.id}); fetchTask(task.id) }}>+</button> </li>
                        );
                    })}
                </ul>

            </div>
        );
    }
}


const mapState=(state) => {
    return {
      employee: state.employee,
      allTasks: state.allTasks
    };
};

const mapDispatch=(dispatch) => {
    return({
        editEmployee: (employee) => dispatch(editEmployeeThunk(employee)),
        fetchEmployee: (id) => dispatch(fetchSingleEmployeeThunk(id)),
        fetchTasks: () => dispatch(fetchAllTasksThunk()),
        editTask: (task) => dispatch(editTaskThunk(task)),
        fetchTask: (id) => dispatch(fetchSingleTaskThunk(id)),

    })
}

export default withRouter(connect(mapState, mapDispatch)(EditEmployee));
