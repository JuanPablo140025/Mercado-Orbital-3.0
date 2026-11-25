import { NavLink } from "react-router";
import RelojEstacion from "./RelojEstacion.jsx";

function Encabezado({ totalUnidades, onAbrirCarrito }) {
    return (
        <header className="encabezado">
            <div className="marca">
                <img src="/img/logo-mercado.png" alt="Logo del Mercado Orbital" className="logo" />
                <div>
                    <h1>Mercado Orbital</h1>
                    <p className="subtitulo">Repuestos del hangar de Nova · Estación Umbral</p>
                    <RelojEstacion />
                </div>
            </div>

            <nav className="navegacion">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/catalogo">Catálogo</NavLink>
                <NavLink to="/taller">Taller</NavLink>
                <NavLink to="/hangar">Hangar</NavLink>
            </nav>

            <button className="boton-carrito" onClick={onAbrirCarrito}>
                Carrito <span className="contador">{totalUnidades}</span>
            </button>
        </header>
    );
}

export default Encabezado;

