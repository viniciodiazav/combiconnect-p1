export default function Map() {
  return (
    <div className="m-auto max-w-4/5 grid grid-cols-[1fr_5fr] gap-2">
      <div className="w-full min-h-full bg-[#03b9e6c2] rounded-lg p-5 flex flex-col items-center">
        <div className="bg-gray-200 text-lg font-bold text-gray-900 flex justify-center items-center text-center w-1/2 h-1/3">Foto del conductor</div>
        <div className="w-full mt-5 text-lg space-y-2">
            <div>
                <p className="font-bold">Nombre: <span className="font-normal">Juan</span></p>
                <p className="font-bold">Apellido: <span className="font-normal">Perez</span></p>
            </div>
            <div>
                <p className="text-center font-bold">Número de licencia</p>
                <p className="text-center">CDMX-C-04258937</p>
            </div>
            <div>
                <p className="text-center font-bold">Placas del veículo</p>
                <p className="text-center">A-1234-Z</p>
            </div>
        </div>
      </div>
      <section className="m-auto w-full rounded-lg bg-[#010e79] p-4 shadow-lg">
        <div className="overflow-hidden rounded-sm border border-[#010e79]">
          <iframe
            title="Mapa de Ciudad de México"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-99.3516%2C19.2200%2C-98.9415%2C19.5928&layer=mapnik&marker=19.4326%2C-99.1332"
            className="h-96 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
