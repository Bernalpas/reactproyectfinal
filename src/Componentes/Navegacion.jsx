import { NavLink, Outlet } from "react-router-dom";
import '../css/home.css'


const Navegacion = () => {
    return(
        <nav className="navbar navegar section">
            <NavLink 
                to='/' 
                className={({ isActive }) => (isActive ? "active" :  "link")}> 
                Home 
            </NavLink>

            <NavLink 
                to='/productos' 
                className={({ isActive }) => (isActive ? "active" :  "link")}> Productos 
            </NavLink>
            <NavLink to='/formulario' className={({ isActive }) => (isActive ? "active" :  "link")}> Formulario </NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? "active" :  "link")}> About </NavLink>
            <NavLink to='/api' className={({ isActive }) => (isActive ? "active" :  "link")}> Api </NavLink>
            <Outlet />
        </nav>
    )
}

export default Navegacion;