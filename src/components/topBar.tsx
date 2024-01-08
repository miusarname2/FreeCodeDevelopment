export default function topBar() {
  return (
    <div className="bg-[#202124] px-4 py-2 flex items-center justify-between fixed w-full top-0 z-10">
          <div className="flex items-center space-x-4">
            <div className="space-x-2">
              <a
                className="text-white hover:bg-gray-700 transition-colors duration-200"
                href="#"
                rel="ugc"
              >
                Archivo
              </a>
              <a
                className="text-white hover:bg-gray-700 transition-colors duration-200"
                href="#"
                rel="ugc"
              >
                Editar
              </a>
              <a
                className="text-white hover:bg-gray-700 transition-colors duration-200"
                href="#"
                rel="ugc"
              >
                Selección
              </a>
              <a
                className="text-white hover:bg-gray-700 transition-colors duration-200"
                href="#"
                rel="ugc"
              >
                Ver
              </a>
              <a
                className="text-white hover:bg-gray-700 transition-colors duration-200"
                href="#"
                rel="ugc"
              >
                Ir
              </a>
              <a
                className="text-white hover:bg-gray-700 transition-colors duration-200"
                href="#"
                rel="ugc"
              >
                Ejecutar
              </a>
              <a
                className="text-white hover:bg-gray-700 transition-colors duration-200"
                href="#"
                rel="ugc"
              >
                Terminal
              </a>
              <a
                className="text-white hover:bg-gray-700 transition-colors duration-200"
                href="#"
                rel="ugc"
              >
                Ayuda
              </a>
            </div>
          </div>
        </div>
  )
}
