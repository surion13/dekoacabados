export default function CatalogHeroParedes() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 max-w-max-width mx-auto">
      <div className="flex items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="font-label-caps text-label-caps text-primary uppercase mb-4 block tracking-[0.2em]">
            Colección Exclusiva
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6">
            Catálogo de Paredes
          </h1>
          <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
          Los paneles WPC (Wood Plastic Composite o Composite de Madera y Plástico) son un revestimiento moderno y de alta durabilidad que combina fibras de madera natural con polímeros reciclados. Se han convertido en la opción preferida para la arquitectura contemporánea gracias a su estética cálida, facilidad de instalación y resistencia ante las condiciones climáticas.
          </p>
        </div>
        <img
          src="/logo.webp"
          alt="Dekoacabados Market"
          className="hidden md:block w-full max-w-md select-none pointer-events-none"
        />
      </div>
    </section>
  );
}

