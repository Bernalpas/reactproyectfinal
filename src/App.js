//import './css/App.css';
/* Importamos las librerías para el ruteo */
import {
  Routes,
  Route
} from 'react-router-dom'
import Navegacion from './Componentes/Navegacion';
import Home from './Componentes/Home';
import Productos from './Componentes/Productos';
import Formulario from './Componentes/Formulario';
import Footer from './Componentes/Footer';
import Errores from './Componentes/Errores';
import About from './Componentes/About';
import Api from './Componentes/Api';
import React from 'react';

//import { BrowserRouter } from 'react-router-dom';


function App() {
  return(
    <React.Fragment>
      <Navegacion />
    <div>
        <Routes>
            <Route index element={ <Home /> }></Route>
            <Route path="/productos" element={ <Productos />}></Route>
            <Route path="/formulario" element={ <Formulario /> }></Route>
            <Route path="/about" element={ <About /> }></Route>
            <Route path="/api" element={ <Api /> } ></Route>
            <Route path= "*" element= { <Errores />  } ></Route>
        </Routes>
    </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
