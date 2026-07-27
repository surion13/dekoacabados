import { getWhatsAppLink } from "../hooks/Whatsapp";


export default function TechnicalCTA() {
  return (
    <section className="bg-inverse-surface py-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-max-width mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-left md:w-1/2">
          <h2 className="font-headline-lg text-headline-lg text-primary-fixed mb-4">
            ¿Necesitas asesoría técnica?
          </h2>
          <p className="font-body-md text-surface-variant">
            Nuestros expertos arquitectos te ayudarán a elegir el material
            ideal para el tráfico y clima de tu proyecto.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href={getWhatsAppLink("Hola, necesito asesoría técnica para elegir un material.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-container text-on-primary-container px-10 py-4 font-headline-md text-[16px] font-bold uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>
  );
}