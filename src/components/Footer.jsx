import { Link } from "react-router-dom";

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
            <Link
              className="text-surface-variant dark:text-secondary hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100"
              to="/catalogo-pisos"
            >
              Pisos
            </Link>
            <Link
              className="text-surface-variant dark:text-secondary hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100"
              to="/catalogo-paredes"
            >
              Paredes
            </Link>
            <Link
              className="text-surface-variant dark:text-secondary hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100"
              to="/catalogo-cielo"
            >
              Techos
            </Link>
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
              Encuéntranos en nuestro local principal para conocer las
              texturas en vivo.
            </p>
          </div>
          <div className="mt-4 rounded overflow-hidden h-32 grayscale hover:grayscale-0 transition-all duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.453056663453!2d-74.0610468259624!3d4.8634926402267675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f87b897aa6fcb%3A0xbb2d06eff7b26fe0!2sdekoacabados%20market!5e0!3m2!1ses!2sco!4v1784906614971!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ubicación Dekoacabados Market"
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