import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import '../../Styles/SingleTask.css';
// Need the thunk to fetch the task
import {fetchSingleTaskThunk} from '../../store/thunks';
// Get the view
import SingleTaskView from '../views/SingleTaskView';

class SingleTask extends React.Component { 
    componentDidMount(){
        // Get the task from the id in url (parameter)
        this.props.fetchTask(1);  // ERROR is here right here !!!!!!!!!!!, need to grab id
        // this.props.match.params.id doesn't work
    }

    render() {
        return(
            <div className="SingleTask">
                <div className="Top-Page">
                    <h1>Single Task</h1>
                    <Link to='/tasks' className="Back-Button">Back to all Tasks</Link>
                </div>
                <br/>
                <SingleTaskView task={this.props.task}/>
            </div>
        );
    }
}

// map state to props
const mapState = (state) => {
    return {
      task: state.task,
    };
};
  
// map dispatch to props
const mapDispatch = (dispatch) => {
    return {
      fetchTask: (id) => dispatch(fetchSingleTaskThunk(id)),
    };
};

export default connect(mapState, mapDispatch)(SingleTask);