import React from "react";
import Home from "./App";
import { Link, Route, Switch } from "react-router-dom";
/*import "./assets/css/estilo.css"*/


function Formulario() {
    return (
        <div>
        <div className="contenedorformulario">
           <div className="formulariocolumna31">            
            <div className="contenedorimg">
                <img src="https://picsum.photos/id/237/400/300" alt="foto"/>  
                </div> 
            </div>

         <div className="formulariocolumna32"> 

           <center>
           <p>Hola me llamo Fluffy, soy raza pequeña, para adoptarme llena el siguiente formulario.
             </p>
            &nbsp;
            
             <input type="text" placeholder="Nombre" className="inputformulario"/>
             <br/>
            <input type="text" placeholder="Apellido" className="inputformulario"/>
            <br/>
            <input type="text" placeholder="Teléfono" className="inputformulario"/>
            <br/>
            <input type="text" placeholder="Correo" className="inputformulario"/>
            <br/>
            <br/>
            &nbsp;
            &nbsp;
           <Link to="/" className="btn btn-primary">Adoptar</Link>  
           </center> 
           &nbsp;
           &nbsp;
           <Switch>
           <Route exact path="/"><Home /></Route>       
           </Switch>
           </div>
        </div> 
        </div>  
       );
   }

export default Formulario;