import React from "react";
import '../../Styles/Home.css';
import {Link} from "react-router-dom";

class HomeView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="HomePage">
                <h1>Employee Management System</h1>
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