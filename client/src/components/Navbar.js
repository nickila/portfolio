import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-blue">
            <Link class="navbar-brand" to="/">BRIAN NICKILA</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to="/portfolio">PORTFOLIO</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">CONTACT</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/resume">RESUME</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;