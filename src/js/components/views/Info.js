import React from 'react'
import { useState, useEffect } from "react";

const Info = (props) => {

    const [people, setPeople] = useState({});

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/1", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setPeople(data.result.properties))
            
            
            
    }, [])
   
    return (<div>
        <div className="container"> <br></br><br></br>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://www.xlsemanal.com/wp-content/uploads/sites/3/2017/11/personajes-mark-hamill-luke-skywalker-la-guerra-de-las-galaxias-xlsemanal-7.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{people.name}</h1><br></br>
                            <h6 className="card-text">Luke Skywalker es un personaje ficticio y el protagonista​ de la trilogía original de la saga de ciencia ficción Star Wars.​ Procedente de la colonia de asteroides de Polis Massa, es el único hijo varón de Anakin Skywalker y la senadora Padmé Amidala.</h6><br></br>
                            <p className="card-text"><strong>Nombre:</strong> {people.name} </p>
                            <p className="card-text"><strong>Nacimiento:</strong> {people.birth_year} </p>
                            <p className="card-text"><strong>Genero:</strong> {people.gender} </p>
                            <p className="card-text"><strong>Altura:</strong> {people.height}</p>
                            <p className="card-text"><strong>Color de cabello:</strong> {people.hair_color}</p>
                            <p className="card-text"><strong>Color de ojos:</strong> {people.eye_color}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div></div>)
}

export default Info