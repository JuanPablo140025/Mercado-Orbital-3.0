import { Link, NavLink, Outlet } from "react-router";

function LayoutHangar() {
    return (
        <div className="hangar">
            <aside className="menu-hangar">
                <Link to="/" className="volver-tienda">
                    Volver a la tienda
                </Link>
                <h2>Zona del hangar</h2>
                <nav>
                    <NavLink to="/hangar" end>
                        Estado del hangar
                    </NavLink>
                    <NavLink to="/hangar/reparaciones">
                        Reparaciones
                    </NavLink>
                </nav>
            </aside>

            <main className="contenido-hangar">
                <Outlet />
            </main>
        </div>
    );
}

export default LayoutHangar;
