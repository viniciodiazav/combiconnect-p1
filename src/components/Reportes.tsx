import Notificaciones from "./Notificaciones";
import ReportesLista from "./ReportesLista";

export default function Reportes() {
  return (
    <div className="max-w-4/5 m-auto mt-6">
      <div className="grid grid-cols-[1.5fr_2fr] gap-2">
        <div>
          <p className="text-gray-900 font-bold text-3xl">Reportar</p>
          <ReportesLista />
        </div>
        <Notificaciones />
      </div>
    </div>
  );
}