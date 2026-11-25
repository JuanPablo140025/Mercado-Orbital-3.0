import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import PaginaInicio from "./pages/PaginaInicio.jsx";
import PaginaCatalogo from "./pages/PaginaCatalogo.jsx";
import PaginaTaller from "./pages/PaginaTaller.jsx";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada.jsx";
import PaginaHangar from "./pages/PaginaHangar.jsx";
import PaginaReparaciones from "./pages/PaginaReparaciones.jsx";
import PaginaHangarNoEncontrada from "./pages/PaginaHangarNoEncontrada.jsx";
import LayoutTienda from "./components/LayoutTienda.jsx";
import LayoutHangar from "./components/LayoutHangar.jsx";
import PanelCarrito from "./components/PanelCarrito.jsx";
import Aviso from "./components/Aviso.jsx";
import FichaProducto from "./components/FichaProducto.jsx";

const URL_CATALOGO = "/api/productos.json";

function App() {
    const [carrito, setCarrito] = useState([]);
    const [aviso, setAviso] = useState("");
    const [carritoAbierto, setCarritoAbierto] = useState(false);

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    const [url, setUrl] = useState(URL_CATALOGO);
    const [fichaId, setFichaId] = useState(null);

    async function cargarCatalogo() {
        setCargando(true);
        setError("");

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`El servidor respondió ${response.status}`);
            }

            const datos = await response.json();
            setProductos(datos);
        } catch (e) {
            setError(e.message);
        } finally {
            setCargando(false);
        }
    }

    useEffect(() => {
        cargarCatalogo();
    }, [url]);

    const totalUnidades = carrito.reduce((suma, item) => suma + item.cantidad, 0);
    const totalPrecio = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);

    function agregarAlCarrito(producto) {
        const yaEsta = carrito.some((item) => item.id === producto.id);

        if (yaEsta) {
            setCarrito(carrito.map((item) =>
                item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
            ));
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }

        setAviso(`Agregaste ${producto.nombre} al carrito`);
    }

    function quitarDelCarrito(id) {
        setCarrito(carrito.filter((item) => item.id !== id));
    }

    useEffect(() => {
        document.title = `(${totalUnidades}) Mercado Orbital`;
    }, [totalUnidades]);

    useEffect(() => {
        if (aviso === "") return;

        const id = setTimeout(() => {
            setAviso("");
        }, 2500);

        return () => clearTimeout(id);
    }, [aviso]);

    useEffect(() => {
        function manejarTecla(e) {
            if (e.key === "Escape") {
                setCarritoAbierto(false);
                setFichaId(null);
            }
        }

        window.addEventListener("keydown", manejarTecla);

        return () => window.removeEventListener("keydown", manejarTecla);
    }, []);

    useEffect(() => {
        function alternarConC(e) {
            if (e.key === "c" || e.key === "C") {
                setCarritoAbierto(!carritoAbierto);
            }
        }

        window.addEventListener("keydown", alternarConC);

        return () => window.removeEventListener("keydown", alternarConC);
    }, [carritoAbierto]);

    return (
        <>
            <Routes>
                <Route element={<LayoutTienda totalUnidades={totalUnidades} onAbrirCarrito={() => setCarritoAbierto(true)} />}>
                    <Route
                        index
                        element={
                            <PaginaInicio
                                productos={productos}
                                cargando={cargando}
                                error={error}
                                onReintentar={cargarCatalogo}
                                onAgregar={agregarAlCarrito}
                                onVerFicha={setFichaId}
                            />
                        }
                    />
                    <Route
                        path="catalogo"
                        element={
                            <PaginaCatalogo
                                productos={productos}
                                cargando={cargando}
                                error={error}
                                onReintentar={cargarCatalogo}
                                onAgregar={agregarAlCarrito}
                                onVerFicha={setFichaId}
                                url={url}
                                onCambiarUrl={setUrl}
                            />
                        }
                    />
                    <Route path="taller" element={<PaginaTaller />} />
                    <Route path="*" element={<PaginaNoEncontrada />} />
                </Route>

                <Route path="hangar" element={<LayoutHangar />}>
                    <Route index element={<PaginaHangar />} />
                    <Route path="reparaciones" element={<PaginaReparaciones />} />
                    <Route path="*" element={<PaginaHangarNoEncontrada />} />
                </Route>
            </Routes>

            <Aviso mensaje={aviso} />

            {carritoAbierto && (
                <PanelCarrito
                    items={carrito}
                    total={totalPrecio}
                    onCerrar={() => setCarritoAbierto(false)}
                    onQuitar={quitarDelCarrito}
                />
            )}

            {fichaId !== null && (
                <FichaProducto
                    id={fichaId}
                    onCerrar={() => setFichaId(null)}
                    onAgregar={agregarAlCarrito}
                    producto={productos.find((p) => p.id === fichaId)}
                />
            )}
        </>
    );
}

export default App;

