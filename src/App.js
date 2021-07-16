// src/App.js

import React from "react";
import { Link, Route, Switch } from "react-router-dom";
// import Category from "./Category";
// import Products from "./Products";
import Login from './Login';
import Formulario from "./Formulario";
import Editar from "./Editar";
import PrivateRoute from "./PrivateRoute";
import "./assets/css/estilo.css"


/* Vista Home  */

const Home = () => (
  <div>    
    &nbsp;
    <center>
    <p>Somos un proyecto social para dar hogar a gatos y perros que no lo tienen. Tu puedes cambiar una vida, anímate.
      </p> 
    <h3 style={{ color: 'white' }}>Dale hogar a estos amigos:</h3>  </center>
        
    <div className="contenedor">
      <div className="columna">


        <div className="perrito">
        <img src="https://picsum.photos/id/237/400/300" alt="foto"/>  
        </div> 
        &nbsp;
        &nbsp;
        <center>
        <p>Hola me llamo Fluffy, soy raza pequeña.
          </p> 
        &nbsp;
        &nbsp;
        <Link to="/Formulario" className="btn btn-primary">Adoptar</Link> 
       </center>

      </div>
      <div className="columna">

        <div className="perrito">
          <img src="https://picsum.photos/id/1062/400/300" alt="foto"/>  
          </div> 
          &nbsp;
          &nbsp;
          <center>
          <p>Hola me llamo Fluffy, soy raza pequeña.
            </p> 
          &nbsp;
          &nbsp;
          <Link to="/Formulario" className="btn btn-primary">Adoptar</Link>
        </center>
      
      </div>
      <div className="columna">
        
      <div className="perrito">
          <img src="https://picsum.photos/id/659/400/300" alt="foto"/>  
          </div> 
          &nbsp;
          &nbsp;
          <center>
          <p>Hola me llamo Fluffy, soy raza pequeña.
            </p> 
          &nbsp;
          &nbsp;
          <Link to="/Formulario" className="btn btn-primary">Adoptar</Link>           
        </center>
      
      </div>

    </div>
    &nbsp;
    &nbsp;
    
    <center>
          <h3 style={{ color: 'white' }}>Contáctanos</h3>  </center>
    &nbsp;
    &nbsp;
    <div className="contenedor">
      <div className="columna31">
      &nbsp;
      &nbsp;
      <center>
          <h3 style={{ color: 'white' }}>Datos de contacto
            </h3>  
      &nbsp;
      &nbsp; 
      <p style={{ color: 'white' }}>Celular: 318 596 59 62
            </p>  
      &nbsp;
      &nbsp;   
      <p style={{ color: 'white' }}>Dirección: Calle 2 #3-56
            </p>  
      &nbsp;
      &nbsp;  
      <p style={{ color: 'white' }}>Email: info@adoptauncallejerito.com
            </p>  
      &nbsp;
      &nbsp;                  
        </center>
      &nbsp;
      &nbsp;  
      </div>  
      <div className="columna32">

          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31806.554586731294!2d-75.72667145591922!3d4.801054053184397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388748eb56c1fd%3A0x95b39410f9f1dfbc!2sPereira%2C%20Risaralda!5e0!3m2!1ses-419!2sco!4v1626285175835!5m2!1ses-419!2sco"
              title="Mapa"
              width="100%"
              height="500"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              
            />
      </div>
    </div>
  </div>
);

/* Vista Admin */

const Admin = () => (
  <div>
    &nbsp;
    &nbsp;
    <center>
    <h2 style={{ color: 'white' }}>Hola admin!</h2>
    </center>

    <div className="contenedor">
      <div className="columna">


        <div className="perrito">
        <img src="https://picsum.photos/id/237/400/300" alt="foto"/>  
        </div> 
        &nbsp;
        &nbsp;
        <center>
        <p>Hola me llamo Fluffy, soy raza pequeña.
          </p> 
          &nbsp;  
        <Link to="/Editar" className="btn btn-primary">Editar</Link>
        <Link to="/Editar" className="btn btn-primary">Borrar</Link>
       </center>

      </div>
      <div className="columna">

        <div className="perrito">
          <img src="https://picsum.photos/id/1062/400/300" alt="foto"/>  
          </div> 
          &nbsp;
          &nbsp;
          <center>
          <p>Hola me llamo Fluffy, soy raza pequeña.
            </p> 
          <Link to="/Editar" className="btn btn-primary">Editar</Link>
          <Link to="/Editar" className="btn btn-primary">Borrar</Link>
        </center>
      
      </div>
      <div className="columna">
        
      <div className="perrito">
          <img src="https://picsum.photos/id/659/400/300" alt="foto"/>  
          </div> 
          &nbsp;
          &nbsp;
          <center>
          <p>Hola me llamo Fluffy, soy raza pequeña.
            </p> 
            <Link to="/Editar" className="btn btn-primary">Editar</Link>
            <Link to="/Editar" className="btn btn-primary">Borrar</Link>
        </center>
      
      </div>

    </div>


  </div>
);


/* Menú y Rutas */ 

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li> 
            <Link to="/"> <div className="logo"></div></Link>          
          </li>
          <li>
            
            <Link to="/admin">Login</Link>
          </li>         
        </ul>
      </nav>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/Formulario"><Formulario /></Route>
        <Route path="/Editar"><Editar /></Route>
        <Route path="/login"><Login /></Route>
        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
    </div>
  );
};