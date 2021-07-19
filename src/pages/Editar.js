import React from "react";
import Home from "../App";
import { Link, Route, Switch } from "react-router-dom";


function Editar() {
    return (
     <div className="contenedorformulario">
        <div className="contenedorimg">
      <img src="https://picsum.photos/id/237/400/300" alt="foto"/>  
      </div> 
        <center>
        <p>Hola me llamo Fluffy, soy raza pequeña.
          </p> 
        <Link to="/" className="btn btn-primary">Actualizar</Link>  
        </center> 
        &nbsp;
        &nbsp;
        <Switch>
        <Route exact path="/"><Home /></Route>       
        </Switch>
     </div>   
    );
}

export default Editar;