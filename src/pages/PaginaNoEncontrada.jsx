import { Link } from "react-router";

function PaginaNoEncontrada() {
    return (
        <section className="no-encontrada">
            <h2>Esta sección no existe en la estación</h2>
            <p>Revisen la dirección o vuelvan al mostrador de Nova.</p>
            <Link to="/">Volver al inicio</Link>
        </section>
    );
}

export default PaginaNoEncontrada;
