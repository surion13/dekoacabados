import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <section
      className="py-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop"
      id="categories"
    >
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg mb-4">
          Nuestras Categorías
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Pisos */}
        <div
          className="group relative md:col-span-8 overflow-hidden aspect-video md:aspect-auto md:h-112.5 bg-white border border-outline-variant hover:border-primary transition-colors cursor-pointer"
          id="pisos"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDJ7pmk84OLrrrBaaddaSbJTGE6zWdr2oqfVyL8ITCrhMc1v_CiEs1dL37_ia_JaUiPxxcFQPDWvYplpgkA1QMRTcPZEiQY98G3ymC2_p4k8YWpcKcqzta3abAAdDEwbtcqI0dvE_JQCNMPIBdXWlwTpUx-cyhIqPHBAidsJ_DY4bSR-UKsjNd2tqw12-jm2o_U11Z0uIGVGtI5AE4_FSm-MKnpBbFyNJhaHuKB4mbNz85ezWpZMXMjw')",
            }}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <h3 className="font-headline-lg text-white mb-2">Pisos</h3>
            <p className="text-white/80 font-body-md max-w-md">
              Durabilidad excepcional con texturas naturales que elevan
              cualquier ambiente.
            </p>
            <Link to="/catalogo-pisos" className="mt-4 flex items-center text-primary-container font-bold gap-2">
              Explorar Pisos{" "}
              <span className="material-symbols-outlined">trending_flat</span>
            </Link>
          </div>
        </div>

        {/* Paredes */}
        <div
          className="group relative md:col-span-4 overflow-hidden aspect-square md:aspect-auto bg-white border border-outline-variant hover:border-primary transition-colors cursor-pointer"
          id="paredes"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzVlIkyUZapq2BSpSHZ8Wuy5AosyCMOczgDXeC9eh0d4fKa2wNrUn_3FqhlT-PkiT-T2sAfffJ2ReZXHnWjV2rbeUrQCZZyl6BxfwyIiic0wvuQjdmBVwz5bD6cUFuXIbdX5QuyIc6m8N1oWLdYe_s8fHJyv57fRS3jwBci-YtJZDGzHExQk14HHiWB4XfpCpMSbYnEJ1slqzHssf7tBw4aQk3dJDXnvV1J2qLsLl7NalInfJ3H4rd9w")',
            }}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="font-headline-md text-white mb-2">Paredes</h3>
            <p className="text-white/80 font-body-md max-w-md">
              Paneles 3D y revestimientos que transforman muros en piezas de
              arte arquitectónico.
            </p>
            <Link to="/catalogo-paredes" className="mt-4 flex items-center text-primary-container font-bold gap-2">
              Explorar Paredes{" "}
              <span className="material-symbols-outlined">trending_flat</span>
            </Link>
          </div>
        </div>

        {/* Techos */}
        <div
          className="group relative md:col-span-12 overflow-hidden aspect-21/11  md:aspect-21/9 bg-white border border-outline-variant hover:border-primary transition-colors cursor-pointer"
          id="techos"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASwtC9KPtOK_HxkIIElJVhiIBNFwrqzUAzL1YND1Hf9f3IJBJ4HUc_oj0yGlP7BucT5Y0VEVuZlW4kOGMdzFvLgEBpk7xEa07hnOqRHl2F_AnPq1fmxfYlj1yNK9tW3S3s-FBHJOaIMaZoehIeqNLBW4FIx7GGy_Z3vYgbre64sZ1_ij4iG43HUQhQZtN1x28P2NE4Ji_VHH45EgUTi_l56pW_DmaXLr5YDtMMVaH8Audr4csmdNxALw')",
            }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
            <h3 className="font-headline-lg text-white mb-2">Cielo Raso</h3>
            <p className="text-white/90 max-w-lg mb-6">
              Sistemas de cielorrasos técnicos y decorativos de rápida
              instalación.
            </p>
            <Link 
              className="bg-primary-container text-on-primary-container px-8 py-3 font-bold"
              to="/catalogo-cielo"
            >
              Ver Diseños
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
       