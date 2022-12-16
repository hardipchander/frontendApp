import React from "react";
import '../../Styles/Home.css';
import {Link} from "react-router-dom";

// For Final Project will have to update Employees Link as Well, right now just goes back to Home Container

class HomeView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="HomePage">
                <h1>Welcome to the Home Page</h1>
                <br/>
                <div className="Links">
                    <Link to='/tasks' className="Link">All Tasks</Link>
                    <Link to='/employees' className="Link">All Employees</Link>
                </div>
            </div>
        );
    }
}

export default HomeView;