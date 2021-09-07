import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";


const Card = (props) => {

    

    return (<div>
        <div className="card bg-white">
            <img src={props.image} className="card-img-top" alt="" />
            <div className="card-body card border-dark mb-3">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text mb-2">Gender: <span>{props.data.gender}</span></p>
                <p className="card-text mb-2">Hair-color: <span>{props.data.hair_color}</span></p>
                <p className="card-text mb-2">Eyes-color: <span>{props.data.eye_color}</span></p>
            </div>
            <div className="card-footer text-center bg-white">
                <div class="col-md-12">
                <Link className="btn btn-dark me-2" to="/info"> Sigue leyendo</Link><button className="btn btn-outline-warning" onClick><FontAwesomeIcon icon={faHeart} /></button>
                </div>
            </div>
        </div>
        <div className="card bg-white">
        <img src={props.image} className="card-img-top" alt="" />
        <div className="card-body card border-dark mb-3">
            <h5 className="card-title">{props.data.name}</h5>
            <p className="card-text mb-2"><span>Population: {props.data.population}</span></p>
            <p className="card-text mb-2"><span>Terrain: {props.data.terrain}</span></p>
            
        </div>
        <div className="card-footer text-center bg-white">
            <div class="col-md-12">
            <Link className="btn btn-dark me-2" to="/info"> Sigue leyendo</Link><button className="btn btn-outline-warning"><FontAwesomeIcon icon={faHeart} /></button>
            </div>
        </div>
    </div>
    <div className="card bg-white">
    <img src={props.image} className="card-img-top" alt="" />
    <div className="card-body card border-dark mb-3">
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text mb-2"><span>Model: {props.data.model}</span></p>
    </div>
    <div className="card-footer text-center bg-white">
        <div class="col-md-12">
        <Link className="btn btn-dark me-2" to="/info"> Sigue leyendo</Link><button className="btn btn-outline-warning"><FontAwesomeIcon icon={faHeart} /></button>
        </div>
    </div>
</div>
</div>
    );
}

export default Card;