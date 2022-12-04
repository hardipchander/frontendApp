import React from "react";
import '../../Styles/AllTasks.css';
import {Link} from "react-router-dom";

// Need to connect componet to Redux State through connect function 
import { connect } from 'react-redux'

class AllTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render() {
        return(
            <div className="AllTasksView">
                <h1>All the Tasks</h1>
                <Link to='/'>Back To HomePage</Link>
                <Link to='/:taskId'>Single Task View</Link>
            </div>
        );
    }
}

export default AllTasks;
