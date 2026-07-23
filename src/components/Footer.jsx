export default function Footer() {
  return (
    <footer className="bg-inverse-surface dark:bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop py-16 max-w-max-width mx-auto">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <span className="font-headline-md text-headline-md font-bold text-primary-container">
            Dekoacabados Market
          </span>
          <p className="font-body-md text-surface-variant dark:text-secondary max-w-xs">
            Transformando espacios con precisión arquitectónica y materiales
            de la más alta calidad.
          </p>
          <div className="flex gap-4">
            <a
              className="text-primary-container hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              className="text-primary-container hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">thumb_up</span>
            </a>
            <a
              className="text-primary-container hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Productos</h4>
            <a
              className="text-surface-variant dark:text-secondary hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100"
              href="#pisos"
            >
              Pisos
            </a>
            <a
              className="text-surface-variant dark:text-secondary hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100"
              href="#paredes"
            >
              Paredes
            </a>
            <a
              className="text-surface-variant dark:text-secondary hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100"
              href="#techos"
            >
              Techos
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Compañía</h4>
            <a
              className="text-surface-variant dark:text-secondary hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Garantía
            </a>
            <a
              className="text-surface-variant dark:text-secondary hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Certificados
            </a>
            <a
              className="text-surface-variant dark:text-secondary hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100"
              href="#"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold mb-2">Ubicación</h4>
          <div className="flex items-start gap-3 text-surface-variant dark:text-secondary">
            <span className="material-symbols-outlined text-primary-container">
              location_on
            </span>
            <p>
              Encuéntranos en nuestro showroom principal para conocer las
              texturas en vivo.
            </p>
          </div>
          <div className="mt-4 rounded overflow-hidden h-32 grayscale hover:grayscale-0 transition-all duration-500">
            <div
              className="bg-cover bg-center w-full h-full"
              data-location="Bogotá, Colombia"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9uFcg4ltOdSlE78zkePGK9n0FDmsdw1qOGdwc9hWETaQdBoBmr2TQzXb35Vf_-SpPxamuNP2br9KSpHe6YwhjvxcOpzEvmyVN5-mtt1IE4SjgkVQkZoOf9r5I9I4hsezhvhQYKaG4DDslyEXgEgB_lRhMHhrTr4RUZkgqUD33YkAWBkYNGi1euaAltO2r6bBSJDSrY4sUqFPDa9hFvtueB6BMJatpEtnX5k5gUkRuZnwL7prvAuj-bw')",
              }}
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-8 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <p className="text-surface-variant dark:text-secondary text-sm text-center">
          © 2024 Dekoacabados Market. Transformando espacios con precisión
          arquitectónica.
        </p>
      </div>
    </footer>
  );
}