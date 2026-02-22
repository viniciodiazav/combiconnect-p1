const reportes = [
  { icono: "🛠️", label: "Falla mecánica" },
  { icono: "🚧", label: "Congestionamiento" },
  { icono: "⚠️", label: "Accidente vehicular propio" },
  { icono: "🚨", label: "Accidente vehicular externo" },
  { icono: "🙍", label: "Pasajero conflictivo" },
  { icono: "🌧️", label: "Mal clima" },
];

export default function ReportesLista() {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {reportes.map(({ icono, label }) => (
        <button
          key={label}
          className="group flex min-h-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl bg-blue-700 p-4 text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-800"
          type="button"
        >
          <span className="text-3xl transition group-hover:scale-110">{icono}</span>
          <p className="text-center text-sm font-semibold">{label}</p>
        </button>
      ))}
    </div>
  );
}