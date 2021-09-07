import React from "react";
import { useState, useEffect, useContext } from "react";
import Card from "../Card";
import './Home.css';
import Info from "./Info";
import { Context } from "../../store/appContext";


const Home = () => {
    
    const [planets, setPlanets] = useState([]);
    const [peoples, setPeoples] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState (true);
    
    
    useEffect(() => {
        fetch("https://swapi.dev/api/people/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setPeoples(data.results))
            .then(data => setLoading(false))
            
    }, [])

    
    useEffect(() => {
        fetch("https://swapi.dev/api/planets/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setPlanets(data.results))
            
    }, [])

    
    useEffect(() => {
        fetch("https://swapi.dev/api/vehicles/", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(data => setVehicles(data.results))
            
            
    }, [])

    

    return( <div>
        {loading ? <div class="alert alert-dark" role="alert">
            <strong>Que la fuerza este contigo... Estamos cargando el contenido...</strong>
            </div> :
        
        <div>
            <div className="row">
            
                <h1 className="m-3">Personajes</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 mb-4 bg-white">
                    {peoples.map((people, i) => <div className="col-md-3"><Card data={people} image="https://assets.metrolatam.com/do/2015/07/20/screen-shot-2015-07-20-at-10-29-04-am-400x200.jpg" /></div>)}
                </div>
            </div>
            <div className="row">
            <h1 className="m-3">Planetas</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 mb-4">
                    {planets.map((planet, i) => <div className="col-md-3"><Card data={planet} image="https://culturawarsie.files.wordpress.com/2019/08/dsii6.jpg?w=400&h=200&crop=1" /></div>)}
                </div>
            </div>
            <div className="row">
                <h1 className="m-3">Vehiculos</h1>
                <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 mb-4">
                    {vehicles.map((vehicle, i) => <div className="col-md-3"><Card data={vehicle} image="https://static.wikia.nocookie.net/esstarwars/images/7/76/LiberatorCruiser-SWR.png" /></div>)}
                </div>
            </div>
        </div>}
        </div>
    );
}
export default Home;