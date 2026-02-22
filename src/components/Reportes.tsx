import Notificaciones from "./Notificaciones";
import ReportesLista from "./ReportesLista";

export default function Reportes() {
  return (
    <section className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
      <article className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold">Reportar incidente</h2>
        <p className="mt-1 text-sm text-slate-500">
          Selecciona el tipo de reporte para notificar de inmediato al centro de control.
        </p>
        <ReportesLista />
      </article>

      <Notificaciones />
    </section>
  );
}
