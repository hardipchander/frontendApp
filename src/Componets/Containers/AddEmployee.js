import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import '../../Styles/EditEmployee.css';

// Need the thunk 
import {addEmployeeThunk} from '../../store/thunks';

class AddEmployee extends React.Component {
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

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }
 
    handleTextChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    // Handle Submit Form
    handleSubmitForm = async e => {
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
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                department: this.state.department,
            };
            
            // The new employee that needs to be added 
            let newEmployee=await this.props.addEmployee(employee);

            this.setState({
                redirect: true, 
                redirectId: newEmployee.id,
                inputError: ""
            });
        }
    }

    render() {
        // Go to Single Employee View of New Employee
        if(this.state.redirect) {
            return (<Navigate to={`/employees/${this.state.redirectId}`} replace={true}/>);
        }

        // I am going to reuse the form from the edit employee page 
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
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return({addEmployee: (employee) => dispatch(addEmployeeThunk(employee)),});
}

export default connect(null, mapDispatch)(AddEmployee);