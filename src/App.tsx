import Map from "./components/Map";
import Reportes from "./components/Reportes";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-100 py-6 text-slate-900">
      <div className="mx-auto w-[92%] max-w-6xl">
        <header className="mb-6 rounded-3xl bg-white/95 p-4 shadow-sm ring-1 ring-slate-200 backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <img src="Logo.png" alt="CombiConnect" className="h-16 object-contain" />
            <div className="text-right">
              <p className="text-sm font-medium text-slate-500">Panel del conductor</p>
              <p className="text-lg font-semibold">Monitoreo de viaje en tiempo real</p>
            </div>
          </div>
        </header>

        <div className="space-y-6">
          <Map />
          <Reportes />
        </div>
      </div>
    </main>
  );
}