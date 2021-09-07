import React from "react";
import { useState, useEffect, useContext } from "react";
import Card from "../Card";
import './Home.css';
import Info from "./Info";
import { Context } from "../../store/appContext";

    const Fav = () => {
        const { store, actions } = useContext(Context);

        useEffect( () => {
            actions.getPersonajes()
        }, []);

        return (<div>
        <h1>Home</h1>
        <ul>
            {store.personajes.map((personajes, index) => {
                console.log(index, personajes.name)
                return <li>{personajes.name} <button onClick={()=> actions.deleteElement(index)}>Eliminar</button></li>
            })}
        </ul></div>)



    }
    
   export default Fav


