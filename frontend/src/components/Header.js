import React from "react";

function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <a className="navbar-brand text-primary font-weight-bold" href="#">Student Management System</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-5 text-dark">
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="/add">Create Student</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;