import React from "react";
import {Link} from "react-router-dom";
import '../Styles/SingleTask.css';

class SingleTask extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render() {
        return(
            <div className="SingleTask">
                <h1>Single Task</h1>
                <Link to='/tasks'>All Tasks</Link>
            </div>
        );
    }
}

export default SingleTask;