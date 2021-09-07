import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";


const Card = (props) => {

    const { store, actions } = useContext(Context);


    let nombre = props.data.name;
    console.log(props.data.url)


    return (<div>
        <div className="card bg-white">
            <img src={props.image} className="card-img-top" alt="" />
            <div className="card-body card border-dark mb-3">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text mb-2">{props.data.url.includes("https://swapi.dev/api/people") ? <span>Gender: {props.data.gender}</span> : props.data.url.includes("https://swapi.dev/api/planet") === true ? <span>Population: {props.data.population}</span> : ""}</p>
                <p className="card-text mb-2">{props.data.url.includes("https://swapi.dev/api/people") ? <span>Hair Color: {props.data.hair_color}</span> : props.data.url.includes("https://swapi.dev/api/planet") === true ? <span>Terrain: {props.data.terrain}</span> : props.data.url.includes("https://swapi.dev/api/vehicles") === true ? <span>Model: {props.data.model}</span> : ""}</p>
                <p className="card-text mb-2">{props.data.url.includes("https://swapi.dev/api/people") ? <span>Eye Color: {props.data.eye_color}</span> : ""}</p>

            </div>
            <div className="card-footer text-center bg-white">
                <div class="col-md-12">
                    <Link className="btn btn-dark me-2" to="/info"> Sigue leyendo</Link><button className="btn btn-outline-warning" onClick={() => actions.addFav(nombre)}><FontAwesomeIcon icon={faHeart} /></button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Card;