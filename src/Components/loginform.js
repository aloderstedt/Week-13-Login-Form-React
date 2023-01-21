import React from "react";
import LoginButton from "./loginbutton";
import Password from "./password";
import Username from "./username";


export default class LoginForm extends React.Component {
    render() {
        return (<div id="login-form">
            <div className="">
                <h3>Log In</h3>
            </div>
            <div className="">
                <Username />
                <Password />
            </div>
            <br></br>
            <div className="">
                <LoginButton />
            </div>
            <br></br>
        </div>)
    }
}