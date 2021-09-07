import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Card from "./Card";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Navbar = () => {

    

    return <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
            
            <Link className="navbar-brand " to="/"><img src="https://www.gamerfocus.co/wp-content/uploads/2018/03/Star-Wars-Logo.png" style={{height: "3em", margin: "auto", padding: "0px 0px 10px 0px"}} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                </ul>
                <div className="d-flex">
                    <div className="nav-item dropdown bg-light rounded">
                    <Link className="nav-link dropdown-toggle text-dark" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favoritos
                            </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="/">Hola</Link></li>
                            <li><Link className="dropdown-item" to="/">Another action</Link></li>
                            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://kit.fontawesome.com/b031a3fb72.js" crossorigin="anonymous"></script>
    </nav>
    
};

export default Navbar;