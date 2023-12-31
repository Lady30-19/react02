import React from 'react'
import { Routes, Route, Link, Outlet, Switch, Redirect} from 'react-router-dom';
    
import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';

import Home from '../public/Home';
import Dashboard from '../public/Dashboard';
import Informacion from '../public/Informacion';
import Noticia from '../public/Noticia';
import LoginForm from '../login/LoginForm';
import RegisterForm from '../login/RegisterForm';
import Contacto from '../public/Contacto';

const BarraRutasPublic = () => {
    const { user } = useAuth();
    const auth = getAuth();
    const navigate = useNavigate();
  
    const handleSignOut = () => {
    }
  
    return (
      <div style={{ background:"greenyellow", }}>
        <nav>
          <div id="login">
            <ul>
              <li><Link to="/nuevoregistro">Registrar</Link></li>
  
              <li><Link onClick={handleSignOut} >Cerrar sesión</Link> </li>
              <li> <Link to="/iniciarsesion">Iniciar sesión</Link> </li>
              
            </ul>
          </div>
          
          <div id="menu">
            <ul>
             
              <li><Link to="/home">Inicio(Home)</Link> </li>
              <li><Link to="/Informacion">INFORMACION</Link> </li>
              <li><Link to="/Noticias">NOTICIAS</Link> </li>
              <li><Link to="/">Contacto</Link> </li>
              <li><Link to="/nuevoregistro">Registrar</Link></li>
              

            </ul>
          </div>
        </nav>
  
        <Routes>
        <Route path="/iniciarsesion" element={<LoginForm />} />
        <Route path="/" element={<Contacto />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Informacion" element={<Informacion />} />
        <Route path="/Noticia" element={<Noticia />} />
        <Route path="/nuevoregistro" element={<RegisterForm />} />
        </Routes> 
      </div>
    )
}

export default BarraRutasPublic;