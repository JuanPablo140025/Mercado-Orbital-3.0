import { Link } from "react-router";

function PaginaHangarNoEncontrada() {
    return (
        <section>
            <h2>Esta ruta no existe en el hangar</h2>
            <img
                src="/img/hangar/kuma-perdido.webp"
                alt="Kuma perdido en el hangar"
                className="kuma-perdido"
            />
            <p>Kuma buscó por todos lados y no encontró esa sección.</p>
            <Link to="/hangar">Volver al hangar</Link>
        </section>
    );
}

export default PaginaHangarNoEncontrada;
