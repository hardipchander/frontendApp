import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { useParams} from "react-router-dom";

import '../../Styles/SingleTask.css';
// Need the thunk to fetch the task
import {fetchSingleTaskThunk} from '../../store/thunks';
// Get the view
import SingleTaskView from '../views/SingleTaskView';

// Newer Version to get the URL Id with React Router 6
const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
      <WrappedComponent
        {...props}
        params={params}
      />
    );
};

class SingleTask extends React.Component { 
    componentDidMount(){
        console.log("Single Task Get");
        // Get the task from the id in url (parameter)
        this.props.fetchTask(this.props.params.taskId); 
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

export default withRouter(connect(mapState, mapDispatch)(SingleTask));