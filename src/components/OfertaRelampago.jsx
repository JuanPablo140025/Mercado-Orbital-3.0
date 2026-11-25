import { useState, useEffect } from "react";

function OfertaRelampago({ segundosIniciales = 30 }) {
    const [segundos, setSegundos] = useState(segundosIniciales);

    useEffect(() => {
        if (segundos <= 0) return;

        const id = setInterval(() => {
            setSegundos((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(id);
    }, [segundos]);

    if (segundos <= 0) {
        return null;
    }

    return (
        <div className="oferta">
            <span>Oferta relámpago: Propulsor turbo a 450 cr</span>
            <span className="cuenta">Termina en {segundos}s</span>
        </div>
    );
}

export default OfertaRelampago;
