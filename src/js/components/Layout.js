import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./Navbar";
import Info from "./views/Info";
import Fav from "./views/probandofav";


const Layout = () => {
    return <Router>
        <Navbar />
        <div className="container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/info">
                    <Info/>  
                </Route>
                <Route exact path="/fav">
                    <Fav/>
                </Route>
                <Route render={() => <h1>No encontrado</h1>}></Route>
            </Switch>
        </div>

    </Router>
}
export default Layout;