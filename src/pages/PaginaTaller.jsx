function PaginaTaller() {
    return (
        <section className="taller">
            <div className="taller-cabecera">
                <img src="/img/kuma-hangar.webp" alt="Kuma, el robot araña de Nova, moviendo las patas" width="220" height="150" fetchPriority="high" />
                <div>
                    <h2>El taller de Kuma</h2>
                    <p className="taller-intro">
                        Kuma es el robot araña de Nova. Con sus ocho patas sostiene la nave, revisa cada pieza y
                        anota qué cambió. El taller queda en el Hangar 3 de la Estación Umbral.
                    </p>
                </div>
            </div>

            <div className="servicios">
                <article>
                    <img src="/img/motor-iones.png" alt="" width="96" height="96" />
                    <h3>Revisión de motores</h3>
                    <p>Prueba de empuje y limpieza de toberas antes de cada salida.</p>
                </article>
                <article>
                    <img src="/img/escudo-deflector.png" alt="" width="96" height="96" />
                    <h3>Cambio de escudos</h3>
                    <p>Se retira el deflector gastado y se calibra el nuevo con la nave encendida.</p>
                </article>
                <article>
                    <img src="/img/radar-largo-alcance.png" alt="" width="96" height="96" />
                    <h3>Ajuste de radares</h3>
                    <p>Kuma alinea la antena y comprueba el alcance con tres balizas de prueba.</p>
                </article>
            </div>
        </section>
    );
}

export default PaginaTaller;

