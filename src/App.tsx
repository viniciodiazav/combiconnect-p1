import Map from "./components/Map";
import Reportes from "./components/Reportes";

export default function App() {
  return (
    <>
      <header className="max-h-25 overflow-hidden flex items-center m-auto max-w-4/5">
        <img src="Logo.png" alt="" className="w-2/5 relative top-4 right-25" />
      </header>
      <Map />
      <Reportes />
    </>
  );
}
