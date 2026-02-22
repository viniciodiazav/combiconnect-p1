import {
  ExclamationTriangleIcon,
  LockClosedIcon,
  UserIcon,
  ExclamationCircleIcon,
  WrenchScrewdriverIcon,
  CloudIcon,
} from "@heroicons/react/24/solid";

export default function ReportesLista() {
  return (
    <div className="grid grid-cols-4 mt-5 gap-2">
      <div className="bg-[#0443af] flex justify-center items-center rounded-xl p-4 flex-col space-y-1 cursor-pointer hover:opacity-75 transition-all">
        <WrenchScrewdriverIcon className="text-white w-10" />
        <p className="text-center text-white font-bold">Falla mecanica</p>
      </div>

      <div className="bg-[#0443af] flex justify-center items-center rounded-xl p-4 flex-col space-y-1 cursor-pointer hover:opacity-75 transition-all">
        <LockClosedIcon className="text-white w-10" />
        <p className="text-center text-white font-bold">Congestionamiento</p>
      </div>

      <div className="bg-[#0443af] flex justify-center items-center rounded-xl p-4 flex-col space-y-1 cursor-pointer hover:opacity-75 transition-all">
        <ExclamationTriangleIcon className="text-white w-10" />
        <p className="text-center text-white font-bold">Accidente veicular propio</p>
      </div>

      <div className="bg-[#0443af] flex justify-center items-center rounded-xl p-4 flex-col space-y-1 cursor-pointer hover:opacity-75 transition-all">
        <ExclamationCircleIcon className="text-white w-10" />
        <p className="text-center text-white font-bold">Accidente veicular externo</p>
      </div>

      <div className="bg-[#0443af] flex justify-center items-center rounded-xl p-4 flex-col space-y-1 cursor-pointer hover:opacity-75 transition-all">
        <UserIcon className="text-white w-10" />
        <p className="text-center text-white font-bold">Pasajero conflictivo</p>
      </div>

      <div className="bg-[#0443af] flex justify-center items-center rounded-xl p-4 flex-col space-y-1 cursor-pointer hover:opacity-75 transition-all">
        <CloudIcon className="text-white w-10" />
        <p className="text-center text-white font-bold">Mal clima</p>
      </div>

    </div>
  );
}
