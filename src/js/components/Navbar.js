import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Card from "./Card";
import { useContext } from "react";
import { Context } from "../store/appContext";


const Navbar = () => {

    <script src="https://kit.fontawesome.com/b031a3fb72.js" crossorigin="anonymous"></script>

    return (<nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/"><img src="https://www.gamerfocus.co/wp-content/uploads/2018/03/Star-Wars-Logo.png" style={{ height: "3em", margin: "auto", padding: "0px 0px 10px 0px" }} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                </ul>
                <div className="d-flex">
                    <div className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle btn bg-secondary text-dark rounded" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favoritos</Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className="dropdown-item">Action</li>
                            <li className="dropdown-item">Action 2</li>
                        </ul>

                    </div>
            </div>
        </div>
        </div>
    </nav>)

};

export default Navbar;