import Catalogo from "../components/Catalogo.jsx";

function PaginaCatalogo({ productos, cargando, error, onReintentar, onAgregar, onVerFicha }) {
    return (
        <section>
            <h2 className="titulo-pagina">Catálogo de repuestos</h2>

            <Catalogo
                productos={productos}
                cargando={cargando}
                error={error}
                onReintentar={onReintentar}
                onAgregar={onAgregar}
                onVerFicha={onVerFicha}
            />
        </section>
    );
}

export default PaginaCatalogo;

