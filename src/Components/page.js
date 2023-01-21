import React from "react";
import LoginForm from "./loginform";
import NavBar from "./navbar";

export default class Page extends React.Component {
    render() {
        return (<div className="container">
            <NavBar />
            <br></br>
            <LoginForm />
        </div>)
    }
}