import React from "react";
import '../../Styles/AllTasks.css';
import {Link} from "react-router-dom";

//Need thunks to get all tasks and the one to delete a an task but for deelting that has to do with the final assigment, don't need it now
import {fetchAllTasksThunk, deleteTaskThunk} from '../../store/thunks';

// Get the view 
import AllTasksView from '../views/AllTasksView';

// Need to connect componet to Redux State through connect function 
import { connect } from 'react-redux';

class AllTasks extends React.Component {
    // When allTasks container first gets rendered, call thunk here to get all tasks
    componentDidMount() {
        this.props.fetchAllTasks();
    }

    render() {
        return(
            <div className="AllTasksView">
                <h1>All the Tasks</h1>
                <div className="topPart">
                    <Link to='/' className="link-back">Back To HomePage</Link>
                    <h2 className="list-Name">Tasks List</h2>
                </div>
                <br/>
                <AllTasksView tasks={this.props.allTasks} deleteTask={this.props.deleteTask}/>
            </div>
        );
    }
}

// Connect the state to props
const mapState = (state) => {
    return {
      allTasks: state.allTasks,
    };
};
  
// Connect the dispatch to props
const mapDispatch = (dispatch) => {
    return {
      fetchAllTasks: () => dispatch(fetchAllTasksThunk()),
      deleteTask: (taskId) => dispatch(deleteTaskThunk(taskId)),
    };
};
  
export default connect(mapState, mapDispatch)(AllTasks)

