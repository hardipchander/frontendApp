import {Component} from "react";
import {fetchSingleEmployeeThunk, fetchAllTasksThunk, editTaskThunk} from '../../store/thunks';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import '../../Styles/SingleEmployee.css';

import SingleEmployeeView from "../views/SingleEmployeeView";

// With the newer version of React-Router dom need this for parsing the url for its id
const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
      <WrappedComponent
        {...props}
        params={params}
      />
    );
};

class SingleEmployee extends Component {
    componentDidMount() {
        // Getting the employee based on id from the url 
        console.log('Getting Single Employee');
        this.props.fetchEmployee(this.props.params.employeeId);
        this.props.fetchTasks();
    }
    render() {
        return (
            <div className="Single-Employee-Page">
                <div className="Top-Part-Page">
                    <h1 className="title-single-employee">Single Employee</h1>
                    <Link to='/employees' className="Back-Link">Back to all employees</Link>
                </div>
                <SingleEmployeeView employee={this.props.employee} allTasks={this.props.allTasks}/>
            </div>
        );
    }

}

const mapState = (state) => {
    return {
      employee: state.employee,
      allTasks: state.allTasks,
  
    };
};
  
const mapDispatch = (dispatch) => {
    return {
      fetchEmployee: (id) => dispatch(fetchSingleEmployeeThunk(id)),
      fetchTasks: () => dispatch(fetchAllTasksThunk()),
  
    };
};
  
export default withRouter(connect(mapState, mapDispatch)(SingleEmployee));
