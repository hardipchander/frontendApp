import React from "react";
import '../Styles/Home.css';

// Need to connect componet to Redux State through connect function 
import { connect } from 'react-redux'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    render() {
        return(
            <div className="HomePage">
                <h1>Welcome to the Home Page</h1>
            </div>
        );
    }
}

export default Home;