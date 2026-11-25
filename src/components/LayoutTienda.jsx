import { Outlet } from "react-router";
import Encabezado from "./Encabezado.jsx";

function LayoutTienda({ totalUnidades, onAbrirCarrito }) {
    return (
        <div className="app">
            <Encabezado totalUnidades={totalUnidades} onAbrirCarrito={onAbrirCarrito} />
            <Outlet />
        </div>
    );
}

export default LayoutTienda;
