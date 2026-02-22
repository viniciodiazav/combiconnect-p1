export default function Map() {
  return (
    <section className="grid gap-4 lg:grid-cols-[280px_1fr]">
      <article className="rounded-3xl bg-gradient-to-b from-blue-700 to-blue-900 p-5 text-white shadow-lg">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/25 bg-white/20 text-center text-sm font-semibold">
          Foto del conductor
        </div>

        <div className="mt-5 space-y-4 text-sm">
          <div>
            <p className="text-blue-100">Nombre del conductor</p>
            <p className="text-lg font-semibold">Juan Pérez</p>
          </div>

          <div className="rounded-xl bg-white/10 p-3">
            <p className="text-xs uppercase tracking-wide text-blue-100">Número de licencia</p>
            <p className="font-medium">CDMX-C-04258937</p>
          </div>

          <div className="rounded-xl bg-white/10 p-3">
            <p className="text-xs uppercase tracking-wide text-blue-100">Placas del vehículo</p>
            <p className="font-medium">A-1234-Z</p>
          </div>
        </div>
      </article>

      <article className="overflow-hidden rounded-3xl bg-white p-4 shadow-lg ring-1 ring-slate-200">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Ruta activa</h2>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
            En servicio
          </span>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <iframe
            title="Mapa de Ciudad de México"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-99.3516%2C19.2200%2C-98.9415%2C19.5928&layer=mapnik&marker=19.4326%2C-99.1332"
            className="h-96 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </article>
    </section>
  );
}