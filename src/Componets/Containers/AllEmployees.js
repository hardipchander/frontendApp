import { Component } from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import '../../Styles/AllEmployees.css';

// Need the thunks and the view itself 
import {fetchAllEmployeesThunk, deleteEmployeeThunk} from '../../store/thunks';
import AllEmployeesView from "../views/AllEmployeesView";

class AllEmployees extends Component {
    componentDidMount() {
        this.props.fetchAllEmployees();
    }
    
    render() {
        return (
            <div className="AllEmployeesView">
                <h1 className="title-AEV">All the Employees</h1>
                <br/>
                <div className="HeaderPart">
                    <Link to='/' className="link-back-Home">Back To HomePage</Link>
                    <h2 className="list-Name-employee">Employees List</h2>
                </div>
                <AllEmployeesView allEmployees={this.props.allEmployees} deleteEmployee={this.props.deleteEmployee}/>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
      allEmployees: state.allEmployees,
    };
};

const mapDispatch = (dispatch) => {
    return {
      fetchAllEmployees: () => dispatch(fetchAllEmployeesThunk()),
      deleteEmployee: (employeeId) => dispatch(deleteEmployeeThunk(employeeId))
    };
};
   
export default connect(mapState, mapDispatch)(AllEmployees);