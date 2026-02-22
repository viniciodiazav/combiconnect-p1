const notificaciones = [
  {
    titulo: "Parada saturada en Metro Tacubaya",
    detalle: "Se reporta alta demanda de pasajeros. Reducir tiempo de abordaje.",
    hora: "Hace 3 min",
    icono: "🔔",
  },
  {
    titulo: "Lluvia ligera en Av. Insurgentes",
    detalle: "Conduce con precaución y mantén distancia de seguridad.",
    hora: "Hace 8 min",
    icono: "🌦️",
  },
  {
    titulo: "Desvío sugerido por obra vial",
    detalle: "Tomar calle paralela entre estaciones 5 y 6 para evitar retrasos.",
    hora: "Hace 12 min",
    icono: "🧭",
  },
  {
    titulo: "Centro de control recibió tu último reporte",
    detalle: "Seguimiento activo del incidente de tráfico registrado.",
    hora: "Hace 20 min",
    icono: "✅",
  },
];

export default function Notificaciones() {
  return (
    <article className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-slate-200">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Notificaciones</h2>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {notificaciones.length} nuevas
        </span>
      </div>

      <div className="space-y-3">
        {notificaciones.map((notificacion) => (
          <div
            key={notificacion.titulo}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-3"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-blue-100 p-2 text-lg">{notificacion.icono}</div>
              <div className="min-w-0">
                <p className="font-semibold leading-tight text-slate-800">{notificacion.titulo}</p>
                <p className="mt-1 text-sm text-slate-600">{notificacion.detalle}</p>
                <p className="mt-2 text-xs font-medium text-slate-400">{notificacion.hora}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}