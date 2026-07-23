const Stars = () => (
  <div className="flex text-primary mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className="material-symbols-outlined"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        star
      </span>
    ))}
  </div>
);

const testimonials = [
  {
    text: '"Excelente lugar para comprar todos los productos en PVC para remodelar mi casa calidad al mejor precio"',
    italic: true,
    tags: null,
    initials: "JP",
    initialsBg: "bg-primary-fixed-dim",
    initialsText: "text-on-primary-fixed",
    name: "Jose Gregorio Pineda Cobaleda",
    role: "Cliente Residencial",
  },
  {
    text: '"Excelente servicio puntualidad en la entrega, muy buena atención y productos de buena calidad."',
    italic: false,
    tags: ["Puntualidad", "Calidad", "Profesionalidad"],
    initials: "MM",
    initialsBg: "bg-primary-fixed-dim",
    initialsText: "text-on-primary-fixed",
    name: "Maria Medina Marquez",
    role: "Propietaria",
  },
  {
    text: '"Buenos materiales, garantía y certificados"',
    italic: false,
    tags: null,
    initials: "II",
    initialsBg: "bg-primary-fixed-dim",
    initialsText: "text-on-primary-fixed",
    name: "Ismael Ilarraza",
    role: "Contratista",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-label-caps text-label-caps text-primary block mb-2">
              SATISFACCIÓN GARANTIZADA
            </span>
            <h2 className="font-headline-lg text-headline-lg">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <div className="flex gap-2">
            <Stars />
            <span className="font-bold">4.9/5 en Google Reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface-container-lowest p-8 border border-outline-variant/30 flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
            >
              <Stars />
              <p
                className={`font-body-md text-on-surface ${
                  t.tags ? "mb-6" : "mb-8"
                } ${t.italic ? "italic" : ""}`}
              >
                {t.text}
              </p>
              {t.tags && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-variant text-[10px] px-2 py-1 rounded font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-auto flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${t.initialsBg} flex items-center justify-center ${t.initialsText} font-bold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-secondary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}