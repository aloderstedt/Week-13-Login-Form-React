import React from "react";


export default class NavBar extends React.Component {
    render() {
        return (<nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button>Website</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="navButt">home</button>
                        </li>
                        <li className="nav-item">
                            <button className="navButt">Features</button>
                        </li>
                        <li className="nav-item">
                            <button className="navButt">About</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
    }
}