import { REPARACIONES } from "../data/reparaciones.js";

function PaginaReparaciones() {
    return (
        <section>
            <h2>Reparaciones</h2>
            <ul className="lista-reparaciones">
                {REPARACIONES.map((reparacion) => (
                    <li key={reparacion.id} className="reparacion">
                        <img
                            src={reparacion.imagen}
                            alt={reparacion.nave}
                            className="reparacion-nave"
                        />
                        <div>
                            <strong>{reparacion.nave}</strong>
                            <span>{reparacion.trabajo}</span>
                        </div>
                        <span className="reparacion-estado">{reparacion.estado}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default PaginaReparaciones;
