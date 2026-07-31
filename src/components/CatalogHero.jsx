export default function CatalogHero() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 max-w-max-width mx-auto">
      <div className="flex items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span className="font-label-caps text-label-caps text-primary uppercase mb-4 block tracking-[0.2em]">
            Colección Exclusiva
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6">
            Catálogo de Cielo Raso en PVC
          </h1>
          <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
            Cielo raso en pvc importado. Resistencia a la humedad. Presentación en láminas de 25 X 7mm y lámina de 30 cms X 9mm. Cotización de materiales de estructura por separado.
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