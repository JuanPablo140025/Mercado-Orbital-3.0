import { Link } from "react-router";

function PanelCarrito({ items, total, onCerrar, onQuitar }) {
    return (
        <div className="fondo-panel" onClick={onCerrar}>
            <aside className="panel" onClick={(e) => e.stopPropagation()}>
                <div className="panel-cabeza">
                    <h2>Carrito</h2>
                    <button className="boton-cerrar" onClick={onCerrar}>Cerrar</button>
                </div>

                {items.length === 0 ? (
                    <div className="carrito-vacio">
                        <img src="/img/nova-carrito-vacio.png" alt="Nova esperando pedidos" />
                        <p>El carrito está vacío</p>
                    </div>
                ) : (
                    <ul className="lista-carrito">
                        {items.map((item) => (
                            <li key={item.id}>
                                <span>{item.nombre} × {item.cantidad}</span>
                                <strong>{item.precio * item.cantidad} cr</strong>
                                <button onClick={() => onQuitar(item.id)}>Quitar</button>
                            </li>
                        ))}
                    </ul>
                )}

                <Link to="/catalogo" className="seguir-comprando" onClick={onCerrar}>
                    Seguir comprando
                </Link>

                <p className="total">Total: {total} cr</p>
            </aside>
        </div>
    );
}

export default PanelCarrito;

